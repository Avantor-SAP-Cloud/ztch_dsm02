sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchdms02/withoutdmsrequests/test/integration/FirstJourney',
		'ztchdms02/withoutdmsrequests/test/integration/pages/WithoutSpareRequestsList',
		'ztchdms02/withoutdmsrequests/test/integration/pages/WithoutSpareRequestsObjectPage'
    ],
    function(JourneyRunner, opaJourney, WithoutSpareRequestsList, WithoutSpareRequestsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchdms02/withoutdmsrequests') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWithoutSpareRequestsList: WithoutSpareRequestsList,
					onTheWithoutSpareRequestsObjectPage: WithoutSpareRequestsObjectPage
                }
            },
            opaJourney.run
        );
    }
);