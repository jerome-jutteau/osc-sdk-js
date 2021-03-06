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
import { BlockDeviceMappingVmCreation } from './BlockDeviceMappingVmCreation';
import { NicForVmCreation } from './NicForVmCreation';
import { Placement } from './Placement';
/**
 *
 * @export
 * @interface CreateVmsRequest
 */
export interface CreateVmsRequest {
    /**
     * One or more block device mappings.
     * @type {Array<BlockDeviceMappingVmCreation>}
     * @memberof CreateVmsRequest
     */
    blockDeviceMappings?: Array<BlockDeviceMappingVmCreation>;
    /**
     * By default or if true, the VM is started on creation. If false, the VM is stopped on creation.
     * @type {boolean}
     * @memberof CreateVmsRequest
     */
    bootOnCreation?: boolean;
    /**
     * This parameter is not available. It is present in our API for the sake of historical compatibility with AWS.
     * @type {boolean}
     * @memberof CreateVmsRequest
     */
    bsuOptimized?: boolean;
    /**
     * A unique identifier which enables you to manage the idempotency.
     * @type {string}
     * @memberof CreateVmsRequest
     */
    clientToken?: string;
    /**
     * If true, you cannot terminate the VM using Cockpit, the CLI or the API. If false, you can.
     * @type {boolean}
     * @memberof CreateVmsRequest
     */
    deletionProtection?: boolean;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateVmsRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the OMI used to create the VM. You can find the list of OMIs by calling the [ReadImages](#readimages) method.
     * @type {string}
     * @memberof CreateVmsRequest
     */
    imageId: string;
    /**
     * The name of the keypair.
     * @type {string}
     * @memberof CreateVmsRequest
     */
    keypairName?: string;
    /**
     * The maximum number of VMs you want to create. If all the VMs cannot be created, the largest possible number of VMs above MinVmsCount is created.
     * @type {number}
     * @memberof CreateVmsRequest
     */
    maxVmsCount?: number;
    /**
     * The minimum number of VMs you want to create. If this number of VMs cannot be created, no VMs are created.
     * @type {number}
     * @memberof CreateVmsRequest
     */
    minVmsCount?: number;
    /**
     * One or more NICs. If you specify this parameter, you must not specify the `SubnetId` and `SubregionName` parameters. You also must define one NIC as the primary network interface of the VM with `0` as its device number.
     * @type {Array<NicForVmCreation>}
     * @memberof CreateVmsRequest
     */
    nics?: Array<NicForVmCreation>;
    /**
     * The performance of the VM (`medium` \| `high` \|  `highest`).
     * @type {string}
     * @memberof CreateVmsRequest
     */
    performance?: CreateVmsRequestPerformanceEnum;
    /**
     *
     * @type {Placement}
     * @memberof CreateVmsRequest
     */
    placement?: Placement;
    /**
     * One or more private IPs of the VM.
     * @type {Array<string>}
     * @memberof CreateVmsRequest
     */
    privateIps?: Array<string>;
    /**
     * One or more IDs of security group for the VMs.
     * @type {Array<string>}
     * @memberof CreateVmsRequest
     */
    securityGroupIds?: Array<string>;
    /**
     * One or more names of security groups for the VMs.
     * @type {Array<string>}
     * @memberof CreateVmsRequest
     */
    securityGroups?: Array<string>;
    /**
     * The ID of the Subnet in which you want to create the VM. If you specify this parameter, you must not specify the `Nics` parameter.
     * @type {string}
     * @memberof CreateVmsRequest
     */
    subnetId?: string;
    /**
     * Data or script used to add a specific configuration to the VM. It must be Base64-encoded and is limited to 500 kibibytes (KiB).
     * @type {string}
     * @memberof CreateVmsRequest
     */
    userData?: string;
    /**
     * The VM behavior when you stop it. By default or if set to `stop`, the VM stops. If set to `restart`, the VM stops then automatically restarts. If set to `terminate`, the VM stops and is terminated.
     * @type {string}
     * @memberof CreateVmsRequest
     */
    vmInitiatedShutdownBehavior?: string;
    /**
     * The type of VM (`t2.small` by default).<br />
     * For more information, see [Instance Types](https://docs.outscale.com/en/userguide/Instance-Types.html).
     * @type {string}
     * @memberof CreateVmsRequest
     */
    vmType?: string;
}
/**
 * @export
 */
export declare const CreateVmsRequestPerformanceEnum: {
    readonly Medium: "medium";
    readonly High: "high";
    readonly Highest: "highest";
};
export declare type CreateVmsRequestPerformanceEnum = typeof CreateVmsRequestPerformanceEnum[keyof typeof CreateVmsRequestPerformanceEnum];
export declare function CreateVmsRequestFromJSON(json: any): CreateVmsRequest;
export declare function CreateVmsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVmsRequest;
export declare function CreateVmsRequestToJSON(value?: CreateVmsRequest | null): any;
