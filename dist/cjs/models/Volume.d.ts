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
import { LinkedVolume } from './LinkedVolume';
import { ResourceTag } from './ResourceTag';
/**
 * Information about the volume.
 * @export
 * @interface Volume
 */
export interface Volume {
    /**
     * The date and time of creation of the volume.
     * @type {string}
     * @memberof Volume
     */
    creationDate?: string;
    /**
     * The number of I/O operations per second (IOPS):<br />
     * - For `io1` volumes, the number of provisioned IOPS<br />
     * - For `gp2` volumes, the baseline performance of the volume
     * @type {number}
     * @memberof Volume
     */
    iops?: number;
    /**
     * Information about your volume attachment.
     * @type {Array<LinkedVolume>}
     * @memberof Volume
     */
    linkedVolumes?: Array<LinkedVolume>;
    /**
     * The size of the volume, in gibibytes (GiB).
     * @type {number}
     * @memberof Volume
     */
    size?: number;
    /**
     * The snapshot from which the volume was created.
     * @type {string}
     * @memberof Volume
     */
    snapshotId?: string;
    /**
     * The state of the volume (`creating` \| `available` \| `in-use` \| `updating` \| `deleting` \| `error`).
     * @type {string}
     * @memberof Volume
     */
    state?: string;
    /**
     * The Subregion in which the volume was created.
     * @type {string}
     * @memberof Volume
     */
    subregionName?: string;
    /**
     * One or more tags associated with the volume.
     * @type {Array<ResourceTag>}
     * @memberof Volume
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the volume.
     * @type {string}
     * @memberof Volume
     */
    volumeId?: string;
    /**
     * The type of the volume (`standard` \| `gp2` \| `io1`).
     * @type {string}
     * @memberof Volume
     */
    volumeType?: string;
}
export declare function VolumeFromJSON(json: any): Volume;
export declare function VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Volume;
export declare function VolumeToJSON(value?: Volume | null): any;