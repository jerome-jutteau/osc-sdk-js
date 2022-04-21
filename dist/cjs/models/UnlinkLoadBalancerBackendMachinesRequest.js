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
exports.UnlinkLoadBalancerBackendMachinesRequestToJSON = exports.UnlinkLoadBalancerBackendMachinesRequestFromJSONTyped = exports.UnlinkLoadBalancerBackendMachinesRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function UnlinkLoadBalancerBackendMachinesRequestFromJSON(json) {
    return UnlinkLoadBalancerBackendMachinesRequestFromJSONTyped(json, false);
}
exports.UnlinkLoadBalancerBackendMachinesRequestFromJSON = UnlinkLoadBalancerBackendMachinesRequestFromJSON;
function UnlinkLoadBalancerBackendMachinesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backendIps': !(0, runtime_1.exists)(json, 'BackendIps') ? undefined : json['BackendIps'],
        'backendVmIds': !(0, runtime_1.exists)(json, 'BackendVmIds') ? undefined : json['BackendVmIds'],
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'loadBalancerName': json['LoadBalancerName'],
    };
}
exports.UnlinkLoadBalancerBackendMachinesRequestFromJSONTyped = UnlinkLoadBalancerBackendMachinesRequestFromJSONTyped;
function UnlinkLoadBalancerBackendMachinesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BackendIps': value.backendIps,
        'BackendVmIds': value.backendVmIds,
        'DryRun': value.dryRun,
        'LoadBalancerName': value.loadBalancerName,
    };
}
exports.UnlinkLoadBalancerBackendMachinesRequestToJSON = UnlinkLoadBalancerBackendMachinesRequestToJSON;
