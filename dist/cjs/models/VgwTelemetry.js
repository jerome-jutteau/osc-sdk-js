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
exports.VgwTelemetryToJSON = exports.VgwTelemetryFromJSONTyped = exports.VgwTelemetryFromJSON = void 0;
const runtime_1 = require("../runtime");
function VgwTelemetryFromJSON(json) {
    return VgwTelemetryFromJSONTyped(json, false);
}
exports.VgwTelemetryFromJSON = VgwTelemetryFromJSON;
function VgwTelemetryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'acceptedRouteCount': !runtime_1.exists(json, 'AcceptedRouteCount') ? undefined : json['AcceptedRouteCount'],
        'lastStateChangeDate': !runtime_1.exists(json, 'LastStateChangeDate') ? undefined : json['LastStateChangeDate'],
        'outsideIpAddress': !runtime_1.exists(json, 'OutsideIpAddress') ? undefined : json['OutsideIpAddress'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
        'stateDescription': !runtime_1.exists(json, 'StateDescription') ? undefined : json['StateDescription'],
    };
}
exports.VgwTelemetryFromJSONTyped = VgwTelemetryFromJSONTyped;
function VgwTelemetryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AcceptedRouteCount': value.acceptedRouteCount,
        'LastStateChangeDate': value.lastStateChangeDate,
        'OutsideIpAddress': value.outsideIpAddress,
        'State': value.state,
        'StateDescription': value.stateDescription,
    };
}
exports.VgwTelemetryToJSON = VgwTelemetryToJSON;
