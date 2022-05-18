/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.19
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { exists } from '../runtime';
import { MaintenanceEventFromJSON, MaintenanceEventToJSON, } from './MaintenanceEvent';
export function VmStatesFromJSON(json) {
    return VmStatesFromJSONTyped(json, false);
}
export function VmStatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maintenanceEvents': !exists(json, 'MaintenanceEvents') ? undefined : (json['MaintenanceEvents'].map(MaintenanceEventFromJSON)),
        'subregionName': !exists(json, 'SubregionName') ? undefined : json['SubregionName'],
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
        'vmState': !exists(json, 'VmState') ? undefined : json['VmState'],
    };
}
export function VmStatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'MaintenanceEvents': value.maintenanceEvents === undefined ? undefined : (value.maintenanceEvents.map(MaintenanceEventToJSON)),
        'SubregionName': value.subregionName,
        'VmId': value.vmId,
        'VmState': value.vmState,
    };
}