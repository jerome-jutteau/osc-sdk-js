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
export function MaintenanceEventFromJSON(json) {
    return MaintenanceEventFromJSONTyped(json, false);
}
export function MaintenanceEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !exists(json, 'Code') ? undefined : json['Code'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'notAfter': !exists(json, 'NotAfter') ? undefined : (new Date(json['NotAfter'])),
        'notBefore': !exists(json, 'NotBefore') ? undefined : (new Date(json['NotBefore'])),
    };
}
export function MaintenanceEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Code': value.code,
        'Description': value.description,
        'NotAfter': value.notAfter === undefined ? undefined : (value.notAfter.toISOString().substr(0, 10)),
        'NotBefore': value.notBefore === undefined ? undefined : (value.notBefore.toISOString().substr(0, 10)),
    };
}
