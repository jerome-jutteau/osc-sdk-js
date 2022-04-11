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
    SecurityGroupsMember,
    SecurityGroupsMemberFromJSON,
    SecurityGroupsMemberFromJSONTyped,
    SecurityGroupsMemberToJSON,
} from './SecurityGroupsMember';

/**
 * Information about the security group rule.
 * @export
 * @interface SecurityGroupRule
 */
export interface SecurityGroupRule {
    /**
     * The beginning of the port range for the TCP and UDP protocols, or an ICMP type number.
     * @type {number}
     * @memberof SecurityGroupRule
     */
    fromPortRange?: number;
    /**
     * The IP protocol name (`tcp`, `udp`, `icmp`, or `-1` for all protocols). By default, `-1`. In a Net, this can also be an IP protocol number. For more information, see the [IANA.org website](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
     * @type {string}
     * @memberof SecurityGroupRule
     */
    ipProtocol?: string;
    /**
     * One or more IP ranges for the security group rules, in CIDR notation (for example, 10.0.0.0/16).
     * @type {Array<string>}
     * @memberof SecurityGroupRule
     */
    ipRanges?: Array<string>;
    /**
     * Information about one or more members of a security group.
     * @type {Array<SecurityGroupsMember>}
     * @memberof SecurityGroupRule
     */
    securityGroupsMembers?: Array<SecurityGroupsMember>;
    /**
     * One or more service IDs to allow traffic from a Net to access the corresponding OUTSCALE services. For more information, see [ReadNetAccessPointServices](#readnetaccesspointservices).
     * @type {Array<string>}
     * @memberof SecurityGroupRule
     */
    serviceIds?: Array<string>;
    /**
     * The end of the port range for the TCP and UDP protocols, or an ICMP type number.
     * @type {number}
     * @memberof SecurityGroupRule
     */
    toPortRange?: number;
}

export function SecurityGroupRuleFromJSON(json: any): SecurityGroupRule {
    return SecurityGroupRuleFromJSONTyped(json, false);
}

export function SecurityGroupRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityGroupRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromPortRange': !exists(json, 'FromPortRange') ? undefined : json['FromPortRange'],
        'ipProtocol': !exists(json, 'IpProtocol') ? undefined : json['IpProtocol'],
        'ipRanges': !exists(json, 'IpRanges') ? undefined : json['IpRanges'],
        'securityGroupsMembers': !exists(json, 'SecurityGroupsMembers') ? undefined : ((json['SecurityGroupsMembers'] as Array<any>).map(SecurityGroupsMemberFromJSON)),
        'serviceIds': !exists(json, 'ServiceIds') ? undefined : json['ServiceIds'],
        'toPortRange': !exists(json, 'ToPortRange') ? undefined : json['ToPortRange'],
    };
}

export function SecurityGroupRuleToJSON(value?: SecurityGroupRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FromPortRange': value.fromPortRange,
        'IpProtocol': value.ipProtocol,
        'IpRanges': value.ipRanges,
        'SecurityGroupsMembers': value.securityGroupsMembers === undefined ? undefined : ((value.securityGroupsMembers as Array<any>).map(SecurityGroupsMemberToJSON)),
        'ServiceIds': value.serviceIds,
        'ToPortRange': value.toPortRange,
    };
}

