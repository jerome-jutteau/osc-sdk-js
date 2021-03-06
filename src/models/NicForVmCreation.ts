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

import { exists, mapValues } from '../runtime';
import {
    PrivateIpLight,
    PrivateIpLightFromJSON,
    PrivateIpLightFromJSONTyped,
    PrivateIpLightToJSON,
} from './PrivateIpLight';

/**
 * Information about the network interface card (NIC) when creating a virtual machine (VM).
 * @export
 * @interface NicForVmCreation
 */
export interface NicForVmCreation {
    /**
     * If true, the NIC is deleted when the VM is terminated. You can specify this parameter only for a new NIC. To modify this value for an existing NIC, see [UpdateNic](#updatenic).
     * @type {boolean}
     * @memberof NicForVmCreation
     */
    deleteOnVmDeletion?: boolean;
    /**
     * The description of the NIC, if you are creating a NIC when creating the VM.
     * @type {string}
     * @memberof NicForVmCreation
     */
    description?: string;
    /**
     * The index of the VM device for the NIC attachment (between 0 and 7, both included). This parameter is required if you create a NIC when creating the VM.
     * @type {number}
     * @memberof NicForVmCreation
     */
    deviceNumber?: number;
    /**
     * The ID of the NIC, if you are attaching an existing NIC when creating a VM.
     * @type {string}
     * @memberof NicForVmCreation
     */
    nicId?: string;
    /**
     * One or more private IPs to assign to the NIC, if you create a NIC when creating a VM. Only one private IP can be the primary private IP.
     * @type {Array<PrivateIpLight>}
     * @memberof NicForVmCreation
     */
    privateIps?: Array<PrivateIpLight>;
    /**
     * The number of secondary private IPs, if you create a NIC when creating a VM. This parameter cannot be specified if you specified more than one private IP in the `PrivateIps` parameter.
     * @type {number}
     * @memberof NicForVmCreation
     */
    secondaryPrivateIpCount?: number;
    /**
     * One or more IDs of security groups for the NIC, if you create a NIC when creating a VM.
     * @type {Array<string>}
     * @memberof NicForVmCreation
     */
    securityGroupIds?: Array<string>;
    /**
     * The ID of the Subnet for the NIC, if you create a NIC when creating a VM. This parameter is required if you create a NIC when creating the VM.
     * @type {string}
     * @memberof NicForVmCreation
     */
    subnetId?: string;
}

export function NicForVmCreationFromJSON(json: any): NicForVmCreation {
    return NicForVmCreationFromJSONTyped(json, false);
}

export function NicForVmCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): NicForVmCreation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleteOnVmDeletion': !exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'deviceNumber': !exists(json, 'DeviceNumber') ? undefined : json['DeviceNumber'],
        'nicId': !exists(json, 'NicId') ? undefined : json['NicId'],
        'privateIps': !exists(json, 'PrivateIps') ? undefined : ((json['PrivateIps'] as Array<any>).map(PrivateIpLightFromJSON)),
        'secondaryPrivateIpCount': !exists(json, 'SecondaryPrivateIpCount') ? undefined : json['SecondaryPrivateIpCount'],
        'securityGroupIds': !exists(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'subnetId': !exists(json, 'SubnetId') ? undefined : json['SubnetId'],
    };
}

export function NicForVmCreationToJSON(value?: NicForVmCreation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'Description': value.description,
        'DeviceNumber': value.deviceNumber,
        'NicId': value.nicId,
        'PrivateIps': value.privateIps === undefined ? undefined : ((value.privateIps as Array<any>).map(PrivateIpLightToJSON)),
        'SecondaryPrivateIpCount': value.secondaryPrivateIpCount,
        'SecurityGroupIds': value.securityGroupIds,
        'SubnetId': value.subnetId,
    };
}

