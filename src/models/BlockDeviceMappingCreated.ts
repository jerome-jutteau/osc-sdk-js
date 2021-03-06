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
    BsuCreated,
    BsuCreatedFromJSON,
    BsuCreatedFromJSONTyped,
    BsuCreatedToJSON,
} from './BsuCreated';

/**
 * Information about the created block device mapping.
 * @export
 * @interface BlockDeviceMappingCreated
 */
export interface BlockDeviceMappingCreated {
    /**
     * 
     * @type {BsuCreated}
     * @memberof BlockDeviceMappingCreated
     */
    bsu?: BsuCreated;
    /**
     * The name of the device.
     * @type {string}
     * @memberof BlockDeviceMappingCreated
     */
    deviceName?: string;
}

export function BlockDeviceMappingCreatedFromJSON(json: any): BlockDeviceMappingCreated {
    return BlockDeviceMappingCreatedFromJSONTyped(json, false);
}

export function BlockDeviceMappingCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDeviceMappingCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bsu': !exists(json, 'Bsu') ? undefined : BsuCreatedFromJSON(json['Bsu']),
        'deviceName': !exists(json, 'DeviceName') ? undefined : json['DeviceName'],
    };
}

export function BlockDeviceMappingCreatedToJSON(value?: BlockDeviceMappingCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Bsu': BsuCreatedToJSON(value.bsu),
        'DeviceName': value.deviceName,
    };
}

