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
 * Information about the tag.
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * The key of the tag, with a minimum of 1 character.
     * @type {string}
     * @memberof Tag
     */
    key?: string;
    /**
     * The ID of the resource.
     * @type {string}
     * @memberof Tag
     */
    resourceId?: string;
    /**
     * The type of the resource.
     * @type {string}
     * @memberof Tag
     */
    resourceType?: string;
    /**
     * The value of the tag, between 0 and 255 characters.
     * @type {string}
     * @memberof Tag
     */
    value?: string;
}
export declare function TagFromJSON(json: any): Tag;
export declare function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag;
export declare function TagToJSON(value?: Tag | null): any;
