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
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';

/**
 * Information about the public IP.
 * @export
 * @interface PublicIp
 */
export interface PublicIp {
    /**
     * (Required in a Net) The ID representing the association of the public IP with the VM or the NIC.
     * @type {string}
     * @memberof PublicIp
     */
    linkPublicIpId?: string;
    /**
     * The account ID of the owner of the NIC.
     * @type {string}
     * @memberof PublicIp
     */
    nicAccountId?: string;
    /**
     * The ID of the NIC the public IP is associated with (if any).
     * @type {string}
     * @memberof PublicIp
     */
    nicId?: string;
    /**
     * The private IP associated with the public IP.
     * @type {string}
     * @memberof PublicIp
     */
    privateIp?: string;
    /**
     * The public IP.
     * @type {string}
     * @memberof PublicIp
     */
    publicIp?: string;
    /**
     * The allocation ID of the public IP.
     * @type {string}
     * @memberof PublicIp
     */
    publicIpId?: string;
    /**
     * One or more tags associated with the public IP.
     * @type {Array<ResourceTag>}
     * @memberof PublicIp
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the VM the public IP is associated with (if any).
     * @type {string}
     * @memberof PublicIp
     */
    vmId?: string;
}

export function PublicIpFromJSON(json: any): PublicIp {
    return PublicIpFromJSONTyped(json, false);
}

export function PublicIpFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicIp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkPublicIpId': !exists(json, 'LinkPublicIpId') ? undefined : json['LinkPublicIpId'],
        'nicAccountId': !exists(json, 'NicAccountId') ? undefined : json['NicAccountId'],
        'nicId': !exists(json, 'NicId') ? undefined : json['NicId'],
        'privateIp': !exists(json, 'PrivateIp') ? undefined : json['PrivateIp'],
        'publicIp': !exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'publicIpId': !exists(json, 'PublicIpId') ? undefined : json['PublicIpId'],
        'tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
    };
}

export function PublicIpToJSON(value?: PublicIp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'LinkPublicIpId': value.linkPublicIpId,
        'NicAccountId': value.nicAccountId,
        'NicId': value.nicId,
        'PrivateIp': value.privateIp,
        'PublicIp': value.publicIp,
        'PublicIpId': value.publicIpId,
        'Tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResourceTagToJSON)),
        'VmId': value.vmId,
    };
}

