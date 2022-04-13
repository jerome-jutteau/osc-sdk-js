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
import { Phase1Options } from './Phase1Options';
import { Phase2Options } from './Phase2Options';
/**
 * Information about the VPN options.
 * @export
 * @interface VpnOptions
 */
export interface VpnOptions {
    /**
     *
     * @type {Phase1Options}
     * @memberof VpnOptions
     */
    phase1Options?: Phase1Options;
    /**
     *
     * @type {Phase2Options}
     * @memberof VpnOptions
     */
    phase2Options?: Phase2Options;
    /**
     * The range of inside IPs for the tunnel. This must be a /30 CIDR block from the 169.254.254.0/24 range.
     * @type {string}
     * @memberof VpnOptions
     */
    tunnelInsideIpRange?: string;
}
export declare function VpnOptionsFromJSON(json: any): VpnOptions;
export declare function VpnOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VpnOptions;
export declare function VpnOptionsToJSON(value?: VpnOptions | null): any;
