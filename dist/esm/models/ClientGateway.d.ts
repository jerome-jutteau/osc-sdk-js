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
/**
 * Information about the client gateway.
 * @export
 * @interface ClientGateway
 */
export interface ClientGateway {
    /**
     * The Autonomous System Number (ASN) used by the Border Gateway Protocol (BGP) to find the path to your client gateway through the Internet.
     * @type {number}
     * @memberof ClientGateway
     */
    bgpAsn?: number;
    /**
     * The ID of the client gateway.
     * @type {string}
     * @memberof ClientGateway
     */
    clientGatewayId?: string;
    /**
     * The type of communication tunnel used by the client gateway (only `ipsec.1` is supported).
     * @type {string}
     * @memberof ClientGateway
     */
    connectionType?: string;
    /**
     * The public IPv4 address of the client gateway (must be a fixed address into a NATed network).
     * @type {string}
     * @memberof ClientGateway
     */
    publicIp?: string;
    /**
     * The state of the client gateway (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {string}
     * @memberof ClientGateway
     */
    state?: string;
    /**
     * One or more tags associated with the client gateway.
     * @type {Array<ResourceTag>}
     * @memberof ClientGateway
     */
    tags?: Array<ResourceTag>;
}
export declare function ClientGatewayFromJSON(json: any): ClientGateway;
export declare function ClientGatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientGateway;
export declare function ClientGatewayToJSON(value?: ClientGateway | null): any;
