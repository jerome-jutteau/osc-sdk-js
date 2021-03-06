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
exports.BsuCreatedToJSON = exports.BsuCreatedFromJSONTyped = exports.BsuCreatedFromJSON = void 0;
const runtime_1 = require("../runtime");
function BsuCreatedFromJSON(json) {
    return BsuCreatedFromJSONTyped(json, false);
}
exports.BsuCreatedFromJSON = BsuCreatedFromJSON;
function BsuCreatedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deleteOnVmDeletion': !runtime_1.exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'linkDate': !runtime_1.exists(json, 'LinkDate') ? undefined : (new Date(json['LinkDate'])),
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
        'volumeId': !runtime_1.exists(json, 'VolumeId') ? undefined : json['VolumeId'],
    };
}
exports.BsuCreatedFromJSONTyped = BsuCreatedFromJSONTyped;
function BsuCreatedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'LinkDate': value.linkDate === undefined ? undefined : (value.linkDate.toISOString().substr(0, 10)),
        'State': value.state,
        'VolumeId': value.volumeId,
    };
}
exports.BsuCreatedToJSON = BsuCreatedToJSON;
