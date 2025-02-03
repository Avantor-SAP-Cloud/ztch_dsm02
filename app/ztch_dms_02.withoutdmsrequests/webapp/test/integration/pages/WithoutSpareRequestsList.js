sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztchdms02.withoutdmsrequests',
            componentId: 'WithoutSpareRequestsList',
            contextPath: '/WithoutSpareRequests'
        },
        CustomPageDefinitions
    );
});