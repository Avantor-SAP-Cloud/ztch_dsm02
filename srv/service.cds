using { ztch_dms_02 as my } from '../db/schema.cds';

@path : '/service/ztch_dms_02Srv'
service ztch_dms_02Srv
{
    @odata.draft.enabled
    entity WithSpareTransfers as
        projection on my.SpareTransfers;

    @odata.draft.enabled
    entity WithoutSpareRequests as 
        projection on my.SpareRequests;  
}

annotate ztch_dms_02Srv with @requires :
[
    'authenticated-user'
];
