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
import { BlockDeviceMappingVmUpdate } from './BlockDeviceMappingVmUpdate';
/**
 *
 * @export
 * @interface UpdateVmRequest
 */
export interface UpdateVmRequest {
    /**
     * One or more block device mappings of the VM.
     * @type {Array<BlockDeviceMappingVmUpdate>}
     * @memberof UpdateVmRequest
     */
    blockDeviceMappings?: Array<BlockDeviceMappingVmUpdate>;
    /**
     * If true, the VM is optimized for BSU I/O.
     * @type {boolean}
     * @memberof UpdateVmRequest
     */
    bsuOptimized?: boolean;
    /**
     * If true, you cannot terminate the VM using Cockpit, the CLI or the API. If false, you can.
     * @type {boolean}
     * @memberof UpdateVmRequest
     */
    deletionProtection?: boolean;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateVmRequest
     */
    dryRun?: boolean;
    /**
     * (Net only) If true, the source/destination check is enabled. If false, it is disabled. This value must be false for a NAT VM to perform network address translation (NAT) in a Net.
     * @type {boolean}
     * @memberof UpdateVmRequest
     */
    isSourceDestChecked?: boolean;
    /**
     * The name of the keypair.<br />
     * To complete the replacement, manually replace the old public key with the new public key in the ~/.ssh/authorized_keys file located in the VM. Restart the VM to apply the change.
     * @type {string}
     * @memberof UpdateVmRequest
     */
    keypairName?: string;
    /**
     * The performance of the VM (`medium` \| `high` \|  `highest`).
     * @type {string}
     * @memberof UpdateVmRequest
     */
    performance?: UpdateVmRequestPerformanceEnum;
    /**
     * One or more IDs of security groups for the VM.
     * @type {Array<string>}
     * @memberof UpdateVmRequest
     */
    securityGroupIds?: Array<string>;
    /**
     * The Base64-encoded MIME user data, limited to 500 kibibytes (KiB).
     * @type {string}
     * @memberof UpdateVmRequest
     */
    userData?: string;
    /**
     * The ID of the VM.
     * @type {string}
     * @memberof UpdateVmRequest
     */
    vmId: string;
    /**
     * The VM behavior when you stop it. By default or if set to `stop`, the VM stops. If set to `restart`, the VM stops then automatically restarts. If set to `terminate`, the VM stops and is terminated.
     * @type {string}
     * @memberof UpdateVmRequest
     */
    vmInitiatedShutdownBehavior?: string;
    /**
     * The type of VM. For more information, see [Instance Types](https://docs.outscale.com/en/userguide/Instance-Types.html).
     * @type {string}
     * @memberof UpdateVmRequest
     */
    vmType?: string;
}
/**
* @export
* @enum {string}
*/
export declare enum UpdateVmRequestPerformanceEnum {
    Medium = "medium",
    High = "high",
    Highest = "highest"
}
export declare function UpdateVmRequestFromJSON(json: any): UpdateVmRequest;
export declare function UpdateVmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVmRequest;
export declare function UpdateVmRequestToJSON(value?: UpdateVmRequest | null): any;