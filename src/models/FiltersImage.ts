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
 * One or more filters.
 * @export
 * @interface FiltersImage
 */
export interface FiltersImage {
    /**
     * The account aliases of the owners of the OMIs.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    accountAliases?: Array<string>;
    /**
     * The account IDs of the owners of the OMIs. By default, all the OMIs for which you have launch permissions are described.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    accountIds?: Array<string>;
    /**
     * The architectures of the OMIs (`i386` \| `x86_64`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    architectures?: Array<string>;
    /**
     * Whether the volumes are deleted or not when terminating the VM.
     * @type {boolean}
     * @memberof FiltersImage
     */
    blockDeviceMappingDeleteOnVmDeletion?: boolean;
    /**
     * The device names for the volumes.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    blockDeviceMappingDeviceNames?: Array<string>;
    /**
     * The IDs of the snapshots used to create the volumes.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    blockDeviceMappingSnapshotIds?: Array<string>;
    /**
     * The sizes of the volumes, in gibibytes (GiB).
     * @type {Array<number>}
     * @memberof FiltersImage
     */
    blockDeviceMappingVolumeSizes?: Array<number>;
    /**
     * The types of volumes (`standard` \| `gp2` \| `io1`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    blockDeviceMappingVolumeTypes?: Array<string>;
    /**
     * The descriptions of the OMIs, provided when they were created.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    descriptions?: Array<string>;
    /**
     * The locations of the buckets where the OMI files are stored.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    fileLocations?: Array<string>;
    /**
     * The hypervisor type of the OMI (always `xen`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    hypervisors?: Array<string>;
    /**
     * The IDs of the OMIs.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    imageIds?: Array<string>;
    /**
     * The names of the OMIs, provided when they were created.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    imageNames?: Array<string>;
    /**
     * The account IDs of the users who have launch permissions for the OMIs.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    permissionsToLaunchAccountIds?: Array<string>;
    /**
     * If true, lists all public OMIs. If false, lists all private OMIs.
     * @type {boolean}
     * @memberof FiltersImage
     */
    permissionsToLaunchGlobalPermission?: boolean;
    /**
     * The product code associated with the OMI (`0001` Linux/Unix \| `0002` Windows \| `0004` Linux/Oracle \| `0005` Windows 10).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    productCodes?: Array<string>;
    /**
     * The device names of the root devices (for example, `/dev/sda1`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    rootDeviceNames?: Array<string>;
    /**
     * The types of root device used by the OMIs (always `bsu`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    rootDeviceTypes?: Array<string>;
    /**
     * The states of the OMIs (`pending` \| `available` \| `failed`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    states?: Array<string>;
    /**
     * The keys of the tags associated with the OMIs.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the OMIs.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the OMIs, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    tags?: Array<string>;
    /**
     * The virtualization types (always `hvm`).
     * @type {Array<string>}
     * @memberof FiltersImage
     */
    virtualizationTypes?: Array<string>;
}

export function FiltersImageFromJSON(json: any): FiltersImage {
    return FiltersImageFromJSONTyped(json, false);
}

export function FiltersImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountAliases': !exists(json, 'AccountAliases') ? undefined : json['AccountAliases'],
        'accountIds': !exists(json, 'AccountIds') ? undefined : json['AccountIds'],
        'architectures': !exists(json, 'Architectures') ? undefined : json['Architectures'],
        'blockDeviceMappingDeleteOnVmDeletion': !exists(json, 'BlockDeviceMappingDeleteOnVmDeletion') ? undefined : json['BlockDeviceMappingDeleteOnVmDeletion'],
        'blockDeviceMappingDeviceNames': !exists(json, 'BlockDeviceMappingDeviceNames') ? undefined : json['BlockDeviceMappingDeviceNames'],
        'blockDeviceMappingSnapshotIds': !exists(json, 'BlockDeviceMappingSnapshotIds') ? undefined : json['BlockDeviceMappingSnapshotIds'],
        'blockDeviceMappingVolumeSizes': !exists(json, 'BlockDeviceMappingVolumeSizes') ? undefined : json['BlockDeviceMappingVolumeSizes'],
        'blockDeviceMappingVolumeTypes': !exists(json, 'BlockDeviceMappingVolumeTypes') ? undefined : json['BlockDeviceMappingVolumeTypes'],
        'descriptions': !exists(json, 'Descriptions') ? undefined : json['Descriptions'],
        'fileLocations': !exists(json, 'FileLocations') ? undefined : json['FileLocations'],
        'hypervisors': !exists(json, 'Hypervisors') ? undefined : json['Hypervisors'],
        'imageIds': !exists(json, 'ImageIds') ? undefined : json['ImageIds'],
        'imageNames': !exists(json, 'ImageNames') ? undefined : json['ImageNames'],
        'permissionsToLaunchAccountIds': !exists(json, 'PermissionsToLaunchAccountIds') ? undefined : json['PermissionsToLaunchAccountIds'],
        'permissionsToLaunchGlobalPermission': !exists(json, 'PermissionsToLaunchGlobalPermission') ? undefined : json['PermissionsToLaunchGlobalPermission'],
        'productCodes': !exists(json, 'ProductCodes') ? undefined : json['ProductCodes'],
        'rootDeviceNames': !exists(json, 'RootDeviceNames') ? undefined : json['RootDeviceNames'],
        'rootDeviceTypes': !exists(json, 'RootDeviceTypes') ? undefined : json['RootDeviceTypes'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
        'virtualizationTypes': !exists(json, 'VirtualizationTypes') ? undefined : json['VirtualizationTypes'],
    };
}

export function FiltersImageToJSON(value?: FiltersImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountAliases': value.accountAliases,
        'AccountIds': value.accountIds,
        'Architectures': value.architectures,
        'BlockDeviceMappingDeleteOnVmDeletion': value.blockDeviceMappingDeleteOnVmDeletion,
        'BlockDeviceMappingDeviceNames': value.blockDeviceMappingDeviceNames,
        'BlockDeviceMappingSnapshotIds': value.blockDeviceMappingSnapshotIds,
        'BlockDeviceMappingVolumeSizes': value.blockDeviceMappingVolumeSizes,
        'BlockDeviceMappingVolumeTypes': value.blockDeviceMappingVolumeTypes,
        'Descriptions': value.descriptions,
        'FileLocations': value.fileLocations,
        'Hypervisors': value.hypervisors,
        'ImageIds': value.imageIds,
        'ImageNames': value.imageNames,
        'PermissionsToLaunchAccountIds': value.permissionsToLaunchAccountIds,
        'PermissionsToLaunchGlobalPermission': value.permissionsToLaunchGlobalPermission,
        'ProductCodes': value.productCodes,
        'RootDeviceNames': value.rootDeviceNames,
        'RootDeviceTypes': value.rootDeviceTypes,
        'States': value.states,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
        'VirtualizationTypes': value.virtualizationTypes,
    };
}

