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
exports.FiltersLoadBalancerToJSON = exports.FiltersLoadBalancerFromJSONTyped = exports.FiltersLoadBalancerFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersLoadBalancerFromJSON(json) {
    return FiltersLoadBalancerFromJSONTyped(json, false);
}
exports.FiltersLoadBalancerFromJSON = FiltersLoadBalancerFromJSON;
function FiltersLoadBalancerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadBalancerNames': !runtime_1.exists(json, 'LoadBalancerNames') ? undefined : json['LoadBalancerNames'],
    };
}
exports.FiltersLoadBalancerFromJSONTyped = FiltersLoadBalancerFromJSONTyped;
function FiltersLoadBalancerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LoadBalancerNames': value.loadBalancerNames,
    };
}
exports.FiltersLoadBalancerToJSON = FiltersLoadBalancerToJSON;
