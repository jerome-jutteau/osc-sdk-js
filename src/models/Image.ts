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
    BlockDeviceMappingImage,
    BlockDeviceMappingImageFromJSON,
    BlockDeviceMappingImageFromJSONTyped,
    BlockDeviceMappingImageToJSON,
} from './BlockDeviceMappingImage';
import {
    PermissionsOnResource,
    PermissionsOnResourceFromJSON,
    PermissionsOnResourceFromJSONTyped,
    PermissionsOnResourceToJSON,
} from './PermissionsOnResource';
import {
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';
import {
    StateComment,
    StateCommentFromJSON,
    StateCommentFromJSONTyped,
    StateCommentToJSON,
} from './StateComment';

/**
 * Information about the OMI.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * The account alias of the owner of the OMI.
     * @type {string}
     * @memberof Image
     */
    accountAlias?: string;
    /**
     * The account ID of the owner of the OMI.
     * @type {string}
     * @memberof Image
     */
    accountId?: string;
    /**
     * The architecture of the OMI (by default, `i386`).
     * @type {string}
     * @memberof Image
     */
    architecture?: string;
    /**
     * One or more block device mappings.
     * @type {Array<BlockDeviceMappingImage>}
     * @memberof Image
     */
    blockDeviceMappings?: Array<BlockDeviceMappingImage>;
    /**
     * The date and time at which the OMI was created.
     * @type {Date}
     * @memberof Image
     */
    creationDate?: Date;
    /**
     * The description of the OMI.
     * @type {string}
     * @memberof Image
     */
    description?: string;
    /**
     * The location of the bucket where the OMI files are stored.
     * @type {string}
     * @memberof Image
     */
    fileLocation?: string;
    /**
     * The ID of the OMI.
     * @type {string}
     * @memberof Image
     */
    imageId?: string;
    /**
     * The name of the OMI.
     * @type {string}
     * @memberof Image
     */
    imageName?: string;
    /**
     * The type of the OMI.
     * @type {string}
     * @memberof Image
     */
    imageType?: string;
    /**
     * 
     * @type {PermissionsOnResource}
     * @memberof Image
     */
    permissionsToLaunch?: PermissionsOnResource;
    /**
     * The product code associated with the OMI (`0001` Linux/Unix \| `0002` Windows \| `0004` Linux/Oracle \| `0005` Windows 10).
     * @type {Array<string>}
     * @memberof Image
     */
    productCodes?: Array<string>;
    /**
     * The name of the root device.
     * @type {string}
     * @memberof Image
     */
    rootDeviceName?: string;
    /**
     * The type of root device used by the OMI (always `bsu`).
     * @type {string}
     * @memberof Image
     */
    rootDeviceType?: string;
    /**
     * The state of the OMI (`pending` \| `available` \| `failed`).
     * @type {string}
     * @memberof Image
     */
    state?: string;
    /**
     * 
     * @type {StateComment}
     * @memberof Image
     */
    stateComment?: StateComment;
    /**
     * One or more tags associated with the OMI.
     * @type {Array<ResourceTag>}
     * @memberof Image
     */
    tags?: Array<ResourceTag>;
}

export function ImageFromJSON(json: any): Image {
    return ImageFromJSONTyped(json, false);
}

export function ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountAlias': !exists(json, 'AccountAlias') ? undefined : json['AccountAlias'],
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'architecture': !exists(json, 'Architecture') ? undefined : json['Architecture'],
        'blockDeviceMappings': !exists(json, 'BlockDeviceMappings') ? undefined : ((json['BlockDeviceMappings'] as Array<any>).map(BlockDeviceMappingImageFromJSON)),
        'creationDate': !exists(json, 'CreationDate') ? undefined : (new Date(json['CreationDate'])),
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'fileLocation': !exists(json, 'FileLocation') ? undefined : json['FileLocation'],
        'imageId': !exists(json, 'ImageId') ? undefined : json['ImageId'],
        'imageName': !exists(json, 'ImageName') ? undefined : json['ImageName'],
        'imageType': !exists(json, 'ImageType') ? undefined : json['ImageType'],
        'permissionsToLaunch': !exists(json, 'PermissionsToLaunch') ? undefined : PermissionsOnResourceFromJSON(json['PermissionsToLaunch']),
        'productCodes': !exists(json, 'ProductCodes') ? undefined : json['ProductCodes'],
        'rootDeviceName': !exists(json, 'RootDeviceName') ? undefined : json['RootDeviceName'],
        'rootDeviceType': !exists(json, 'RootDeviceType') ? undefined : json['RootDeviceType'],
        'state': !exists(json, 'State') ? undefined : json['State'],
        'stateComment': !exists(json, 'StateComment') ? undefined : StateCommentFromJSON(json['StateComment']),
        'tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
    };
}

export function ImageToJSON(value?: Image | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountAlias': value.accountAlias,
        'AccountId': value.accountId,
        'Architecture': value.architecture,
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : ((value.blockDeviceMappings as Array<any>).map(BlockDeviceMappingImageToJSON)),
        'CreationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString().substr(0,10)),
        'Description': value.description,
        'FileLocation': value.fileLocation,
        'ImageId': value.imageId,
        'ImageName': value.imageName,
        'ImageType': value.imageType,
        'PermissionsToLaunch': PermissionsOnResourceToJSON(value.permissionsToLaunch),
        'ProductCodes': value.productCodes,
        'RootDeviceName': value.rootDeviceName,
        'RootDeviceType': value.rootDeviceType,
        'State': value.state,
        'StateComment': StateCommentToJSON(value.stateComment),
        'Tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResourceTagToJSON)),
    };
}

