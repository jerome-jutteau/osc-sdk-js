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
exports.DeleteCaRequestToJSON = exports.DeleteCaRequestFromJSONTyped = exports.DeleteCaRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function DeleteCaRequestFromJSON(json) {
    return DeleteCaRequestFromJSONTyped(json, false);
}
exports.DeleteCaRequestFromJSON = DeleteCaRequestFromJSON;
function DeleteCaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caId': json['CaId'],
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
    };
}
exports.DeleteCaRequestFromJSONTyped = DeleteCaRequestFromJSONTyped;
function DeleteCaRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'CaId': value.caId,
        'DryRun': value.dryRun,
    };
}
exports.DeleteCaRequestToJSON = DeleteCaRequestToJSON;