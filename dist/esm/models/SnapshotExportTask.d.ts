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
import { OsuExportSnapshotExportTask } from './OsuExportSnapshotExportTask';
import { ResourceTag } from './ResourceTag';
/**
 * Information about the snapshot export task.
 * @export
 * @interface SnapshotExportTask
 */
export interface SnapshotExportTask {
    /**
     * If the snapshot export task fails, an error message appears.
     * @type {string}
     * @memberof SnapshotExportTask
     */
    comment?: string;
    /**
     *
     * @type {OsuExportSnapshotExportTask}
     * @memberof SnapshotExportTask
     */
    osuExport?: OsuExportSnapshotExportTask;
    /**
     * The progress of the snapshot export task, as a percentage.
     * @type {number}
     * @memberof SnapshotExportTask
     */
    progress?: number;
    /**
     * The ID of the snapshot to be exported.
     * @type {string}
     * @memberof SnapshotExportTask
     */
    snapshotId?: string;
    /**
     * The state of the snapshot export task (`pending` \| `active` \| `completed` \| `failed`).
     * @type {string}
     * @memberof SnapshotExportTask
     */
    state?: string;
    /**
     * One or more tags associated with the snapshot export task.
     * @type {Array<ResourceTag>}
     * @memberof SnapshotExportTask
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the snapshot export task.
     * @type {string}
     * @memberof SnapshotExportTask
     */
    taskId?: string;
}
export declare function SnapshotExportTaskFromJSON(json: any): SnapshotExportTask;
export declare function SnapshotExportTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): SnapshotExportTask;
export declare function SnapshotExportTaskToJSON(value?: SnapshotExportTask | null): any;
