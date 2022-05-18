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
import { SecurityGroupRule } from './SecurityGroupRule';
/**
 *
 * @export
 * @interface DeleteSecurityGroupRuleRequest
 */
export interface DeleteSecurityGroupRuleRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    dryRun?: boolean;
    /**
     * The direction of the flow: `Inbound` or `Outbound`. You can specify `Outbound` for Nets only.
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    flow: string;
    /**
     * The beginning of the port range for the TCP and UDP protocols, or an ICMP type number.
     * @type {number}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    fromPortRange?: number;
    /**
     * The IP protocol name (`tcp`, `udp`, `icmp`, or `-1` for all protocols). By default, `-1`. In a Net, this can also be an IP protocol number. For more information, see the [IANA.org website](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    ipProtocol?: string;
    /**
     * The IP range for the security group rule, in CIDR notation (for example, 10.0.0.0/16).
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    ipRange?: string;
    /**
     * One or more rules you want to delete from the security group.
     * @type {Array<SecurityGroupRule>}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    rules?: Array<SecurityGroupRule>;
    /**
     * The account ID of the owner of the security group you want to delete a rule from.
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    securityGroupAccountIdToUnlink?: string;
    /**
     * The ID of the security group you want to delete a rule from.
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    securityGroupId: string;
    /**
     * The ID of the source security group. If you are in the Public Cloud, you can also specify the name of the source security group.
     * @type {string}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    securityGroupNameToUnlink?: string;
    /**
     * The end of the port range for the TCP and UDP protocols, or an ICMP type number.
     * @type {number}
     * @memberof DeleteSecurityGroupRuleRequest
     */
    toPortRange?: number;
}
export declare function DeleteSecurityGroupRuleRequestFromJSON(json: any): DeleteSecurityGroupRuleRequest;
export declare function DeleteSecurityGroupRuleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSecurityGroupRuleRequest;
export declare function DeleteSecurityGroupRuleRequestToJSON(value?: DeleteSecurityGroupRuleRequest | null): any;