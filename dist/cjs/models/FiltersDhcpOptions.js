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
exports.FiltersDhcpOptionsToJSON = exports.FiltersDhcpOptionsFromJSONTyped = exports.FiltersDhcpOptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersDhcpOptionsFromJSON(json) {
    return FiltersDhcpOptionsFromJSONTyped(json, false);
}
exports.FiltersDhcpOptionsFromJSON = FiltersDhcpOptionsFromJSON;
function FiltersDhcpOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '_default': !runtime_1.exists(json, 'Default') ? undefined : json['Default'],
        'dhcpOptionsSetIds': !runtime_1.exists(json, 'DhcpOptionsSetIds') ? undefined : json['DhcpOptionsSetIds'],
        'domainNameServers': !runtime_1.exists(json, 'DomainNameServers') ? undefined : json['DomainNameServers'],
        'domainNames': !runtime_1.exists(json, 'DomainNames') ? undefined : json['DomainNames'],
        'ntpServers': !runtime_1.exists(json, 'NtpServers') ? undefined : json['NtpServers'],
        'tagKeys': !runtime_1.exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !runtime_1.exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : json['Tags'],
    };
}
exports.FiltersDhcpOptionsFromJSONTyped = FiltersDhcpOptionsFromJSONTyped;
function FiltersDhcpOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Default': value._default,
        'DhcpOptionsSetIds': value.dhcpOptionsSetIds,
        'DomainNameServers': value.domainNameServers,
        'DomainNames': value.domainNames,
        'NtpServers': value.ntpServers,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}
exports.FiltersDhcpOptionsToJSON = FiltersDhcpOptionsToJSON;
