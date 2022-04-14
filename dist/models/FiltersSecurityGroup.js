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
import { exists } from '../runtime';
export function FiltersSecurityGroupFromJSON(json) {
    return FiltersSecurityGroupFromJSONTyped(json, false);
}
export function FiltersSecurityGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountIds': !exists(json, 'AccountIds') ? undefined : json['AccountIds'],
        'descriptions': !exists(json, 'Descriptions') ? undefined : json['Descriptions'],
        'inboundRuleAccountIds': !exists(json, 'InboundRuleAccountIds') ? undefined : json['InboundRuleAccountIds'],
        'inboundRuleFromPortRanges': !exists(json, 'InboundRuleFromPortRanges') ? undefined : json['InboundRuleFromPortRanges'],
        'inboundRuleIpRanges': !exists(json, 'InboundRuleIpRanges') ? undefined : json['InboundRuleIpRanges'],
        'inboundRuleProtocols': !exists(json, 'InboundRuleProtocols') ? undefined : json['InboundRuleProtocols'],
        'inboundRuleSecurityGroupIds': !exists(json, 'InboundRuleSecurityGroupIds') ? undefined : json['InboundRuleSecurityGroupIds'],
        'inboundRuleSecurityGroupNames': !exists(json, 'InboundRuleSecurityGroupNames') ? undefined : json['InboundRuleSecurityGroupNames'],
        'inboundRuleToPortRanges': !exists(json, 'InboundRuleToPortRanges') ? undefined : json['InboundRuleToPortRanges'],
        'netIds': !exists(json, 'NetIds') ? undefined : json['NetIds'],
        'outboundRuleAccountIds': !exists(json, 'OutboundRuleAccountIds') ? undefined : json['OutboundRuleAccountIds'],
        'outboundRuleFromPortRanges': !exists(json, 'OutboundRuleFromPortRanges') ? undefined : json['OutboundRuleFromPortRanges'],
        'outboundRuleIpRanges': !exists(json, 'OutboundRuleIpRanges') ? undefined : json['OutboundRuleIpRanges'],
        'outboundRuleProtocols': !exists(json, 'OutboundRuleProtocols') ? undefined : json['OutboundRuleProtocols'],
        'outboundRuleSecurityGroupIds': !exists(json, 'OutboundRuleSecurityGroupIds') ? undefined : json['OutboundRuleSecurityGroupIds'],
        'outboundRuleSecurityGroupNames': !exists(json, 'OutboundRuleSecurityGroupNames') ? undefined : json['OutboundRuleSecurityGroupNames'],
        'outboundRuleToPortRanges': !exists(json, 'OutboundRuleToPortRanges') ? undefined : json['OutboundRuleToPortRanges'],
        'securityGroupIds': !exists(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'securityGroupNames': !exists(json, 'SecurityGroupNames') ? undefined : json['SecurityGroupNames'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
    };
}
export function FiltersSecurityGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountIds': value.accountIds,
        'Descriptions': value.descriptions,
        'InboundRuleAccountIds': value.inboundRuleAccountIds,
        'InboundRuleFromPortRanges': value.inboundRuleFromPortRanges,
        'InboundRuleIpRanges': value.inboundRuleIpRanges,
        'InboundRuleProtocols': value.inboundRuleProtocols,
        'InboundRuleSecurityGroupIds': value.inboundRuleSecurityGroupIds,
        'InboundRuleSecurityGroupNames': value.inboundRuleSecurityGroupNames,
        'InboundRuleToPortRanges': value.inboundRuleToPortRanges,
        'NetIds': value.netIds,
        'OutboundRuleAccountIds': value.outboundRuleAccountIds,
        'OutboundRuleFromPortRanges': value.outboundRuleFromPortRanges,
        'OutboundRuleIpRanges': value.outboundRuleIpRanges,
        'OutboundRuleProtocols': value.outboundRuleProtocols,
        'OutboundRuleSecurityGroupIds': value.outboundRuleSecurityGroupIds,
        'OutboundRuleSecurityGroupNames': value.outboundRuleSecurityGroupNames,
        'OutboundRuleToPortRanges': value.outboundRuleToPortRanges,
        'SecurityGroupIds': value.securityGroupIds,
        'SecurityGroupNames': value.securityGroupNames,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}
