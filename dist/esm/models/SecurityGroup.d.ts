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
import { ResourceTag } from './ResourceTag';
import { SecurityGroupRule } from './SecurityGroupRule';
/**
 * Information about the security group.
 * @export
 * @interface SecurityGroup
 */
export interface SecurityGroup {
    /**
     * The account ID of a user that has been granted permission.
     * @type {string}
     * @memberof SecurityGroup
     */
    accountId?: string;
    /**
     * The description of the security group.
     * @type {string}
     * @memberof SecurityGroup
     */
    description?: string;
    /**
     * The inbound rules associated with the security group.
     * @type {Array<SecurityGroupRule>}
     * @memberof SecurityGroup
     */
    inboundRules?: Array<SecurityGroupRule>;
    /**
     * The ID of the Net for the security group.
     * @type {string}
     * @memberof SecurityGroup
     */
    netId?: string;
    /**
     * The outbound rules associated with the security group.
     * @type {Array<SecurityGroupRule>}
     * @memberof SecurityGroup
     */
    outboundRules?: Array<SecurityGroupRule>;
    /**
     * The ID of the security group.
     * @type {string}
     * @memberof SecurityGroup
     */
    securityGroupId?: string;
    /**
     * The name of the security group.
     * @type {string}
     * @memberof SecurityGroup
     */
    securityGroupName?: string;
    /**
     * One or more tags associated with the security group.
     * @type {Array<ResourceTag>}
     * @memberof SecurityGroup
     */
    tags?: Array<ResourceTag>;
}
export declare function SecurityGroupFromJSON(json: any): SecurityGroup;
export declare function SecurityGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityGroup;
export declare function SecurityGroupToJSON(value?: SecurityGroup | null): any;