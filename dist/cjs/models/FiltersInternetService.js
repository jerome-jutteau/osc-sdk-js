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
exports.FiltersInternetServiceToJSON = exports.FiltersInternetServiceFromJSONTyped = exports.FiltersInternetServiceFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersInternetServiceFromJSON(json) {
    return FiltersInternetServiceFromJSONTyped(json, false);
}
exports.FiltersInternetServiceFromJSON = FiltersInternetServiceFromJSON;
function FiltersInternetServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'internetServiceIds': !(0, runtime_1.exists)(json, 'InternetServiceIds') ? undefined : json['InternetServiceIds'],
        'linkNetIds': !(0, runtime_1.exists)(json, 'LinkNetIds') ? undefined : json['LinkNetIds'],
        'linkStates': !(0, runtime_1.exists)(json, 'LinkStates') ? undefined : json['LinkStates'],
        'tagKeys': !(0, runtime_1.exists)(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !(0, runtime_1.exists)(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : json['Tags'],
    };
}
exports.FiltersInternetServiceFromJSONTyped = FiltersInternetServiceFromJSONTyped;
function FiltersInternetServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'InternetServiceIds': value.internetServiceIds,
        'LinkNetIds': value.linkNetIds,
        'LinkStates': value.linkStates,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}
exports.FiltersInternetServiceToJSON = FiltersInternetServiceToJSON;
