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
exports.ReadQuotasRequestToJSON = exports.ReadQuotasRequestFromJSONTyped = exports.ReadQuotasRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const FiltersQuota_1 = require("./FiltersQuota");
function ReadQuotasRequestFromJSON(json) {
    return ReadQuotasRequestFromJSONTyped(json, false);
}
exports.ReadQuotasRequestFromJSON = ReadQuotasRequestFromJSON;
function ReadQuotasRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !runtime_1.exists(json, 'Filters') ? undefined : FiltersQuota_1.FiltersQuotaFromJSON(json['Filters']),
    };
}
exports.ReadQuotasRequestFromJSONTyped = ReadQuotasRequestFromJSONTyped;
function ReadQuotasRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Filters': FiltersQuota_1.FiltersQuotaToJSON(value.filters),
    };
}
exports.ReadQuotasRequestToJSON = ReadQuotasRequestToJSON;
