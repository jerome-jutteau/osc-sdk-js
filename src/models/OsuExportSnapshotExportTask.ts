/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Information about the snapshot export task.
 * @export
 * @interface OsuExportSnapshotExportTask
 */
export interface OsuExportSnapshotExportTask {
    /**
     * The format of the export disk (`qcow2` \| `raw`).
     * @type {string}
     * @memberof OsuExportSnapshotExportTask
     */
    diskImageFormat: string;
    /**
     * The name of the OOS bucket the snapshot is exported to.
     * @type {string}
     * @memberof OsuExportSnapshotExportTask
     */
    osuBucket: string;
    /**
     * The prefix for the key of the OOS object corresponding to the snapshot.
     * @type {string}
     * @memberof OsuExportSnapshotExportTask
     */
    osuPrefix?: string;
}

export function OsuExportSnapshotExportTaskFromJSON(json: any): OsuExportSnapshotExportTask {
    return OsuExportSnapshotExportTaskFromJSONTyped(json, false);
}

export function OsuExportSnapshotExportTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): OsuExportSnapshotExportTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'diskImageFormat': json['DiskImageFormat'],
        'osuBucket': json['OsuBucket'],
        'osuPrefix': !exists(json, 'OsuPrefix') ? undefined : json['OsuPrefix'],
    };
}

export function OsuExportSnapshotExportTaskToJSON(value?: OsuExportSnapshotExportTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DiskImageFormat': value.diskImageFormat,
        'OsuBucket': value.osuBucket,
        'OsuPrefix': value.osuPrefix,
    };
}

