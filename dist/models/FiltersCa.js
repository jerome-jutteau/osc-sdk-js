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
var runtime_1 = require("../runtime");
function FiltersCaFromJSON(json) {
    return FiltersCaFromJSONTyped(json, false);
}
exports.FiltersCaFromJSON = FiltersCaFromJSON;
function FiltersCaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caFingerprints': !runtime_1.exists(json, 'CaFingerprints') ? undefined : json['CaFingerprints'],
        'caIds': !runtime_1.exists(json, 'CaIds') ? undefined : json['CaIds'],
        'descriptions': !runtime_1.exists(json, 'Descriptions') ? undefined : json['Descriptions'],
    };
}
exports.FiltersCaFromJSONTyped = FiltersCaFromJSONTyped;
function FiltersCaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'CaFingerprints': value.caFingerprints,
        'CaIds': value.caIds,
        'Descriptions': value.descriptions,
    };
}
exports.FiltersCaToJSON = FiltersCaToJSON;
