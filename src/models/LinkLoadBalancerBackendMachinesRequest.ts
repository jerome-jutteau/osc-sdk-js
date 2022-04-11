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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LinkLoadBalancerBackendMachinesRequest
 */
export interface LinkLoadBalancerBackendMachinesRequest {
    /**
     *  One or more public IPs of back-end VMs.
     * @type {Array<string>}
     * @memberof LinkLoadBalancerBackendMachinesRequest
     */
    backendIps?: Array<string>;
    /**
     *  One or more IDs of back-end VMs.
     * @type {Array<string>}
     * @memberof LinkLoadBalancerBackendMachinesRequest
     */
    backendVmIds?: Array<string>;
    /**
     *  If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof LinkLoadBalancerBackendMachinesRequest
     */
    dryRun?: boolean;
    /**
     *  The name of the load balancer. 
     * @type {string}
     * @memberof LinkLoadBalancerBackendMachinesRequest
     */
    loadBalancerName: string;
}

export function LinkLoadBalancerBackendMachinesRequestFromJSON(json: any): LinkLoadBalancerBackendMachinesRequest {
    return LinkLoadBalancerBackendMachinesRequestFromJSONTyped(json, false);
}

export function LinkLoadBalancerBackendMachinesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkLoadBalancerBackendMachinesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backendIps': !exists(json, 'BackendIps') ? undefined : json['BackendIps'],
        'backendVmIds': !exists(json, 'BackendVmIds') ? undefined : json['BackendVmIds'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'loadBalancerName': json['LoadBalancerName'],
    };
}

export function LinkLoadBalancerBackendMachinesRequestToJSON(value?: LinkLoadBalancerBackendMachinesRequest | null): any {
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

