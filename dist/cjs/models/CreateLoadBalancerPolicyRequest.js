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
exports.CreateLoadBalancerPolicyRequestToJSON = exports.CreateLoadBalancerPolicyRequestFromJSONTyped = exports.CreateLoadBalancerPolicyRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function CreateLoadBalancerPolicyRequestFromJSON(json) {
    return CreateLoadBalancerPolicyRequestFromJSONTyped(json, false);
}
exports.CreateLoadBalancerPolicyRequestFromJSON = CreateLoadBalancerPolicyRequestFromJSON;
function CreateLoadBalancerPolicyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cookieExpirationPeriod': !runtime_1.exists(json, 'CookieExpirationPeriod') ? undefined : json['CookieExpirationPeriod'],
        'cookieName': !runtime_1.exists(json, 'CookieName') ? undefined : json['CookieName'],
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'loadBalancerName': json['LoadBalancerName'],
        'policyName': json['PolicyName'],
        'policyType': json['PolicyType'],
    };
}
exports.CreateLoadBalancerPolicyRequestFromJSONTyped = CreateLoadBalancerPolicyRequestFromJSONTyped;
function CreateLoadBalancerPolicyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'CookieExpirationPeriod': value.cookieExpirationPeriod,
        'CookieName': value.cookieName,
        'DryRun': value.dryRun,
        'LoadBalancerName': value.loadBalancerName,
        'PolicyName': value.policyName,
        'PolicyType': value.policyType,
    };
}
exports.CreateLoadBalancerPolicyRequestToJSON = CreateLoadBalancerPolicyRequestToJSON;
