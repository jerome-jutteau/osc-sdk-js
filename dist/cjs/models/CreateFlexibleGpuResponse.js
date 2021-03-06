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
exports.CreateFlexibleGpuResponseToJSON = exports.CreateFlexibleGpuResponseFromJSONTyped = exports.CreateFlexibleGpuResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const FlexibleGpu_1 = require("./FlexibleGpu");
const ModelResponseContext_1 = require("./ModelResponseContext");
function CreateFlexibleGpuResponseFromJSON(json) {
    return CreateFlexibleGpuResponseFromJSONTyped(json, false);
}
exports.CreateFlexibleGpuResponseFromJSON = CreateFlexibleGpuResponseFromJSON;
function CreateFlexibleGpuResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'flexibleGpu': !runtime_1.exists(json, 'FlexibleGpu') ? undefined : FlexibleGpu_1.FlexibleGpuFromJSON(json['FlexibleGpu']),
        'responseContext': !runtime_1.exists(json, 'ResponseContext') ? undefined : ModelResponseContext_1.ModelResponseContextFromJSON(json['ResponseContext']),
    };
}
exports.CreateFlexibleGpuResponseFromJSONTyped = CreateFlexibleGpuResponseFromJSONTyped;
function CreateFlexibleGpuResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'FlexibleGpu': FlexibleGpu_1.FlexibleGpuToJSON(value.flexibleGpu),
        'ResponseContext': ModelResponseContext_1.ModelResponseContextToJSON(value.responseContext),
    };
}
exports.CreateFlexibleGpuResponseToJSON = CreateFlexibleGpuResponseToJSON;
