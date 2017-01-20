<?php

namespace CB\Facets;

use CB\L;
use CB\Util;

class StringsFacet
{

    protected $config = array();

    protected $solrResultRoot = 'facet_counts';

    public function __construct($config)
    {
        $this->config = $config;
        $this->field = empty($config['field'])
            ? $config['name']
            : $config['field'];
    }

    public function getSolrParams()
    {
        $rez = array(
            'facet' => true
            ,'facet.field' => array(
                '{!ex='.$this->field.' key='.$this->config['name'].'}'.$this->field
            )
        );

        if (!empty($this->config['child'])) {
            $domain = empty($this->config['domain'])
                ? ['blockParent' => 'child:false']
                : $this->config['domain'];

            $rez = array(
                'facet' => true
                // ,'requestHandler' => 'bjf'
                ,'json.facet' => [
                    $this->config['name'] => [
                        'type' => 'terms',
                        'field' => $this->field,
                        'domain' => $domain
                    ]
                ]
            );
        }

        return $rez;
    }

    public function getFilters(&$p)
    {
        $rez = array();
        if (!empty($p['filters'][$this->field])) {
            $conditions = array();
            $v = $p['filters'][$this->field];
            for ($i=0; $i < sizeof($v); $i++) {
                if (!empty($v[$i]['values'])) {
                    $conditions[] = '{!tag=' . $this->field . '}' .
                        $this->field.':('.implode(' '.$v[$i]['mode'].' ', $v[$i]['values']).')';
                }
            }

            $rez['fq'][] = implode(' AND ', $conditions);
        }

        return $rez;
    }

    public function loadSolrResult($solrResult)
    {
        $this->solrData = array();

        $index = $this->config['name'];
        if (!empty($this->config['child'])) {
            $this->solrResultRoot = 'facets';
        }

        //detect facet results
        $sr = null;
        if (!empty($solrResult->{$this->solrResultRoot})) {
            $sr = &$solrResult->{$this->solrResultRoot};
        } elseif (!empty($solrResult->facets)) {
            $sr = &$solrResult->facets;
        }

        if (!empty($sr)) {
            if (empty($this->config['child'])) {
                if (!empty($sr->facet_fields->$index)) {
                    $this->solrData = $sr->facet_fields->$index;
                }
            } elseif (!empty($sr->$index)) {
                $data = (array) $sr->$index;
                if (!empty($data['buckets'])) {
                    foreach ($data['buckets'] as $k => $v) {
                        $this->solrData[$v->val] = $v->count;
                    }
                }
            }
        }
    }

    public function getTitle()
    {
        $rez = 'Facet';
        $coreLanguage = \CB\Config::get('language');
        $userLanguage = \CB\Config::get('user_language');

        if (!empty($this->config['title'])) {
            $t = &$this->config['title'];
            if (is_scalar($t)) {
                $rez = $t;
                if ($t[0] == '[') {
                    $rez = L\get(substr($t, 1, strlen($t) - 2));
                    if (empty($rez)) {
                        $rez = $t;
                    }
                }
            } elseif (!empty($t[$userLanguage])) {
                $rez = $t[$userLanguage];
            } elseif (!empty($t[$coreLanguage])) {
                $rez = $t[$coreLanguage];
            }
        }

        return $rez;
    }

    /**
     * get sort options from config
     * @param  string $defaultDirection default direction to use if not specified in config
     * @param  string $defaultType      default type to use if not specified in config
     * @return array  | null
     */
    protected function getSortParams($defaultDirection = 'asc', $defaultType = 'asString')
    {
        $rez = null;
        $cfg = &$this->config;

        if (!empty($cfg['sort'])) {
            if (is_array($cfg['sort'])) {
                $rez = $cfg['sort'];

                if (empty($rez['direction'])) {
                    $rez['direction'] = $defaultDirection;
                }

                if (empty($rez['type'])) {
                    $rez['type'] = $defaultType;
                }

            } else {
                $parts = Util\toTrimmedArray($cfg['sort'], ' ');
                $rez = array(
                    'property' => $parts[0]
                    ,'direction' => empty($parts[1])
                        ? $defaultDirection
                        : $parts[1]
                    ,'type' => empty($parts[2])
                        ? $defaultType
                        : $parts[2]
                );
            }
        }

        return $rez;
    }

    public function getClientData($options = array())
    {
        $options = $options; // dummy codacy assignment
        $rez = array(
            'f' => $this->field
            ,'title' => $this->getTitle()
            ,'items' => $this->solrData
        );

        //check if have default sorting set in cofig
        if (!empty($this->config['sort'])) {
            //convert items to suitable sortable array
            $rez['items'] = array();
            foreach ($this->solrData as $k => $v) {
                $rez['items'][$k] = array(
                    'name' => $k
                    ,'count' => $v
                );
            }

            $sp = $this->getSortParams();

            Util\sortRecordsArray(
                $rez['items'],
                $sp['property'],
                $sp['direction'],
                $sp['type'],
                true
            );

            //add sort param for client side
            $rez['sort'] = $sp;
        }

        return $rez;
    }
}
