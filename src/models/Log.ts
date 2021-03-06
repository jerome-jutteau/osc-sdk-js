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
 * Information about the log.
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * The account ID of the logged call.
     * @type {string}
     * @memberof Log
     */
    accountId?: string;
    /**
     * The duration of the logged call, in microseconds.
     * @type {number}
     * @memberof Log
     */
    callDuration?: number;
    /**
     * The access key used for the logged call.
     * @type {string}
     * @memberof Log
     */
    queryAccessKey?: string;
    /**
     * The name of the API used by the logged call (always `oapi` for the OUTSCALE API).
     * @type {string}
     * @memberof Log
     */
    queryApiName?: string;
    /**
     * The version of the API used by the logged call.
     * @type {string}
     * @memberof Log
     */
    queryApiVersion?: string;
    /**
     * The name of the logged call.
     * @type {string}
     * @memberof Log
     */
    queryCallName?: string;
    /**
     * The date of the logged call, in ISO 8601 format.
     * @type {Date}
     * @memberof Log
     */
    queryDate?: Date;
    /**
     * The raw header of the HTTP request of the logged call.
     * @type {string}
     * @memberof Log
     */
    queryHeaderRaw?: string;
    /**
     * The size of the raw header of the HTTP request of the logged call, in bytes.
     * @type {number}
     * @memberof Log
     */
    queryHeaderSize?: number;
    /**
     * The IP used for the logged call.
     * @type {string}
     * @memberof Log
     */
    queryIpAddress?: string;
    /**
     * The raw payload of the HTTP request of the logged call.
     * @type {string}
     * @memberof Log
     */
    queryPayloadRaw?: string;
    /**
     * The size of the raw payload of the HTTP request of the logged call, in bytes.
     * @type {number}
     * @memberof Log
     */
    queryPayloadSize?: number;
    /**
     * The user agent of the HTTP request of the logged call.
     * @type {string}
     * @memberof Log
     */
    queryUserAgent?: string;
    /**
     * The request ID provided in the response of the logged call.
     * @type {string}
     * @memberof Log
     */
    requestId?: string;
    /**
     * The size of the response of the logged call, in bytes.
     * @type {number}
     * @memberof Log
     */
    responseSize?: number;
    /**
     * The HTTP status code of the response of the logged call.
     * @type {number}
     * @memberof Log
     */
    responseStatusCode?: number;
}

export function LogFromJSON(json: any): Log {
    return LogFromJSONTyped(json, false);
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
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
        'queryDate': !exists(json, 'QueryDate') ? undefined : (new Date(json['QueryDate'])),
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

export function LogToJSON(value?: Log | null): any {
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
        'QueryDate': value.queryDate === undefined ? undefined : (value.queryDate.toISOString().substr(0,10)),
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

