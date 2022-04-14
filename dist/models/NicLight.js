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
import { LinkNicLightFromJSON, LinkNicLightToJSON, } from './LinkNicLight.js';
import { LinkPublicIpLightForVmFromJSON, LinkPublicIpLightForVmToJSON, } from './LinkPublicIpLightForVm.js';
import { PrivateIpLightForVmFromJSON, PrivateIpLightForVmToJSON, } from './PrivateIpLightForVm.js';
import { SecurityGroupLightFromJSON, SecurityGroupLightToJSON, } from './SecurityGroupLight.js';
export function NicLightFromJSON(json) {
    return NicLightFromJSONTyped(json, false);
}
export function NicLightFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'isSourceDestChecked': !exists(json, 'IsSourceDestChecked') ? undefined : json['IsSourceDestChecked'],
        'linkNic': !exists(json, 'LinkNic') ? undefined : LinkNicLightFromJSON(json['LinkNic']),
        'linkPublicIp': !exists(json, 'LinkPublicIp') ? undefined : LinkPublicIpLightForVmFromJSON(json['LinkPublicIp']),
        'macAddress': !exists(json, 'MacAddress') ? undefined : json['MacAddress'],
        'netId': !exists(json, 'NetId') ? undefined : json['NetId'],
        'nicId': !exists(json, 'NicId') ? undefined : json['NicId'],
        'privateDnsName': !exists(json, 'PrivateDnsName') ? undefined : json['PrivateDnsName'],
        'privateIps': !exists(json, 'PrivateIps') ? undefined : (json['PrivateIps'].map(PrivateIpLightForVmFromJSON)),
        'securityGroups': !exists(json, 'SecurityGroups') ? undefined : (json['SecurityGroups'].map(SecurityGroupLightFromJSON)),
        'state': !exists(json, 'State') ? undefined : json['State'],
        'subnetId': !exists(json, 'SubnetId') ? undefined : json['SubnetId'],
    };
}
export function NicLightToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Description': value.description,
        'IsSourceDestChecked': value.isSourceDestChecked,
        'LinkNic': LinkNicLightToJSON(value.linkNic),
        'LinkPublicIp': LinkPublicIpLightForVmToJSON(value.linkPublicIp),
        'MacAddress': value.macAddress,
        'NetId': value.netId,
        'NicId': value.nicId,
        'PrivateDnsName': value.privateDnsName,
        'PrivateIps': value.privateIps === undefined ? undefined : (value.privateIps.map(PrivateIpLightForVmToJSON)),
        'SecurityGroups': value.securityGroups === undefined ? undefined : (value.securityGroups.map(SecurityGroupLightToJSON)),
        'State': value.state,
        'SubnetId': value.subnetId,
    };
}
