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
exports.UpdateLoadBalancerRequestToJSON = exports.UpdateLoadBalancerRequestFromJSONTyped = exports.UpdateLoadBalancerRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const AccessLog_1 = require("./AccessLog");
const HealthCheck_1 = require("./HealthCheck");
function UpdateLoadBalancerRequestFromJSON(json) {
    return UpdateLoadBalancerRequestFromJSONTyped(json, false);
}
exports.UpdateLoadBalancerRequestFromJSON = UpdateLoadBalancerRequestFromJSON;
function UpdateLoadBalancerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessLog': !runtime_1.exists(json, 'AccessLog') ? undefined : AccessLog_1.AccessLogFromJSON(json['AccessLog']),
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'healthCheck': !runtime_1.exists(json, 'HealthCheck') ? undefined : HealthCheck_1.HealthCheckFromJSON(json['HealthCheck']),
        'loadBalancerName': json['LoadBalancerName'],
        'loadBalancerPort': !runtime_1.exists(json, 'LoadBalancerPort') ? undefined : json['LoadBalancerPort'],
        'policyNames': !runtime_1.exists(json, 'PolicyNames') ? undefined : json['PolicyNames'],
        'publicIp': !runtime_1.exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'securityGroups': !runtime_1.exists(json, 'SecurityGroups') ? undefined : json['SecurityGroups'],
        'serverCertificateId': !runtime_1.exists(json, 'ServerCertificateId') ? undefined : json['ServerCertificateId'],
    };
}
exports.UpdateLoadBalancerRequestFromJSONTyped = UpdateLoadBalancerRequestFromJSONTyped;
function UpdateLoadBalancerRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccessLog': AccessLog_1.AccessLogToJSON(value.accessLog),
        'DryRun': value.dryRun,
        'HealthCheck': HealthCheck_1.HealthCheckToJSON(value.healthCheck),
        'LoadBalancerName': value.loadBalancerName,
        'LoadBalancerPort': value.loadBalancerPort,
        'PolicyNames': value.policyNames,
        'PublicIp': value.publicIp,
        'SecurityGroups': value.securityGroups,
        'ServerCertificateId': value.serverCertificateId,
    };
}
exports.UpdateLoadBalancerRequestToJSON = UpdateLoadBalancerRequestToJSON;