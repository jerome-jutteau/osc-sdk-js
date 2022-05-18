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
import { exists } from '../runtime';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag';
import { RouteLightFromJSON, RouteLightToJSON, } from './RouteLight';
import { VgwTelemetryFromJSON, VgwTelemetryToJSON, } from './VgwTelemetry';
import { VpnOptionsFromJSON, VpnOptionsToJSON, } from './VpnOptions';
export function VpnConnectionFromJSON(json) {
    return VpnConnectionFromJSONTyped(json, false);
}
export function VpnConnectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientGatewayConfiguration': !exists(json, 'ClientGatewayConfiguration') ? undefined : json['ClientGatewayConfiguration'],
        'clientGatewayId': !exists(json, 'ClientGatewayId') ? undefined : json['ClientGatewayId'],
        'connectionType': !exists(json, 'ConnectionType') ? undefined : json['ConnectionType'],
        'routes': !exists(json, 'Routes') ? undefined : (json['Routes'].map(RouteLightFromJSON)),
        'state': !exists(json, 'State') ? undefined : json['State'],
        'staticRoutesOnly': !exists(json, 'StaticRoutesOnly') ? undefined : json['StaticRoutesOnly'],
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
        'vgwTelemetries': !exists(json, 'VgwTelemetries') ? undefined : (json['VgwTelemetries'].map(VgwTelemetryFromJSON)),
        'virtualGatewayId': !exists(json, 'VirtualGatewayId') ? undefined : json['VirtualGatewayId'],
        'vpnConnectionId': !exists(json, 'VpnConnectionId') ? undefined : json['VpnConnectionId'],
        'vpnOptions': !exists(json, 'VpnOptions') ? undefined : VpnOptionsFromJSON(json['VpnOptions']),
    };
}
export function VpnConnectionToJSON(value) {
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
        'Routes': value.routes === undefined ? undefined : (value.routes.map(RouteLightToJSON)),
        'State': value.state,
        'StaticRoutesOnly': value.staticRoutesOnly,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
        'VgwTelemetries': value.vgwTelemetries === undefined ? undefined : (value.vgwTelemetries.map(VgwTelemetryToJSON)),
        'VirtualGatewayId': value.virtualGatewayId,
        'VpnConnectionId': value.vpnConnectionId,
        'VpnOptions': VpnOptionsToJSON(value.vpnOptions),
    };
}
