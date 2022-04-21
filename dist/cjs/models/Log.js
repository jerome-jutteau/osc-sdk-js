"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogToJSON = exports.LogFromJSONTyped = exports.LogFromJSON = void 0;
const runtime_1 = require("../runtime");
function LogFromJSON(json) {
    return LogFromJSONTyped(json, false);
}
exports.LogFromJSON = LogFromJSON;
function LogFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'AccountId') ? undefined : json['AccountId'],
        'callDuration': !(0, runtime_1.exists)(json, 'CallDuration') ? undefined : json['CallDuration'],
        'queryAccessKey': !(0, runtime_1.exists)(json, 'QueryAccessKey') ? undefined : json['QueryAccessKey'],
        'queryApiName': !(0, runtime_1.exists)(json, 'QueryApiName') ? undefined : json['QueryApiName'],
        'queryApiVersion': !(0, runtime_1.exists)(json, 'QueryApiVersion') ? undefined : json['QueryApiVersion'],
        'queryCallName': !(0, runtime_1.exists)(json, 'QueryCallName') ? undefined : json['QueryCallName'],
        'queryDate': !(0, runtime_1.exists)(json, 'QueryDate') ? undefined : (new Date(json['QueryDate'])),
        'queryHeaderRaw': !(0, runtime_1.exists)(json, 'QueryHeaderRaw') ? undefined : json['QueryHeaderRaw'],
        'queryHeaderSize': !(0, runtime_1.exists)(json, 'QueryHeaderSize') ? undefined : json['QueryHeaderSize'],
        'queryIpAddress': !(0, runtime_1.exists)(json, 'QueryIpAddress') ? undefined : json['QueryIpAddress'],
        'queryPayloadRaw': !(0, runtime_1.exists)(json, 'QueryPayloadRaw') ? undefined : json['QueryPayloadRaw'],
        'queryPayloadSize': !(0, runtime_1.exists)(json, 'QueryPayloadSize') ? undefined : json['QueryPayloadSize'],
        'queryUserAgent': !(0, runtime_1.exists)(json, 'QueryUserAgent') ? undefined : json['QueryUserAgent'],
        'requestId': !(0, runtime_1.exists)(json, 'RequestId') ? undefined : json['RequestId'],
        'responseSize': !(0, runtime_1.exists)(json, 'ResponseSize') ? undefined : json['ResponseSize'],
        'responseStatusCode': !(0, runtime_1.exists)(json, 'ResponseStatusCode') ? undefined : json['ResponseStatusCode'],
    };
}
exports.LogFromJSONTyped = LogFromJSONTyped;
function LogToJSON(value) {
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
        'QueryDate': value.queryDate === undefined ? undefined : (value.queryDate.toISOString().substr(0, 10)),
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
exports.LogToJSON = LogToJSON;
