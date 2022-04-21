"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadServerCertificatesResponseToJSON = exports.ReadServerCertificatesResponseFromJSONTyped = exports.ReadServerCertificatesResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const ModelResponseContext_1 = require("./ModelResponseContext");
const ServerCertificate_1 = require("./ServerCertificate");
function ReadServerCertificatesResponseFromJSON(json) {
    return ReadServerCertificatesResponseFromJSONTyped(json, false);
}
exports.ReadServerCertificatesResponseFromJSON = ReadServerCertificatesResponseFromJSON;
function ReadServerCertificatesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'responseContext': !(0, runtime_1.exists)(json, 'ResponseContext') ? undefined : (0, ModelResponseContext_1.ModelResponseContextFromJSON)(json['ResponseContext']),
        'serverCertificates': !(0, runtime_1.exists)(json, 'ServerCertificates') ? undefined : (json['ServerCertificates'].map(ServerCertificate_1.ServerCertificateFromJSON)),
    };
}
exports.ReadServerCertificatesResponseFromJSONTyped = ReadServerCertificatesResponseFromJSONTyped;
function ReadServerCertificatesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ResponseContext': (0, ModelResponseContext_1.ModelResponseContextToJSON)(value.responseContext),
        'ServerCertificates': value.serverCertificates === undefined ? undefined : (value.serverCertificates.map(ServerCertificate_1.ServerCertificateToJSON)),
    };
}
exports.ReadServerCertificatesResponseToJSON = ReadServerCertificatesResponseToJSON;
