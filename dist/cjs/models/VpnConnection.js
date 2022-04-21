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
exports.VpnConnectionToJSON = exports.VpnConnectionFromJSONTyped = exports.VpnConnectionFromJSON = void 0;
const runtime_1 = require("../runtime");
const ResourceTag_1 = require("./ResourceTag");
const RouteLight_1 = require("./RouteLight");
const VpnOptions_1 = require("./VpnOptions");
function VpnConnectionFromJSON(json) {
    return VpnConnectionFromJSONTyped(json, false);
}
exports.VpnConnectionFromJSON = VpnConnectionFromJSON;
function VpnConnectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientGatewayConfiguration': !(0, runtime_1.exists)(json, 'ClientGatewayConfiguration') ? undefined : json['ClientGatewayConfiguration'],
        'clientGatewayId': !(0, runtime_1.exists)(json, 'ClientGatewayId') ? undefined : json['ClientGatewayId'],
        'connectionType': !(0, runtime_1.exists)(json, 'ConnectionType') ? undefined : json['ConnectionType'],
        'routes': !(0, runtime_1.exists)(json, 'Routes') ? undefined : (json['Routes'].map(RouteLight_1.RouteLightFromJSON)),
        'state': !(0, runtime_1.exists)(json, 'State') ? undefined : json['State'],
        'staticRoutesOnly': !(0, runtime_1.exists)(json, 'StaticRoutesOnly') ? undefined : json['StaticRoutesOnly'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
        'virtualGatewayId': !(0, runtime_1.exists)(json, 'VirtualGatewayId') ? undefined : json['VirtualGatewayId'],
        'vpnConnectionId': !(0, runtime_1.exists)(json, 'VpnConnectionId') ? undefined : json['VpnConnectionId'],
        'vpnOptions': !(0, runtime_1.exists)(json, 'VpnOptions') ? undefined : (0, VpnOptions_1.VpnOptionsFromJSON)(json['VpnOptions']),
    };
}
exports.VpnConnectionFromJSONTyped = VpnConnectionFromJSONTyped;
function VpnConnectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ClientGatewayConfiguration': value.clientGatewayConfiguration,
        'ClientGatewayId': value.clientGatewayId,
        'ConnectionType': value.connectionType,
        'Routes': value.routes === undefined ? undefined : (value.routes.map(RouteLight_1.RouteLightToJSON)),
        'State': value.state,
        'StaticRoutesOnly': value.staticRoutesOnly,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
        'VirtualGatewayId': value.virtualGatewayId,
        'VpnConnectionId': value.vpnConnectionId,
        'VpnOptions': (0, VpnOptions_1.VpnOptionsToJSON)(value.vpnOptions),
    };
}
exports.VpnConnectionToJSON = VpnConnectionToJSON;
