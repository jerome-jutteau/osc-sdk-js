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
export function BackendVmHealthFromJSON(json) {
    return BackendVmHealthFromJSONTyped(json, false);
}
export function BackendVmHealthFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'state': !exists(json, 'State') ? undefined : json['State'],
        'stateReason': !exists(json, 'StateReason') ? undefined : json['StateReason'],
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
    };
}
export function BackendVmHealthToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Description': value.description,
        'State': value.state,
        'StateReason': value.stateReason,
        'VmId': value.vmId,
    };
}
