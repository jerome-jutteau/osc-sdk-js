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
import { LogFromJSON, LogToJSON, } from './Log';
import { ModelResponseContextFromJSON, ModelResponseContextToJSON, } from './ModelResponseContext';
export function ReadApiLogsResponseFromJSON(json) {
    return ReadApiLogsResponseFromJSONTyped(json, false);
}
export function ReadApiLogsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'logs': !exists(json, 'Logs') ? undefined : (json['Logs'].map(LogFromJSON)),
        'nextPageToken': !exists(json, 'NextPageToken') ? undefined : json['NextPageToken'],
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}
export function ReadApiLogsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Logs': value.logs === undefined ? undefined : (value.logs.map(LogToJSON)),
        'NextPageToken': value.nextPageToken,
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}
