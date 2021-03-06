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
    BsuToUpdateVm,
    BsuToUpdateVmFromJSON,
    BsuToUpdateVmFromJSONTyped,
    BsuToUpdateVmToJSON,
} from './BsuToUpdateVm';

/**
 * Information about the block device mapping.
 * @export
 * @interface BlockDeviceMappingVmUpdate
 */
export interface BlockDeviceMappingVmUpdate {
    /**
     * 
     * @type {BsuToUpdateVm}
     * @memberof BlockDeviceMappingVmUpdate
     */
    bsu?: BsuToUpdateVm;
    /**
     * The device name for the volume. For a root device, you must use `/dev/sda1`. For other volumes, you must use `/dev/sdX` or `/dev/xvdX` (where `X` is a letter between `b` and `z`).
     * @type {string}
     * @memberof BlockDeviceMappingVmUpdate
     */
    deviceName?: string;
    /**
     * Removes the device which is included in the block device mapping of the OMI.
     * @type {string}
     * @memberof BlockDeviceMappingVmUpdate
     */
    noDevice?: string;
    /**
     * The name of the virtual device (ephemeralN).
     * @type {string}
     * @memberof BlockDeviceMappingVmUpdate
     */
    virtualDeviceName?: string;
}

export function BlockDeviceMappingVmUpdateFromJSON(json: any): BlockDeviceMappingVmUpdate {
    return BlockDeviceMappingVmUpdateFromJSONTyped(json, false);
}

export function BlockDeviceMappingVmUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDeviceMappingVmUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bsu': !exists(json, 'Bsu') ? undefined : BsuToUpdateVmFromJSON(json['Bsu']),
        'deviceName': !exists(json, 'DeviceName') ? undefined : json['DeviceName'],
        'noDevice': !exists(json, 'NoDevice') ? undefined : json['NoDevice'],
        'virtualDeviceName': !exists(json, 'VirtualDeviceName') ? undefined : json['VirtualDeviceName'],
    };
}

export function BlockDeviceMappingVmUpdateToJSON(value?: BlockDeviceMappingVmUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Bsu': BsuToUpdateVmToJSON(value.bsu),
        'DeviceName': value.deviceName,
        'NoDevice': value.noDevice,
        'VirtualDeviceName': value.virtualDeviceName,
    };
}

