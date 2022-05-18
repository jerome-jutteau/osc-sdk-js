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
 * Information about the public IP associated with the NIC.
 * @export
 * @interface LinkPublicIpLightForVm
 */
export interface LinkPublicIpLightForVm {
    /**
     * The name of the public DNS.
     * @type {string}
     * @memberof LinkPublicIpLightForVm
     */
    publicDnsName?: string;
    /**
     * The public IP associated with the NIC.
     * @type {string}
     * @memberof LinkPublicIpLightForVm
     */
    publicIp?: string;
    /**
     * The account ID of the owner of the public IP.
     * @type {string}
     * @memberof LinkPublicIpLightForVm
     */
    publicIpAccountId?: string;
}
export declare function LinkPublicIpLightForVmFromJSON(json: any): LinkPublicIpLightForVm;
export declare function LinkPublicIpLightForVmFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkPublicIpLightForVm;
export declare function LinkPublicIpLightForVmToJSON(value?: LinkPublicIpLightForVm | null): any;