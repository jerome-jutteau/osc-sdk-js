"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageExportTaskToJSON = exports.ImageExportTaskFromJSONTyped = exports.ImageExportTaskFromJSON = void 0;
const runtime_1 = require("../runtime");
const OsuExportImageExportTask_1 = require("./OsuExportImageExportTask");
const ResourceTag_1 = require("./ResourceTag");
function ImageExportTaskFromJSON(json) {
    return ImageExportTaskFromJSONTyped(json, false);
}
exports.ImageExportTaskFromJSON = ImageExportTaskFromJSON;
function ImageExportTaskFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comment': !runtime_1.exists(json, 'Comment') ? undefined : json['Comment'],
        'imageId': !runtime_1.exists(json, 'ImageId') ? undefined : json['ImageId'],
        'osuExport': !runtime_1.exists(json, 'OsuExport') ? undefined : OsuExportImageExportTask_1.OsuExportImageExportTaskFromJSON(json['OsuExport']),
        'progress': !runtime_1.exists(json, 'Progress') ? undefined : json['Progress'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
        'taskId': !runtime_1.exists(json, 'TaskId') ? undefined : json['TaskId'],
    };
}
exports.ImageExportTaskFromJSONTyped = ImageExportTaskFromJSONTyped;
function ImageExportTaskToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Comment': value.comment,
        'ImageId': value.imageId,
        'OsuExport': OsuExportImageExportTask_1.OsuExportImageExportTaskToJSON(value.osuExport),
        'Progress': value.progress,
        'State': value.state,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
        'TaskId': value.taskId,
    };
}
exports.ImageExportTaskToJSON = ImageExportTaskToJSON;
