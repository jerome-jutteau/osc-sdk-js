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
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag.js';
export function PublicIpFromJSON(json) {
    return PublicIpFromJSONTyped(json, false);
}
export function PublicIpFromJSONTyped(json, ignoreDiscriminator) {
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
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
    };
}
export function PublicIpToJSON(value) {
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
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
        'VmId': value.vmId,
    };
}
