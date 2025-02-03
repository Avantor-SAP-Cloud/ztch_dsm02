sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ztchdms02.withdmstransfers',
            componentId: 'WithSpareTransfersObjectPage',
            contextPath: '/WithSpareTransfers'
        },
        CustomPageDefinitions
    );
});