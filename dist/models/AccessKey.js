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
export function AccessKeyFromJSON(json) {
    return AccessKeyFromJSONTyped(json, false);
}
export function AccessKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessKeyId': !exists(json, 'AccessKeyId') ? undefined : json['AccessKeyId'],
        'creationDate': !exists(json, 'CreationDate') ? undefined : json['CreationDate'],
        'expirationDate': !exists(json, 'ExpirationDate') ? undefined : json['ExpirationDate'],
        'lastModificationDate': !exists(json, 'LastModificationDate') ? undefined : json['LastModificationDate'],
        'state': !exists(json, 'State') ? undefined : json['State'],
    };
}
export function AccessKeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccessKeyId': value.accessKeyId,
        'CreationDate': value.creationDate,
        'ExpirationDate': value.expirationDate,
        'LastModificationDate': value.lastModificationDate,
        'State': value.state,
    };
}
