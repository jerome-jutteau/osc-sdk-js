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
exports.Phase2OptionsToJSON = exports.Phase2OptionsFromJSONTyped = exports.Phase2OptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
function Phase2OptionsFromJSON(json) {
    return Phase2OptionsFromJSONTyped(json, false);
}
exports.Phase2OptionsFromJSON = Phase2OptionsFromJSON;
function Phase2OptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phase2DhGroupNumbers': !runtime_1.exists(json, 'Phase2DhGroupNumbers') ? undefined : json['Phase2DhGroupNumbers'],
        'phase2EncryptionAlgorithms': !runtime_1.exists(json, 'Phase2EncryptionAlgorithms') ? undefined : json['Phase2EncryptionAlgorithms'],
        'phase2IntegrityAlgorithms': !runtime_1.exists(json, 'Phase2IntegrityAlgorithms') ? undefined : json['Phase2IntegrityAlgorithms'],
        'phase2LifetimeSeconds': !runtime_1.exists(json, 'Phase2LifetimeSeconds') ? undefined : json['Phase2LifetimeSeconds'],
        'preSharedKey': !runtime_1.exists(json, 'PreSharedKey') ? undefined : json['PreSharedKey'],
    };
}
exports.Phase2OptionsFromJSONTyped = Phase2OptionsFromJSONTyped;
function Phase2OptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Phase2DhGroupNumbers': value.phase2DhGroupNumbers,
        'Phase2EncryptionAlgorithms': value.phase2EncryptionAlgorithms,
        'Phase2IntegrityAlgorithms': value.phase2IntegrityAlgorithms,
        'Phase2LifetimeSeconds': value.phase2LifetimeSeconds,
        'PreSharedKey': value.preSharedKey,
    };
}
exports.Phase2OptionsToJSON = Phase2OptionsToJSON;
