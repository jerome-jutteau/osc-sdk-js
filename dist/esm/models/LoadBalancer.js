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
import { AccessLogFromJSON, AccessLogToJSON, } from './AccessLog';
import { ApplicationStickyCookiePolicyFromJSON, ApplicationStickyCookiePolicyToJSON, } from './ApplicationStickyCookiePolicy';
import { HealthCheckFromJSON, HealthCheckToJSON, } from './HealthCheck';
import { ListenerFromJSON, ListenerToJSON, } from './Listener';
import { LoadBalancerStickyCookiePolicyFromJSON, LoadBalancerStickyCookiePolicyToJSON, } from './LoadBalancerStickyCookiePolicy';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag';
import { SourceSecurityGroupFromJSON, SourceSecurityGroupToJSON, } from './SourceSecurityGroup';
export function LoadBalancerFromJSON(json) {
    return LoadBalancerFromJSONTyped(json, false);
}
export function LoadBalancerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessLog': !exists(json, 'AccessLog') ? undefined : AccessLogFromJSON(json['AccessLog']),
        'applicationStickyCookiePolicies': !exists(json, 'ApplicationStickyCookiePolicies') ? undefined : (json['ApplicationStickyCookiePolicies'].map(ApplicationStickyCookiePolicyFromJSON)),
        'backendIps': !exists(json, 'BackendIps') ? undefined : json['BackendIps'],
        'backendVmIds': !exists(json, 'BackendVmIds') ? undefined : json['BackendVmIds'],
        'dnsName': !exists(json, 'DnsName') ? undefined : json['DnsName'],
        'healthCheck': !exists(json, 'HealthCheck') ? undefined : HealthCheckFromJSON(json['HealthCheck']),
        'listeners': !exists(json, 'Listeners') ? undefined : (json['Listeners'].map(ListenerFromJSON)),
        'loadBalancerName': !exists(json, 'LoadBalancerName') ? undefined : json['LoadBalancerName'],
        'loadBalancerStickyCookiePolicies': !exists(json, 'LoadBalancerStickyCookiePolicies') ? undefined : (json['LoadBalancerStickyCookiePolicies'].map(LoadBalancerStickyCookiePolicyFromJSON)),
        'loadBalancerType': !exists(json, 'LoadBalancerType') ? undefined : json['LoadBalancerType'],
        'netId': !exists(json, 'NetId') ? undefined : json['NetId'],
        'publicIp': !exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'securityGroups': !exists(json, 'SecurityGroups') ? undefined : json['SecurityGroups'],
        'sourceSecurityGroup': !exists(json, 'SourceSecurityGroup') ? undefined : SourceSecurityGroupFromJSON(json['SourceSecurityGroup']),
        'subnets': !exists(json, 'Subnets') ? undefined : json['Subnets'],
        'subregionNames': !exists(json, 'SubregionNames') ? undefined : json['SubregionNames'],
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
    };
}
export function LoadBalancerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccessLog': AccessLogToJSON(value.accessLog),
        'ApplicationStickyCookiePolicies': value.applicationStickyCookiePolicies === undefined ? undefined : (value.applicationStickyCookiePolicies.map(ApplicationStickyCookiePolicyToJSON)),
        'BackendIps': value.backendIps,
        'BackendVmIds': value.backendVmIds,
        'DnsName': value.dnsName,
        'HealthCheck': HealthCheckToJSON(value.healthCheck),
        'Listeners': value.listeners === undefined ? undefined : (value.listeners.map(ListenerToJSON)),
        'LoadBalancerName': value.loadBalancerName,
        'LoadBalancerStickyCookiePolicies': value.loadBalancerStickyCookiePolicies === undefined ? undefined : (value.loadBalancerStickyCookiePolicies.map(LoadBalancerStickyCookiePolicyToJSON)),
        'LoadBalancerType': value.loadBalancerType,
        'NetId': value.netId,
        'PublicIp': value.publicIp,
        'SecurityGroups': value.securityGroups,
        'SourceSecurityGroup': SourceSecurityGroupToJSON(value.sourceSecurityGroup),
        'Subnets': value.subnets,
        'SubregionNames': value.subregionNames,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
    };
}
