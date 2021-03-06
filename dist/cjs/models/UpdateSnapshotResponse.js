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
exports.UpdateSnapshotResponseToJSON = exports.UpdateSnapshotResponseFromJSONTyped = exports.UpdateSnapshotResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const ModelResponseContext_1 = require("./ModelResponseContext");
const Snapshot_1 = require("./Snapshot");
function UpdateSnapshotResponseFromJSON(json) {
    return UpdateSnapshotResponseFromJSONTyped(json, false);
}
exports.UpdateSnapshotResponseFromJSON = UpdateSnapshotResponseFromJSON;
function UpdateSnapshotResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'responseContext': !runtime_1.exists(json, 'ResponseContext') ? undefined : ModelResponseContext_1.ModelResponseContextFromJSON(json['ResponseContext']),
        'snapshot': !runtime_1.exists(json, 'Snapshot') ? undefined : Snapshot_1.SnapshotFromJSON(json['Snapshot']),
    };
}
exports.UpdateSnapshotResponseFromJSONTyped = UpdateSnapshotResponseFromJSONTyped;
function UpdateSnapshotResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ResponseContext': ModelResponseContext_1.ModelResponseContextToJSON(value.responseContext),
        'Snapshot': Snapshot_1.SnapshotToJSON(value.snapshot),
    };
}
exports.UpdateSnapshotResponseToJSON = UpdateSnapshotResponseToJSON;
