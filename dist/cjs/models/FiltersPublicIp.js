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
exports.FiltersPublicIpToJSON = exports.FiltersPublicIpFromJSONTyped = exports.FiltersPublicIpFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersPublicIpFromJSON(json) {
    return FiltersPublicIpFromJSONTyped(json, false);
}
exports.FiltersPublicIpFromJSON = FiltersPublicIpFromJSON;
function FiltersPublicIpFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkPublicIpIds': !runtime_1.exists(json, 'LinkPublicIpIds') ? undefined : json['LinkPublicIpIds'],
        'nicAccountIds': !runtime_1.exists(json, 'NicAccountIds') ? undefined : json['NicAccountIds'],
        'nicIds': !runtime_1.exists(json, 'NicIds') ? undefined : json['NicIds'],
        'placements': !runtime_1.exists(json, 'Placements') ? undefined : json['Placements'],
        'privateIps': !runtime_1.exists(json, 'PrivateIps') ? undefined : json['PrivateIps'],
        'publicIpIds': !runtime_1.exists(json, 'PublicIpIds') ? undefined : json['PublicIpIds'],
        'publicIps': !runtime_1.exists(json, 'PublicIps') ? undefined : json['PublicIps'],
        'tagKeys': !runtime_1.exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !runtime_1.exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : json['Tags'],
        'vmIds': !runtime_1.exists(json, 'VmIds') ? undefined : json['VmIds'],
    };
}
exports.FiltersPublicIpFromJSONTyped = FiltersPublicIpFromJSONTyped;
function FiltersPublicIpToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LinkPublicIpIds': value.linkPublicIpIds,
        'NicAccountIds': value.nicAccountIds,
        'NicIds': value.nicIds,
        'Placements': value.placements,
        'PrivateIps': value.privateIps,
        'PublicIpIds': value.publicIpIds,
        'PublicIps': value.publicIps,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
        'VmIds': value.vmIds,
    };
}
exports.FiltersPublicIpToJSON = FiltersPublicIpToJSON;
