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
 * Information about the source Net.
 * @export
 * @interface SourceNet
 */
export interface SourceNet {
    /**
     * The account ID of the owner of the source Net.
     * @type {string}
     * @memberof SourceNet
     */
    accountId?: string;
    /**
     * The IP range for the source Net, in CIDR notation (for example, 10.0.0.0/16).
     * @type {string}
     * @memberof SourceNet
     */
    ipRange?: string;
    /**
     * The ID of the source Net.
     * @type {string}
     * @memberof SourceNet
     */
    netId?: string;
}
export declare function SourceNetFromJSON(json: any): SourceNet;
export declare function SourceNetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceNet;
export declare function SourceNetToJSON(value?: SourceNet | null): any;
