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
var runtime_1 = require("../runtime");
var ListenerForCreation_1 = require("./ListenerForCreation");
var ResourceTag_1 = require("./ResourceTag");
function CreateLoadBalancerRequestFromJSON(json) {
    return CreateLoadBalancerRequestFromJSONTyped(json, false);
}
exports.CreateLoadBalancerRequestFromJSON = CreateLoadBalancerRequestFromJSON;
function CreateLoadBalancerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'listeners': (json['Listeners'].map(ListenerForCreation_1.ListenerForCreationFromJSON)),
        'loadBalancerName': json['LoadBalancerName'],
        'loadBalancerType': !runtime_1.exists(json, 'LoadBalancerType') ? undefined : json['LoadBalancerType'],
        'publicIp': !runtime_1.exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'securityGroups': !runtime_1.exists(json, 'SecurityGroups') ? undefined : json['SecurityGroups'],
        'subnets': !runtime_1.exists(json, 'Subnets') ? undefined : json['Subnets'],
        'subregionNames': !runtime_1.exists(json, 'SubregionNames') ? undefined : json['SubregionNames'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
    };
}
exports.CreateLoadBalancerRequestFromJSONTyped = CreateLoadBalancerRequestFromJSONTyped;
function CreateLoadBalancerRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Listeners': (value.listeners.map(ListenerForCreation_1.ListenerForCreationToJSON)),
        'LoadBalancerName': value.loadBalancerName,
        'LoadBalancerType': value.loadBalancerType,
        'PublicIp': value.publicIp,
        'SecurityGroups': value.securityGroups,
        'Subnets': value.subnets,
        'SubregionNames': value.subregionNames,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
    };
}
exports.CreateLoadBalancerRequestToJSON = CreateLoadBalancerRequestToJSON;
