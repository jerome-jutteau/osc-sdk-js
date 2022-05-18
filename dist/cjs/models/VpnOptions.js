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
exports.VpnOptionsToJSON = exports.VpnOptionsFromJSONTyped = exports.VpnOptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
const Phase1Options_1 = require("./Phase1Options");
const Phase2Options_1 = require("./Phase2Options");
function VpnOptionsFromJSON(json) {
    return VpnOptionsFromJSONTyped(json, false);
}
exports.VpnOptionsFromJSON = VpnOptionsFromJSON;
function VpnOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phase1Options': !runtime_1.exists(json, 'Phase1Options') ? undefined : Phase1Options_1.Phase1OptionsFromJSON(json['Phase1Options']),
        'phase2Options': !runtime_1.exists(json, 'Phase2Options') ? undefined : Phase2Options_1.Phase2OptionsFromJSON(json['Phase2Options']),
        'tunnelInsideIpRange': !runtime_1.exists(json, 'TunnelInsideIpRange') ? undefined : json['TunnelInsideIpRange'],
    };
}
exports.VpnOptionsFromJSONTyped = VpnOptionsFromJSONTyped;
function VpnOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Phase1Options': Phase1Options_1.Phase1OptionsToJSON(value.phase1Options),
        'Phase2Options': Phase2Options_1.Phase2OptionsToJSON(value.phase2Options),
        'TunnelInsideIpRange': value.tunnelInsideIpRange,
    };
}
exports.VpnOptionsToJSON = VpnOptionsToJSON;
