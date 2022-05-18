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
 * Information about the Subregion.
 * @export
 * @interface Subregion
 */
export interface Subregion {
    /**
     * The name of the Region containing the Subregion.
     * @type {string}
     * @memberof Subregion
     */
    regionName?: string;
    /**
     * The state of the Subregion (`available` \| `information` \| `impaired` \| `unavailable`).
     * @type {string}
     * @memberof Subregion
     */
    state?: string;
    /**
     * The name of the Subregion.
     * @type {string}
     * @memberof Subregion
     */
    subregionName?: string;
}
export declare function SubregionFromJSON(json: any): Subregion;
export declare function SubregionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subregion;
export declare function SubregionToJSON(value?: Subregion | null): any;
