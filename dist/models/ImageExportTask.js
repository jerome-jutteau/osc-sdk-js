/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime.js';
import { OsuExportImageExportTaskFromJSON, OsuExportImageExportTaskToJSON, } from './OsuExportImageExportTask.js';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag.js';
export function ImageExportTaskFromJSON(json) {
    return ImageExportTaskFromJSONTyped(json, false);
}
export function ImageExportTaskFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comment': !exists(json, 'Comment') ? undefined : json['Comment'],
        'imageId': !exists(json, 'ImageId') ? undefined : json['ImageId'],
        'osuExport': !exists(json, 'OsuExport') ? undefined : OsuExportImageExportTaskFromJSON(json['OsuExport']),
        'progress': !exists(json, 'Progress') ? undefined : json['Progress'],
        'state': !exists(json, 'State') ? undefined : json['State'],
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
        'taskId': !exists(json, 'TaskId') ? undefined : json['TaskId'],
    };
}
export function ImageExportTaskToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Comment': value.comment,
        'ImageId': value.imageId,
        'OsuExport': OsuExportImageExportTaskToJSON(value.osuExport),
        'Progress': value.progress,
        'State': value.state,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
        'TaskId': value.taskId,
    };
}
