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
exports.DirectLinkToJSON = exports.DirectLinkFromJSONTyped = exports.DirectLinkFromJSON = void 0;
const runtime_1 = require("../runtime");
function DirectLinkFromJSON(json) {
    return DirectLinkFromJSONTyped(json, false);
}
exports.DirectLinkFromJSON = DirectLinkFromJSON;
function DirectLinkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !runtime_1.exists(json, 'AccountId') ? undefined : json['AccountId'],
        'bandwidth': !runtime_1.exists(json, 'Bandwidth') ? undefined : json['Bandwidth'],
        'directLinkId': !runtime_1.exists(json, 'DirectLinkId') ? undefined : json['DirectLinkId'],
        'directLinkName': !runtime_1.exists(json, 'DirectLinkName') ? undefined : json['DirectLinkName'],
        'location': !runtime_1.exists(json, 'Location') ? undefined : json['Location'],
        'regionName': !runtime_1.exists(json, 'RegionName') ? undefined : json['RegionName'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
    };
}
exports.DirectLinkFromJSONTyped = DirectLinkFromJSONTyped;
function DirectLinkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Bandwidth': value.bandwidth,
        'DirectLinkId': value.directLinkId,
        'DirectLinkName': value.directLinkName,
        'Location': value.location,
        'RegionName': value.regionName,
        'State': value.state,
    };
}
exports.DirectLinkToJSON = DirectLinkToJSON;
