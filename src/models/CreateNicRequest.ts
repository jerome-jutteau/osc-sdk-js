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
import {
    PrivateIpLight,
    PrivateIpLightFromJSON,
    PrivateIpLightFromJSONTyped,
    PrivateIpLightToJSON,
} from './PrivateIpLight';

/**
 * 
 * @export
 * @interface CreateNicRequest
 */
export interface CreateNicRequest {
    /**
     * A description for the NIC.
     * @type {string}
     * @memberof CreateNicRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateNicRequest
     */
    dryRun?: boolean;
    /**
     * The primary private IP for the NIC.<br />
     * This IP must be within the IP range of the Subnet that you specify with the `SubnetId` attribute.<br />
     * If you do not specify this attribute, a random private IP is selected within the IP range of the Subnet.
     * @type {Array<PrivateIpLight>}
     * @memberof CreateNicRequest
     */
    privateIps?: Array<PrivateIpLight>;
    /**
     * One or more IDs of security groups for the NIC.
     * @type {Array<string>}
     * @memberof CreateNicRequest
     */
    securityGroupIds?: Array<string>;
    /**
     * The ID of the Subnet in which you want to create the NIC.
     * @type {string}
     * @memberof CreateNicRequest
     */
    subnetId: string;
}

export function CreateNicRequestFromJSON(json: any): CreateNicRequest {
    return CreateNicRequestFromJSONTyped(json, false);
}

export function CreateNicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNicRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'privateIps': !exists(json, 'PrivateIps') ? undefined : ((json['PrivateIps'] as Array<any>).map(PrivateIpLightFromJSON)),
        'securityGroupIds': !exists(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'subnetId': json['SubnetId'],
    };
}

export function CreateNicRequestToJSON(value?: CreateNicRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Description': value.description,
        'DryRun': value.dryRun,
        'PrivateIps': value.privateIps === undefined ? undefined : ((value.privateIps as Array<any>).map(PrivateIpLightToJSON)),
        'SecurityGroupIds': value.securityGroupIds,
        'SubnetId': value.subnetId,
    };
}

