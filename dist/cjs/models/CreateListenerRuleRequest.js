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
exports.CreateListenerRuleRequestToJSON = exports.CreateListenerRuleRequestFromJSONTyped = exports.CreateListenerRuleRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const ListenerRuleForCreation_1 = require("./ListenerRuleForCreation");
const LoadBalancerLight_1 = require("./LoadBalancerLight");
function CreateListenerRuleRequestFromJSON(json) {
    return CreateListenerRuleRequestFromJSONTyped(json, false);
}
exports.CreateListenerRuleRequestFromJSON = CreateListenerRuleRequestFromJSON;
function CreateListenerRuleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'listener': LoadBalancerLight_1.LoadBalancerLightFromJSON(json['Listener']),
        'listenerRule': ListenerRuleForCreation_1.ListenerRuleForCreationFromJSON(json['ListenerRule']),
        'vmIds': json['VmIds'],
    };
}
exports.CreateListenerRuleRequestFromJSONTyped = CreateListenerRuleRequestFromJSONTyped;
function CreateListenerRuleRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Listener': LoadBalancerLight_1.LoadBalancerLightToJSON(value.listener),
        'ListenerRule': ListenerRuleForCreation_1.ListenerRuleForCreationToJSON(value.listenerRule),
        'VmIds': value.vmIds,
    };
}
exports.CreateListenerRuleRequestToJSON = CreateListenerRuleRequestToJSON;
