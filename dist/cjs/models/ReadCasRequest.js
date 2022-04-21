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
exports.ReadCasRequestToJSON = exports.ReadCasRequestFromJSONTyped = exports.ReadCasRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const FiltersCa_1 = require("./FiltersCa");
function ReadCasRequestFromJSON(json) {
    return ReadCasRequestFromJSONTyped(json, false);
}
exports.ReadCasRequestFromJSON = ReadCasRequestFromJSON;
function ReadCasRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !(0, runtime_1.exists)(json, 'Filters') ? undefined : (0, FiltersCa_1.FiltersCaFromJSON)(json['Filters']),
    };
}
exports.ReadCasRequestFromJSONTyped = ReadCasRequestFromJSONTyped;
function ReadCasRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Filters': (0, FiltersCa_1.FiltersCaToJSON)(value.filters),
    };
}
exports.ReadCasRequestToJSON = ReadCasRequestToJSON;
