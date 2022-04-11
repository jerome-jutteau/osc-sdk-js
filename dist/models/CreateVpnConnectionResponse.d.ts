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
import { ModelResponseContext } from './ModelResponseContext';
import { VpnConnection } from './VpnConnection';
/**
 *
 * @export
 * @interface CreateVpnConnectionResponse
 */
export interface CreateVpnConnectionResponse {
    /**
     *
     * @type {ModelResponseContext}
     * @memberof CreateVpnConnectionResponse
     */
    responseContext?: ModelResponseContext;
    /**
     *
     * @type {VpnConnection}
     * @memberof CreateVpnConnectionResponse
     */
    vpnConnection?: VpnConnection;
}
export declare function CreateVpnConnectionResponseFromJSON(json: any): CreateVpnConnectionResponse;
export declare function CreateVpnConnectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVpnConnectionResponse;
export declare function CreateVpnConnectionResponseToJSON(value?: CreateVpnConnectionResponse | null): any;
