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
 * Information about the API access rule.
 * @export
 * @interface ApiAccessRule
 */
export interface ApiAccessRule {
    /**
     *  The ID of the API access rule.
     * @type {string}
     * @memberof ApiAccessRule
     */
    apiAccessRuleId?: string;
    /**
     * One or more IDs of Client Certificate Authorities (CAs) used for the API access rule.
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    caIds?: Array<string>;
    /**
     * One or more Client Certificate Common Names (CNs).
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    cns?: Array<string>;
    /**
     * The description of the API access rule.
     * @type {string}
     * @memberof ApiAccessRule
     */
    description?: string;
    /**
     * One or more IP ranges used for the API access rule, in CIDR notation (for example, 192.0.2.0/16).
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    ipRanges?: Array<string>;
}
export declare function ApiAccessRuleFromJSON(json: any): ApiAccessRule;
export declare function ApiAccessRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiAccessRule;
export declare function ApiAccessRuleToJSON(value?: ApiAccessRule | null): any;
