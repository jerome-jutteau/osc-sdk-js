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
exports.UpdateSubnetResponseToJSON = exports.UpdateSubnetResponseFromJSONTyped = exports.UpdateSubnetResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const ModelResponseContext_1 = require("./ModelResponseContext");
const Subnet_1 = require("./Subnet");
function UpdateSubnetResponseFromJSON(json) {
    return UpdateSubnetResponseFromJSONTyped(json, false);
}
exports.UpdateSubnetResponseFromJSON = UpdateSubnetResponseFromJSON;
function UpdateSubnetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'responseContext': !(0, runtime_1.exists)(json, 'ResponseContext') ? undefined : (0, ModelResponseContext_1.ModelResponseContextFromJSON)(json['ResponseContext']),
        'subnet': !(0, runtime_1.exists)(json, 'Subnet') ? undefined : (0, Subnet_1.SubnetFromJSON)(json['Subnet']),
    };
}
exports.UpdateSubnetResponseFromJSONTyped = UpdateSubnetResponseFromJSONTyped;
function UpdateSubnetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ResponseContext': (0, ModelResponseContext_1.ModelResponseContextToJSON)(value.responseContext),
        'Subnet': (0, Subnet_1.SubnetToJSON)(value.subnet),
    };
}
exports.UpdateSubnetResponseToJSON = UpdateSubnetResponseToJSON;
