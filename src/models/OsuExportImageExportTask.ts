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
 * Information about the OMI export task.
 * @export
 * @interface OsuExportImageExportTask
 */
export interface OsuExportImageExportTask {
    /**
     * The format of the export disk (`qcow2` \| `raw`).
     * @type {string}
     * @memberof OsuExportImageExportTask
     */
    diskImageFormat: string;
    /**
     * The name of the OOS bucket the OMI is exported to.
     * @type {string}
     * @memberof OsuExportImageExportTask
     */
    osuBucket: string;
    /**
     * The URL of the manifest file.
     * @type {string}
     * @memberof OsuExportImageExportTask
     */
    osuManifestUrl?: string;
    /**
     * The prefix for the key of the OOS object corresponding to the image.
     * @type {string}
     * @memberof OsuExportImageExportTask
     */
    osuPrefix?: string;
}

export function OsuExportImageExportTaskFromJSON(json: any): OsuExportImageExportTask {
    return OsuExportImageExportTaskFromJSONTyped(json, false);
}

export function OsuExportImageExportTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): OsuExportImageExportTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'diskImageFormat': json['DiskImageFormat'],
        'osuBucket': json['OsuBucket'],
        'osuManifestUrl': !exists(json, 'OsuManifestUrl') ? undefined : json['OsuManifestUrl'],
        'osuPrefix': !exists(json, 'OsuPrefix') ? undefined : json['OsuPrefix'],
    };
}

export function OsuExportImageExportTaskToJSON(value?: OsuExportImageExportTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DiskImageFormat': value.diskImageFormat,
        'OsuBucket': value.osuBucket,
        'OsuManifestUrl': value.osuManifestUrl,
        'OsuPrefix': value.osuPrefix,
    };
}

