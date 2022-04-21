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
import { ResourceTag } from './ResourceTag';
import { RouteLight } from './RouteLight';
import { VpnOptions } from './VpnOptions';
/**
 * Information about a VPN connection.
 * @export
 * @interface VpnConnection
 */
export interface VpnConnection {
    /**
     * Example configuration for the client gateway.
     * @type {string}
     * @memberof VpnConnection
     */
    clientGatewayConfiguration?: string;
    /**
     * The ID of the client gateway used on the client end of the connection.
     * @type {string}
     * @memberof VpnConnection
     */
    clientGatewayId?: string;
    /**
     * The type of VPN connection (always `ipsec.1`).
     * @type {string}
     * @memberof VpnConnection
     */
    connectionType?: string;
    /**
     * Information about one or more static routes associated with the VPN connection, if any.
     * @type {Array<RouteLight>}
     * @memberof VpnConnection
     */
    routes?: Array<RouteLight>;
    /**
     * The state of the VPN connection (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {string}
     * @memberof VpnConnection
     */
    state?: string;
    /**
     * If false, the VPN connection uses dynamic routing with Border Gateway Protocol (BGP). If true, routing is controlled using static routes. For more information about how to create and delete static routes, see [CreateVpnConnectionRoute](#createvpnconnectionroute) and [DeleteVpnConnectionRoute](#deletevpnconnectionroute).
     * @type {boolean}
     * @memberof VpnConnection
     */
    staticRoutesOnly?: boolean;
    /**
     * One or more tags associated with the VPN connection.
     * @type {Array<ResourceTag>}
     * @memberof VpnConnection
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the virtual gateway used on the OUTSCALE end of the connection.
     * @type {string}
     * @memberof VpnConnection
     */
    virtualGatewayId?: string;
    /**
     * The ID of the VPN connection.
     * @type {string}
     * @memberof VpnConnection
     */
    vpnConnectionId?: string;
    /**
     *
     * @type {VpnOptions}
     * @memberof VpnConnection
     */
    vpnOptions?: VpnOptions;
}
export declare function VpnConnectionFromJSON(json: any): VpnConnection;
export declare function VpnConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): VpnConnection;
export declare function VpnConnectionToJSON(value?: VpnConnection | null): any;