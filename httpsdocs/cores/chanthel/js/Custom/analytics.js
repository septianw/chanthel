Ext.namespace('Custom.view');

Ext.define('Custom.view.Analytics', {
    extend: 'CB.browser.view.Interface'
    ,xtype: 'CBBrowserViewAnalytics'
    ,title: 'Workflow'
    ,padding: 0
    ,autoScroll: true
    ,initComponent: function()
    {
         Ext.require([
            "http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"
]);
        Ext.apply(this,{
            html: '',
            listeners: {
                scope: this
//                show: function()
//                {
//                    this.removeAll(true);
//                    alert('show');
//                    this.add([{
//                        region: 'center'
//                        ,scrollable: true
//                        ,border: false
//                        ,xtype : 'panel'
//            //            ,html: "danang contenthtml html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html html  "
//                        ,html: "show content"
//                }]);
//                }
                ,activate: this.onActivate
                // load: function(store,records,success,operation,opts) {}
//                afterrender: this.onAfterRender
                // selectionchange: this.onSelectionChange

            }
        });

        Custom.view.Analytics.superclass.initComponent.apply(this, arguments);
        // this.addEvents('selectionchange');
        // this.enableBubble(['selectionchange']);
    }
    ,onActivate: function() 
    {
        this.reload();
    }
    ,getViewParams: function(loadingParams) 
    {
//        this.params = Ext.apply({}, loadingParams);
//        this.reload();
//        return false;
    }
    ,onAfterRender: function()
    {
        // this.params.caseId = this.data.caseId
        // this.reload();
    }
    ,reload: function()
    {
//         Ext.require([
//            // "http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"
//]);
        // Ext.Loader.injectScriptElement('http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js', this.onAnalyticsLoad, this.onError);
        Custom_Analytics.load(this.params, this.onAnalyticsLoad, this); // bisa
    }
    ,onAnalyticsLoad: function(r, e)
    {
        var data_html = r.data.html;
        // Ext.Loader.setConfig({enabled: true});
//        Ext.require([
//            "http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"
//            ],function() {
//                // console.log('do something');
//                // alert('do something');
//        });
//        Ext.onReady(function() 
//        {
//            Ext.require([
//                "http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"
//            ]);
//        });
        // remove items
        this.removeAll(true);
        this.add([{
            region: 'center'
//            ,scrollable: true
            ,border: false
            ,xtype : 'panel'
             ,html: "<div id='page-wrapper'><div class='row'><div class='col-md-4'><div id='graph_donut_1'></div></div><div class='col-md-4'><div id='graph_pie_2'></div></div><div class='col-md-4'><div id='graph_bar_stacked_1'></div></div><div class='col-md-4'><div id='graph_bar_stacked_2'></div></div></div><div class='row'><div class='col-md-6'><div id='graph_axes_rotated_1'></div></div><div class='col-md-6'><div id='graph_scatter_1'></div></div>  </div></div>"
            // ,html: "<iframe frameBorder='0'  src='http://192.168.1.123/tes/'></iframe>"
            // ,html: "<iframe frameBorder='0' src='/tes.php'></iframe>"
//            ,'loader' : 
//            {
////                 url: '/data/custom_chart.php' // bisa // lokasi direktory di : httpdocs
//                autoLoad: true,
////                update: this.onUpdateLoader,
//                listeners : 
//                {
//                // afterload load beforeload show render beforerender afterrender
//                }
//            }
            ,listeners : 
            {
                render: 
                {
                    fn : function()
                    {
      var sort = true;

var generate1 = function() {
    return c3.generate({
        bindto: '#graph_donut_1',
        data: 
        {
            columns: [
                //            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                //            ["jambu", 25],
                ["rambutan", 20],
                ["pir", 30],
                ["mangga", 32],
                ["melon", 25]
            ],
            type: 'donut',
        },
        axis: 
        {
            x: {
                label: 'Sepal.Width'
            },
            y: {
                label: 'Petal.Width'
            }
        },
        donut: 
        {
            title: "Graph Donut 1"
        },
        tooltip: 
        {
            format: 
            {
                title: function() 
                {
                    return "Donut 1"
                },
                value: function(value, ratio, id) 
                {
                    var format = id === 'data1' ? d3.format(',') : d3.format('');
                    return format(value);
                }
                // value: d3.format(',') // apply this format to both y and y2
            }
        },
        color: {
            // pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            pattern: ['#90AFC5', '#336B87', '#2A3132', '#763626']
        },
        size: {
            height: 300,
            width: 300
        },
        legend: {
            position: 'inset'
        }
    });
};
generate1();

var generate2 = function() {
    return c3.generate({
        bindto: '#graph_pie_2',
        data: {
            columns: [
                //            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["jambu", 25],
                ["rambutan", 20],
                ["pir", 30],
                ["mangga", 40],
                ["melon", 45]
            ],
            type: 'pie',
        },
        axis: {
            x: {
                label: 'Sepal.Width'
            },
            y: {
                label: 'Petal.Width'
            }
        },
        pie: {
            sort: sort,
            onmouseover: function(d, i) {
                console.log(d, i);
            },
            onmouseout: function(d, i) {
                console.log(d, i);
            },
            onclick: function(d, i) {
                console.log(d, i);
            },
        },
        tooltip: 
        {
            format: 
            {
                title: function() 
                {
                    return "Donut 1"
                },
                value: function(value, ratio, id) 
                {
                    var format = id === 'data1' ? d3.format(',') : d3.format('');
                    return format(value);
                }
                // value: d3.format(',') // apply this format to both y and y2
            }
        },
        color: {
            // pattern: ['#003B46','#07575B','#3276b1','#66A5AD','#C4DFE6']
            pattern: ['#F4CC70', '#DE7A22', '#20948B', '#6AB187', '#336B87'] // warna coklat. Surf & Turf
        },
        legend: {
            position: 'right'
        },
        size: {
            height: 300,
            width: 300
        }
    });
};
generate2();

var graph_bar_stacked_1 = c3.generate({
    bindto: '#graph_bar_stacked_1',
    data: {
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    tooltip: {
        grouped: false // Default true
    },
    grid: {
        y: {
            lines: [{
                value: 0
            }]
        }
    },
    color: 
    {
        // '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c'
        pattern: ['#F4CC70', '#DE7A22', '#20948B', '#6AB187'] // warna coklat. Surf & Turf
    }
});

graph_bar_stacked_1.load({
    columns: [
        ['data4', 100, -50, 150, 200, -300, -100]
    ]
});

c3.generate({
    bindto: '#graph_axes_rotated_1',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        types: {
            data1: 'bar',
        }
    },
    axis: {
        rotated: true,
        y2: {
            show: true
        }
    },
    size: {
//        width: 520,
        height: 280
    }
});

c3.generate({
    bindto: '#graph_scatter_1',
    data: {
        //xs: {
        //    setosa: 'setosa_x',
        //    versicolor: 'versicolor_x',
        //},
        // iris data from R
        columns: [
            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
            // ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ],
        type: 'scatter',
        types: {
            //            data3: 'spline',
            versicolor: 'area',
            setosa_x: 'line',
        },
    },
    axis: {
        x: {
            label: 'Sepal.Width',
            tick: {
                fit: false
            }
        },
        y: {
            label: 'Petal.Width'
        }
    },
    size: {
//        width: 510,
        height: 280
    }
});

//Custom.view.Analytics.superclass.initComponent.apply(this, arguments);
                    } // end fn
                },
            }
        }]);
    }
    ,onUpdateLoader: function ()
    {
        alert('onUpdateLoader');
    }
    ,onError: function()
    {
        alert('error');
    }
});
