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
import { exists } from '../runtime.js';
import { BlockDeviceMappingImageFromJSON, BlockDeviceMappingImageToJSON, } from './BlockDeviceMappingImage.js';
import { PermissionsOnResourceFromJSON, PermissionsOnResourceToJSON, } from './PermissionsOnResource.js';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag.js';
import { StateCommentFromJSON, StateCommentToJSON, } from './StateComment.js';
export function ImageFromJSON(json) {
    return ImageFromJSONTyped(json, false);
}
export function ImageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountAlias': !exists(json, 'AccountAlias') ? undefined : json['AccountAlias'],
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'architecture': !exists(json, 'Architecture') ? undefined : json['Architecture'],
        'blockDeviceMappings': !exists(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingImageFromJSON)),
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
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
    };
}
export function ImageToJSON(value) {
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
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingImageToJSON)),
        'CreationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString().substr(0, 10)),
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
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
    };
}
