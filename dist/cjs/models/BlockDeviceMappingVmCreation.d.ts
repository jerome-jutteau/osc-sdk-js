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
import { BsuToCreate } from './BsuToCreate';
/**
 * Information about the block device mapping.
 * @export
 * @interface BlockDeviceMappingVmCreation
 */
export interface BlockDeviceMappingVmCreation {
    /**
     *
     * @type {BsuToCreate}
     * @memberof BlockDeviceMappingVmCreation
     */
    bsu?: BsuToCreate;
    /**
     * The device name for the volume. For a root device, you must use `/dev/sda1`. For other volumes, you must use `/dev/sdX` or `/dev/xvdX` (where `X` is a letter between `b` and `z`).
     * @type {string}
     * @memberof BlockDeviceMappingVmCreation
     */
    deviceName?: string;
    /**
     * Removes the device which is included in the block device mapping of the OMI.
     * @type {string}
     * @memberof BlockDeviceMappingVmCreation
     */
    noDevice?: string;
    /**
     * The name of the virtual device (ephemeralN).
     * @type {string}
     * @memberof BlockDeviceMappingVmCreation
     */
    virtualDeviceName?: string;
}
export declare function BlockDeviceMappingVmCreationFromJSON(json: any): BlockDeviceMappingVmCreation;
export declare function BlockDeviceMappingVmCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDeviceMappingVmCreation;
export declare function BlockDeviceMappingVmCreationToJSON(value?: BlockDeviceMappingVmCreation | null): any;
