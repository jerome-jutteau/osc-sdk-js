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
 * @interface UpdateApiAccessPolicyRequest
 */
export interface UpdateApiAccessPolicyRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateApiAccessPolicyRequest
     */
    dryRun?: boolean;
    /**
     * The maximum possible lifetime for your access keys, in seconds (between `0` and `3153600000`, both included). If set to `O`, your access keys can have unlimited lifetimes, but a trusted session cannot be activated. Otherwise, all your access keys must have an expiration date. This value must be greater than the remaining lifetime of each access key of your account.
     * @type {number}
     * @memberof UpdateApiAccessPolicyRequest
     */
    maxAccessKeyExpirationSeconds: number;
    /**
     * If true, a trusted session is activated, provided that you specify the `MaxAccessKeyExpirationSeconds` parameter with a value greater than `0`.
     * @type {boolean}
     * @memberof UpdateApiAccessPolicyRequest
     */
    requireTrustedEnv: boolean;
}
export declare function UpdateApiAccessPolicyRequestFromJSON(json: any): UpdateApiAccessPolicyRequest;
export declare function UpdateApiAccessPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiAccessPolicyRequest;
export declare function UpdateApiAccessPolicyRequestToJSON(value?: UpdateApiAccessPolicyRequest | null): any;
