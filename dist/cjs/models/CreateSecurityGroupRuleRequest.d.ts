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
 * @interface CreateSecurityGroupRuleRequest
 */
export interface CreateSecurityGroupRuleRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateSecurityGroupRuleRequest
     */
    dryRun?: boolean;
    /**
     * The direction of the flow: `Inbound` or `Outbound`. You can specify `Outbound` for Nets only.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    flow: string;
    /**
     * The beginning of the port range for the TCP and UDP protocols, or an ICMP type number. If you specify this parameter, you cannot specify the `Rules` parameter and its subparameters.
     * @type {number}
     * @memberof CreateSecurityGroupRuleRequest
     */
    fromPortRange?: number;
    /**
     * The IP protocol name (`tcp`, `udp`, `icmp`, or `-1` for all protocols). By default, `-1`. In a Net, this can also be an IP protocol number. For more information, see the [IANA.org website](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml). If you specify this parameter, you cannot specify the `Rules` parameter and its subparameters.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    ipProtocol?: string;
    /**
     * The IP range for the security group rule, in CIDR notation (for example, 10.0.0.0/16). If you specify this parameter, you cannot specify the `Rules` parameter and its subparameters.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    ipRange?: string;
    /**
     * Information about the security group rule to create. If you specify this parent parameter and its subparameters, you cannot specify the following parent parameters: `FromPortRange`, `IpProtocol`, `IpRange`, and `ToPortRange`.
     * @type {Array<SecurityGroupRule>}
     * @memberof CreateSecurityGroupRuleRequest
     */
    rules?: Array<SecurityGroupRule>;
    /**
     * The account ID of the owner of the security group for which you want to create a rule.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    securityGroupAccountIdToLink?: string;
    /**
     * The ID of the security group for which you want to create a rule.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    securityGroupId: string;
    /**
     * The ID of the source security group. If you are in the Public Cloud, you can also specify the name of the source security group.
     * @type {string}
     * @memberof CreateSecurityGroupRuleRequest
     */
    securityGroupNameToLink?: string;
    /**
     * The end of the port range for the TCP and UDP protocols, or an ICMP type number. If you specify this parameter, you cannot specify the `Rules` parameter and its subparameters.
     * @type {number}
     * @memberof CreateSecurityGroupRuleRequest
     */
    toPortRange?: number;
}
export declare function CreateSecurityGroupRuleRequestFromJSON(json: any): CreateSecurityGroupRuleRequest;
export declare function CreateSecurityGroupRuleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSecurityGroupRuleRequest;
export declare function CreateSecurityGroupRuleRequestToJSON(value?: CreateSecurityGroupRuleRequest | null): any;
