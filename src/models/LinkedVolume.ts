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
 * Information about volume attachment.
 * @export
 * @interface LinkedVolume
 */
export interface LinkedVolume {
    /**
     * If true, the volume is deleted when terminating the VM. If false, the volume is not deleted when terminating the VM.
     * @type {boolean}
     * @memberof LinkedVolume
     */
    deleteOnVmDeletion?: boolean;
    /**
     * The name of the device.
     * @type {string}
     * @memberof LinkedVolume
     */
    deviceName?: string;
    /**
     * The state of the attachment of the volume (`attaching` \| `detaching` \| `attached` \| `detached`).
     * @type {string}
     * @memberof LinkedVolume
     */
    state?: string;
    /**
     * The ID of the VM.
     * @type {string}
     * @memberof LinkedVolume
     */
    vmId?: string;
    /**
     * The ID of the volume.
     * @type {string}
     * @memberof LinkedVolume
     */
    volumeId?: string;
}

export function LinkedVolumeFromJSON(json: any): LinkedVolume {
    return LinkedVolumeFromJSONTyped(json, false);
}

export function LinkedVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedVolume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleteOnVmDeletion': !exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'deviceName': !exists(json, 'DeviceName') ? undefined : json['DeviceName'],
        'state': !exists(json, 'State') ? undefined : json['State'],
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
        'volumeId': !exists(json, 'VolumeId') ? undefined : json['VolumeId'],
    };
}

export function LinkedVolumeToJSON(value?: LinkedVolume | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'DeviceName': value.deviceName,
        'State': value.state,
        'VmId': value.vmId,
        'VolumeId': value.volumeId,
    };
}

