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
 * Information about the OOS API key.
 * @export
 * @interface OsuApiKey
 */
export interface OsuApiKey {
    /**
     * The API key of the OOS account that enables you to access the bucket.
     * @type {string}
     * @memberof OsuApiKey
     */
    apiKeyId?: string;
    /**
     * The secret key of the OOS account that enables you to access the bucket.
     * @type {string}
     * @memberof OsuApiKey
     */
    secretKey?: string;
}
export declare function OsuApiKeyFromJSON(json: any): OsuApiKey;
export declare function OsuApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OsuApiKey;
export declare function OsuApiKeyToJSON(value?: OsuApiKey | null): any;
