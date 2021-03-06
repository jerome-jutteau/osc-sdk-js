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
/**
 * Information about the NIC attachment. If you are modifying the `DeleteOnVmDeletion` attribute, you must specify the ID of the NIC attachment.
 * @export
 * @interface LinkNicToUpdate
 */
export interface LinkNicToUpdate {
    /**
     * If true, the NIC is deleted when the VM is terminated. If false, the NIC is detached from the VM.
     * @type {boolean}
     * @memberof LinkNicToUpdate
     */
    deleteOnVmDeletion?: boolean;
    /**
     * The ID of the NIC attachment.
     * @type {string}
     * @memberof LinkNicToUpdate
     */
    linkNicId?: string;
}

export function LinkNicToUpdateFromJSON(json: any): LinkNicToUpdate {
    return LinkNicToUpdateFromJSONTyped(json, false);
}

export function LinkNicToUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkNicToUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleteOnVmDeletion': !exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'linkNicId': !exists(json, 'LinkNicId') ? undefined : json['LinkNicId'],
    };
}

export function LinkNicToUpdateToJSON(value?: LinkNicToUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'LinkNicId': value.linkNicId,
    };
}

