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
exports.FiltersNetToJSON = exports.FiltersNetFromJSONTyped = exports.FiltersNetFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersNetFromJSON(json) {
    return FiltersNetFromJSONTyped(json, false);
}
exports.FiltersNetFromJSON = FiltersNetFromJSON;
function FiltersNetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dhcpOptionsSetIds': !runtime_1.exists(json, 'DhcpOptionsSetIds') ? undefined : json['DhcpOptionsSetIds'],
        'ipRanges': !runtime_1.exists(json, 'IpRanges') ? undefined : json['IpRanges'],
        'isDefault': !runtime_1.exists(json, 'IsDefault') ? undefined : json['IsDefault'],
        'netIds': !runtime_1.exists(json, 'NetIds') ? undefined : json['NetIds'],
        'states': !runtime_1.exists(json, 'States') ? undefined : json['States'],
        'tagKeys': !runtime_1.exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !runtime_1.exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : json['Tags'],
    };
}
exports.FiltersNetFromJSONTyped = FiltersNetFromJSONTyped;
function FiltersNetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DhcpOptionsSetIds': value.dhcpOptionsSetIds,
        'IpRanges': value.ipRanges,
        'IsDefault': value.isDefault,
        'NetIds': value.netIds,
        'States': value.states,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}
exports.FiltersNetToJSON = FiltersNetToJSON;
