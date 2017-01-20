
initCustomFunctionality= function(){
	App.on('browserinit', function(browser){
        browser.cardContainer.add({
            xtype: 'CBBrowserViewGraph'
            // ,owner: browser
            ,addDivider: true
        });
	});
};

Ext.onReady(initCustomFunctionality);
