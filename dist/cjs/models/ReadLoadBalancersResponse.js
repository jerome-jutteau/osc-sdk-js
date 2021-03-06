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
exports.ReadLoadBalancersResponseToJSON = exports.ReadLoadBalancersResponseFromJSONTyped = exports.ReadLoadBalancersResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const LoadBalancer_1 = require("./LoadBalancer");
const ModelResponseContext_1 = require("./ModelResponseContext");
function ReadLoadBalancersResponseFromJSON(json) {
    return ReadLoadBalancersResponseFromJSONTyped(json, false);
}
exports.ReadLoadBalancersResponseFromJSON = ReadLoadBalancersResponseFromJSON;
function ReadLoadBalancersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadBalancers': !runtime_1.exists(json, 'LoadBalancers') ? undefined : (json['LoadBalancers'].map(LoadBalancer_1.LoadBalancerFromJSON)),
        'responseContext': !runtime_1.exists(json, 'ResponseContext') ? undefined : ModelResponseContext_1.ModelResponseContextFromJSON(json['ResponseContext']),
    };
}
exports.ReadLoadBalancersResponseFromJSONTyped = ReadLoadBalancersResponseFromJSONTyped;
function ReadLoadBalancersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LoadBalancers': value.loadBalancers === undefined ? undefined : (value.loadBalancers.map(LoadBalancer_1.LoadBalancerToJSON)),
        'ResponseContext': ModelResponseContext_1.ModelResponseContextToJSON(value.responseContext),
    };
}
exports.ReadLoadBalancersResponseToJSON = ReadLoadBalancersResponseToJSON;
