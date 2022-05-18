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
 * Information about the DirectLink interfaces.
 * @export
 * @interface DirectLinkInterfaces
 */
export interface DirectLinkInterfaces {
    /**
     * The account ID of the owner of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    accountId?: string;
    /**
     * The BGP (Border Gateway Protocol) ASN (Autonomous System Number) on the customer's side of the DirectLink interface.
     * @type {number}
     * @memberof DirectLinkInterfaces
     */
    bgpAsn?: number;
    /**
     * The BGP authentication key.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    bgpKey?: string;
    /**
     * The IP on the customer's side of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    clientPrivateIp?: string;
    /**
     * The ID of the DirectLink.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    directLinkId?: string;
    /**
     * The ID of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    directLinkInterfaceId?: string;
    /**
     * The name of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    directLinkInterfaceName?: string;
    /**
     * The type of the DirectLink interface (always `private`).
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    interfaceType?: string;
    /**
     * The datacenter where the DirectLink interface is located.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    location?: string;
    /**
     * The IP on the OUTSCALE side of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    outscalePrivateIp?: string;
    /**
     * The state of the DirectLink interface (`pending` \| `available` \| `deleting` \| `deleted` \| `confirming` \| `rejected` \| `expired`).
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    state?: string;
    /**
     * The ID of the target virtual gateway.
     * @type {string}
     * @memberof DirectLinkInterfaces
     */
    virtualGatewayId?: string;
    /**
     * The VLAN number associated with the DirectLink interface.
     * @type {number}
     * @memberof DirectLinkInterfaces
     */
    vlan?: number;
}
export declare function DirectLinkInterfacesFromJSON(json: any): DirectLinkInterfaces;
export declare function DirectLinkInterfacesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectLinkInterfaces;
export declare function DirectLinkInterfacesToJSON(value?: DirectLinkInterfaces | null): any;
