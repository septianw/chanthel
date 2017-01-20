
initAnalytics= function()
{
    App.on('browserinit', function(browser)
    {
        browser.cardContainer.add({
            xtype: 'CBBrowserViewAnalytics'
            // ,owner: browser
            ,addDivider: true
        });
    });
};

// ori
Ext.onReady(initAnalytics);

// modif
//Ext.onLoad(initCustomFunctionality);

