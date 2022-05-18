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
/**
 *
 * @export
 * @interface CreateSecurityGroupRequest
 */
export interface CreateSecurityGroupRequest {
    /**
     * A description for the security group, with a maximum length of 255 [ASCII printable characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).
     * @type {string}
     * @memberof CreateSecurityGroupRequest
     */
    description: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateSecurityGroupRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Net for the security group.
     * @type {string}
     * @memberof CreateSecurityGroupRequest
     */
    netId?: string;
    /**
     * The name of the security group.<br />
     * This name must not start with `sg-`.</br>
     * This name must be unique and contain between 1 and 255 ASCII characters. Accented letters are not allowed.
     * @type {string}
     * @memberof CreateSecurityGroupRequest
     */
    securityGroupName: string;
}
export declare function CreateSecurityGroupRequestFromJSON(json: any): CreateSecurityGroupRequest;
export declare function CreateSecurityGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSecurityGroupRequest;
export declare function CreateSecurityGroupRequestToJSON(value?: CreateSecurityGroupRequest | null): any;
