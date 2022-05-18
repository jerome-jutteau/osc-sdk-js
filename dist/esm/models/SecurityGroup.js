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
import { exists } from '../runtime';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag';
import { SecurityGroupRuleFromJSON, SecurityGroupRuleToJSON, } from './SecurityGroupRule';
export function SecurityGroupFromJSON(json) {
    return SecurityGroupFromJSONTyped(json, false);
}
export function SecurityGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'inboundRules': !exists(json, 'InboundRules') ? undefined : (json['InboundRules'].map(SecurityGroupRuleFromJSON)),
        'netId': !exists(json, 'NetId') ? undefined : json['NetId'],
        'outboundRules': !exists(json, 'OutboundRules') ? undefined : (json['OutboundRules'].map(SecurityGroupRuleFromJSON)),
        'securityGroupId': !exists(json, 'SecurityGroupId') ? undefined : json['SecurityGroupId'],
        'securityGroupName': !exists(json, 'SecurityGroupName') ? undefined : json['SecurityGroupName'],
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
    };
}
export function SecurityGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Description': value.description,
        'InboundRules': value.inboundRules === undefined ? undefined : (value.inboundRules.map(SecurityGroupRuleToJSON)),
        'NetId': value.netId,
        'OutboundRules': value.outboundRules === undefined ? undefined : (value.outboundRules.map(SecurityGroupRuleToJSON)),
        'SecurityGroupId': value.securityGroupId,
        'SecurityGroupName': value.securityGroupName,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
    };
}
