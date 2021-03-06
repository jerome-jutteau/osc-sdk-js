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
 *
 * @export
 * @interface CreateSnapshotRequest
 */
export interface CreateSnapshotRequest {
    /**
     * A description for the snapshot.
     * @type {string}
     * @memberof CreateSnapshotRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateSnapshotRequest
     */
    dryRun?: boolean;
    /**
     * The pre-signed URL of the snapshot you want to import from the bucket.
     * @type {string}
     * @memberof CreateSnapshotRequest
     */
    fileLocation?: string;
    /**
     * The size of the snapshot you want to create in your account, in bytes. This size must be greater than or equal to the size of the original, uncompressed snapshot.
     * @type {number}
     * @memberof CreateSnapshotRequest
     */
    snapshotSize?: number;
    /**
     * The name of the source Region, which must be the same as the Region of your account.
     * @type {string}
     * @memberof CreateSnapshotRequest
     */
    sourceRegionName?: string;
    /**
     * The ID of the snapshot you want to copy.
     * @type {string}
     * @memberof CreateSnapshotRequest
     */
    sourceSnapshotId?: string;
    /**
     * The ID of the volume you want to create a snapshot of.
     * @type {string}
     * @memberof CreateSnapshotRequest
     */
    volumeId?: string;
}
export declare function CreateSnapshotRequestFromJSON(json: any): CreateSnapshotRequest;
export declare function CreateSnapshotRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSnapshotRequest;
export declare function CreateSnapshotRequestToJSON(value?: CreateSnapshotRequest | null): any;
