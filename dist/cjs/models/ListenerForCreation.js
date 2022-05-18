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
exports.ListenerForCreationToJSON = exports.ListenerForCreationFromJSONTyped = exports.ListenerForCreationFromJSON = void 0;
const runtime_1 = require("../runtime");
function ListenerForCreationFromJSON(json) {
    return ListenerForCreationFromJSONTyped(json, false);
}
exports.ListenerForCreationFromJSON = ListenerForCreationFromJSON;
function ListenerForCreationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backendPort': json['BackendPort'],
        'backendProtocol': !runtime_1.exists(json, 'BackendProtocol') ? undefined : json['BackendProtocol'],
        'loadBalancerPort': json['LoadBalancerPort'],
        'loadBalancerProtocol': json['LoadBalancerProtocol'],
        'serverCertificateId': !runtime_1.exists(json, 'ServerCertificateId') ? undefined : json['ServerCertificateId'],
    };
}
exports.ListenerForCreationFromJSONTyped = ListenerForCreationFromJSONTyped;
function ListenerForCreationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BackendPort': value.backendPort,
        'BackendProtocol': value.backendProtocol,
        'LoadBalancerPort': value.loadBalancerPort,
        'LoadBalancerProtocol': value.loadBalancerProtocol,
        'ServerCertificateId': value.serverCertificateId,
    };
}
exports.ListenerForCreationToJSON = ListenerForCreationToJSON;
