sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchdms02/withdmstransfers/test/integration/FirstJourney',
		'ztchdms02/withdmstransfers/test/integration/pages/WithSpareTransfersList',
		'ztchdms02/withdmstransfers/test/integration/pages/WithSpareTransfersObjectPage'
    ],
    function(JourneyRunner, opaJourney, WithSpareTransfersList, WithSpareTransfersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchdms02/withdmstransfers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWithSpareTransfersList: WithSpareTransfersList,
					onTheWithSpareTransfersObjectPage: WithSpareTransfersObjectPage
                }
            },
            opaJourney.run
        );
    }
);