/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.18
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about the attachment.
 * @export
 * @interface NetToVirtualGatewayLink
 */
export interface NetToVirtualGatewayLink {
    /**
     * The ID of the Net to which the virtual gateway is attached.
     * @type {string}
     * @memberof NetToVirtualGatewayLink
     */
    netId?: string;
    /**
     * The state of the attachment (`attaching` \| `attached` \| `detaching` \| `detached`).
     * @type {string}
     * @memberof NetToVirtualGatewayLink
     */
    state?: string;
}
export declare function NetToVirtualGatewayLinkFromJSON(json: any): NetToVirtualGatewayLink;
export declare function NetToVirtualGatewayLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetToVirtualGatewayLink;
export declare function NetToVirtualGatewayLinkToJSON(value?: NetToVirtualGatewayLink | null): any;
