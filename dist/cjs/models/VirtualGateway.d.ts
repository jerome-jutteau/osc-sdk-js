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
import { NetToVirtualGatewayLink } from './NetToVirtualGatewayLink';
import { ResourceTag } from './ResourceTag';
/**
 * Information about the virtual gateway.
 * @export
 * @interface VirtualGateway
 */
export interface VirtualGateway {
    /**
     * The type of VPN connection supported by the virtual gateway (only `ipsec.1` is supported).
     * @type {string}
     * @memberof VirtualGateway
     */
    connectionType?: string;
    /**
     * The Net to which the virtual gateway is attached.
     * @type {Array<NetToVirtualGatewayLink>}
     * @memberof VirtualGateway
     */
    netToVirtualGatewayLinks?: Array<NetToVirtualGatewayLink>;
    /**
     * The state of the virtual gateway (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {string}
     * @memberof VirtualGateway
     */
    state?: string;
    /**
     * One or more tags associated with the virtual gateway.
     * @type {Array<ResourceTag>}
     * @memberof VirtualGateway
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the virtual gateway.
     * @type {string}
     * @memberof VirtualGateway
     */
    virtualGatewayId?: string;
}
export declare function VirtualGatewayFromJSON(json: any): VirtualGateway;
export declare function VirtualGatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualGateway;
export declare function VirtualGatewayToJSON(value?: VirtualGateway | null): any;
