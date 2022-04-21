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
exports.InternetServiceToJSON = exports.InternetServiceFromJSONTyped = exports.InternetServiceFromJSON = void 0;
const runtime_1 = require("../runtime");
const ResourceTag_1 = require("./ResourceTag");
function InternetServiceFromJSON(json) {
    return InternetServiceFromJSONTyped(json, false);
}
exports.InternetServiceFromJSON = InternetServiceFromJSON;
function InternetServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'internetServiceId': !(0, runtime_1.exists)(json, 'InternetServiceId') ? undefined : json['InternetServiceId'],
        'netId': !(0, runtime_1.exists)(json, 'NetId') ? undefined : json['NetId'],
        'state': !(0, runtime_1.exists)(json, 'State') ? undefined : json['State'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
    };
}
exports.InternetServiceFromJSONTyped = InternetServiceFromJSONTyped;
function InternetServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'InternetServiceId': value.internetServiceId,
        'NetId': value.netId,
        'State': value.state,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
    };
}
exports.InternetServiceToJSON = InternetServiceToJSON;
