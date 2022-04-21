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
exports.FiltersQuotaToJSON = exports.FiltersQuotaFromJSONTyped = exports.FiltersQuotaFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersQuotaFromJSON(json) {
    return FiltersQuotaFromJSONTyped(json, false);
}
exports.FiltersQuotaFromJSON = FiltersQuotaFromJSON;
function FiltersQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collections': !(0, runtime_1.exists)(json, 'Collections') ? undefined : json['Collections'],
        'quotaNames': !(0, runtime_1.exists)(json, 'QuotaNames') ? undefined : json['QuotaNames'],
        'quotaTypes': !(0, runtime_1.exists)(json, 'QuotaTypes') ? undefined : json['QuotaTypes'],
        'shortDescriptions': !(0, runtime_1.exists)(json, 'ShortDescriptions') ? undefined : json['ShortDescriptions'],
    };
}
exports.FiltersQuotaFromJSONTyped = FiltersQuotaFromJSONTyped;
function FiltersQuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Collections': value.collections,
        'QuotaNames': value.quotaNames,
        'QuotaTypes': value.quotaTypes,
        'ShortDescriptions': value.shortDescriptions,
    };
}
exports.FiltersQuotaToJSON = FiltersQuotaToJSON;
