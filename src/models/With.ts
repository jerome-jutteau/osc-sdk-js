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

import { exists, mapValues } from '../runtime';
/**
 * The information to display in each returned log. If this parameter is not specified, all available response elements are displayed. If this parameter is specified, by default `AccountId` and `RequestId` are also included in the response, unless you explicitly specify them as false.
 * @export
 * @interface With
 */
export interface With {
    /**
     * By default or if set to true, the account ID is displayed.
     * @type {boolean}
     * @memberof With
     */
    accountId?: boolean;
    /**
     * If set to true, the duration of the call is displayed.
     * @type {boolean}
     * @memberof With
     */
    callDuration?: boolean;
    /**
     * If set to true, the access key is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryAccessKey?: boolean;
    /**
     * If set to true, the name of the API is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryApiName?: boolean;
    /**
     * If set to true, the version of the API is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryApiVersion?: boolean;
    /**
     * If set to true, the name of the call is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryCallName?: boolean;
    /**
     * If set to true, the date of the call is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryDate?: boolean;
    /**
     * If set to true, the raw header of the HTTP request is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryHeaderRaw?: boolean;
    /**
     * If set to true, the size of the raw header of the HTTP request is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryHeaderSize?: boolean;
    /**
     * If set to true, the IP is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryIpAddress?: boolean;
    /**
     * If set to true, the raw payload of the HTTP request is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryPayloadRaw?: boolean;
    /**
     * If set to true, the size of the raw payload of the HTTP request is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryPayloadSize?: boolean;
    /**
     * If set to true, the user agent of the HTTP request is displayed.
     * @type {boolean}
     * @memberof With
     */
    queryUserAgent?: boolean;
    /**
     * By default or if set to true, the request ID is displayed.
     * @type {boolean}
     * @memberof With
     */
    requestId?: boolean;
    /**
     * If set to true, the size of the response is displayed.
     * @type {boolean}
     * @memberof With
     */
    responseSize?: boolean;
    /**
     * If set to true, the HTTP status code of the response is displayed.
     * @type {boolean}
     * @memberof With
     */
    responseStatusCode?: boolean;
}

export function WithFromJSON(json: any): With {
    return WithFromJSONTyped(json, false);
}

export function WithFromJSONTyped(json: any, ignoreDiscriminator: boolean): With {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'callDuration': !exists(json, 'CallDuration') ? undefined : json['CallDuration'],
        'queryAccessKey': !exists(json, 'QueryAccessKey') ? undefined : json['QueryAccessKey'],
        'queryApiName': !exists(json, 'QueryApiName') ? undefined : json['QueryApiName'],
        'queryApiVersion': !exists(json, 'QueryApiVersion') ? undefined : json['QueryApiVersion'],
        'queryCallName': !exists(json, 'QueryCallName') ? undefined : json['QueryCallName'],
        'queryDate': !exists(json, 'QueryDate') ? undefined : json['QueryDate'],
        'queryHeaderRaw': !exists(json, 'QueryHeaderRaw') ? undefined : json['QueryHeaderRaw'],
        'queryHeaderSize': !exists(json, 'QueryHeaderSize') ? undefined : json['QueryHeaderSize'],
        'queryIpAddress': !exists(json, 'QueryIpAddress') ? undefined : json['QueryIpAddress'],
        'queryPayloadRaw': !exists(json, 'QueryPayloadRaw') ? undefined : json['QueryPayloadRaw'],
        'queryPayloadSize': !exists(json, 'QueryPayloadSize') ? undefined : json['QueryPayloadSize'],
        'queryUserAgent': !exists(json, 'QueryUserAgent') ? undefined : json['QueryUserAgent'],
        'requestId': !exists(json, 'RequestId') ? undefined : json['RequestId'],
        'responseSize': !exists(json, 'ResponseSize') ? undefined : json['ResponseSize'],
        'responseStatusCode': !exists(json, 'ResponseStatusCode') ? undefined : json['ResponseStatusCode'],
    };
}

export function WithToJSON(value?: With | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountId': value.accountId,
        'CallDuration': value.callDuration,
        'QueryAccessKey': value.queryAccessKey,
        'QueryApiName': value.queryApiName,
        'QueryApiVersion': value.queryApiVersion,
        'QueryCallName': value.queryCallName,
        'QueryDate': value.queryDate,
        'QueryHeaderRaw': value.queryHeaderRaw,
        'QueryHeaderSize': value.queryHeaderSize,
        'QueryIpAddress': value.queryIpAddress,
        'QueryPayloadRaw': value.queryPayloadRaw,
        'QueryPayloadSize': value.queryPayloadSize,
        'QueryUserAgent': value.queryUserAgent,
        'RequestId': value.requestId,
        'ResponseSize': value.responseSize,
        'ResponseStatusCode': value.responseStatusCode,
    };
}

