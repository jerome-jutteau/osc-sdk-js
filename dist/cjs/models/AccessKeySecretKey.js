"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessKeySecretKeyToJSON = exports.AccessKeySecretKeyFromJSONTyped = exports.AccessKeySecretKeyFromJSON = void 0;
const runtime_1 = require("../runtime");
function AccessKeySecretKeyFromJSON(json) {
    return AccessKeySecretKeyFromJSONTyped(json, false);
}
exports.AccessKeySecretKeyFromJSON = AccessKeySecretKeyFromJSON;
function AccessKeySecretKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessKeyId': !runtime_1.exists(json, 'AccessKeyId') ? undefined : json['AccessKeyId'],
        'creationDate': !runtime_1.exists(json, 'CreationDate') ? undefined : json['CreationDate'],
        'expirationDate': !runtime_1.exists(json, 'ExpirationDate') ? undefined : json['ExpirationDate'],
        'lastModificationDate': !runtime_1.exists(json, 'LastModificationDate') ? undefined : json['LastModificationDate'],
        'secretKey': !runtime_1.exists(json, 'SecretKey') ? undefined : json['SecretKey'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
    };
}
exports.AccessKeySecretKeyFromJSONTyped = AccessKeySecretKeyFromJSONTyped;
function AccessKeySecretKeyToJSON(value) {
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
        'SecretKey': value.secretKey,
        'State': value.state,
    };
}
exports.AccessKeySecretKeyToJSON = AccessKeySecretKeyToJSON;
