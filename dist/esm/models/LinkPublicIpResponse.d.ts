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
import { ModelResponseContext } from './ModelResponseContext';
/**
 *
 * @export
 * @interface LinkPublicIpResponse
 */
export interface LinkPublicIpResponse {
    /**
     * (Net only) The ID representing the association of the public IP with the VM or the NIC.
     * @type {string}
     * @memberof LinkPublicIpResponse
     */
    linkPublicIpId?: string;
    /**
     *
     * @type {ModelResponseContext}
     * @memberof LinkPublicIpResponse
     */
    responseContext?: ModelResponseContext;
}
export declare function LinkPublicIpResponseFromJSON(json: any): LinkPublicIpResponse;
export declare function LinkPublicIpResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkPublicIpResponse;
export declare function LinkPublicIpResponseToJSON(value?: LinkPublicIpResponse | null): any;
