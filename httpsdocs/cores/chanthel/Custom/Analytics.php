<?php
namespace Custom;

use CB\Util;
use CB\Objects;
use CB\Path;

class Analytics
{
    public function load($p)
    {
        return array(
            'success' => true
            ,'data'=> array(
                'html' => "<div class='msg'>Analytics custom to display.</div>"
//                ,'nodes' => $solrNodes
            )
        );

    }
}
