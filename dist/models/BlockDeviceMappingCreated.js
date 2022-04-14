/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.18
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { exists } from '../runtime.js';
import { BsuCreatedFromJSON, BsuCreatedToJSON, } from './BsuCreated.js';
export function BlockDeviceMappingCreatedFromJSON(json) {
    return BlockDeviceMappingCreatedFromJSONTyped(json, false);
}
export function BlockDeviceMappingCreatedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bsu': !exists(json, 'Bsu') ? undefined : BsuCreatedFromJSON(json['Bsu']),
        'deviceName': !exists(json, 'DeviceName') ? undefined : json['DeviceName'],
    };
}
export function BlockDeviceMappingCreatedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Bsu': BsuCreatedToJSON(value.bsu),
        'DeviceName': value.deviceName,
    };
}
