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
 *
 * @export
 * @interface LinkPublicIpRequest
 */
export interface LinkPublicIpRequest {
    /**
     * If true, allows the public IP to be associated with the VM or NIC that you specify even if it is already associated with another VM or NIC. If false, prevents the EIP from being associated with the VM or NIC that you specify if it is already associated with another VM or NIC. (By default, true in the public Cloud, false in a Net.)
     * @type {boolean}
     * @memberof LinkPublicIpRequest
     */
    allowRelink?: boolean;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof LinkPublicIpRequest
     */
    dryRun?: boolean;
    /**
     * (Net only) The ID of the NIC. This parameter is required if the VM has more than one NIC attached. Otherwise, you need to specify the `VmId` parameter instead. You cannot specify both parameters at the same time.
     * @type {string}
     * @memberof LinkPublicIpRequest
     */
    nicId?: string;
    /**
     * (Net only) The primary or secondary private IP of the specified NIC. By default, the primary private IP.
     * @type {string}
     * @memberof LinkPublicIpRequest
     */
    privateIp?: string;
    /**
     * The public IP. This parameter is required unless you use the `PublicIpId` parameter.
     * @type {string}
     * @memberof LinkPublicIpRequest
     */
    publicIp?: string;
    /**
     * The allocation ID of the public IP. This parameter is required unless you use the `PublicIp` parameter.
     * @type {string}
     * @memberof LinkPublicIpRequest
     */
    publicIpId?: string;
    /**
     * The ID of the VM.<br />
     * - In the public Cloud, this parameter is required.<br />
     * - In a Net, this parameter is required if the VM has only one NIC. Otherwise, you need to specify the `NicId` parameter instead. You cannot specify both parameters at the same time.
     * @type {string}
     * @memberof LinkPublicIpRequest
     */
    vmId?: string;
}
export declare function LinkPublicIpRequestFromJSON(json: any): LinkPublicIpRequest;
export declare function LinkPublicIpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkPublicIpRequest;
export declare function LinkPublicIpRequestToJSON(value?: LinkPublicIpRequest | null): any;
