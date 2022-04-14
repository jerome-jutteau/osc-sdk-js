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
import { VpnOptions } from './VpnOptions';
/**
 *
 * @export
 * @interface UpdateVpnConnectionRequest
 */
export interface UpdateVpnConnectionRequest {
    /**
     * The ID of the client gateway.
     * @type {string}
     * @memberof UpdateVpnConnectionRequest
     */
    clientGatewayId?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateVpnConnectionRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the virtual gateway.
     * @type {string}
     * @memberof UpdateVpnConnectionRequest
     */
    virtualGatewayId?: string;
    /**
     * The ID of the VPN connection you want to modify.
     * @type {string}
     * @memberof UpdateVpnConnectionRequest
     */
    vpnConnectionId: string;
    /**
     *
     * @type {VpnOptions}
     * @memberof UpdateVpnConnectionRequest
     */
    vpnOptions?: VpnOptions;
}
export declare function UpdateVpnConnectionRequestFromJSON(json: any): UpdateVpnConnectionRequest;
export declare function UpdateVpnConnectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVpnConnectionRequest;
export declare function UpdateVpnConnectionRequestToJSON(value?: UpdateVpnConnectionRequest | null): any;