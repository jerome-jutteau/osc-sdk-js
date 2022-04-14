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
import { exists } from '../runtime';
export function UpdateRouteRequestFromJSON(json) {
    return UpdateRouteRequestFromJSONTyped(json, false);
}
export function UpdateRouteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'destinationIpRange': json['DestinationIpRange'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'gatewayId': !exists(json, 'GatewayId') ? undefined : json['GatewayId'],
        'natServiceId': !exists(json, 'NatServiceId') ? undefined : json['NatServiceId'],
        'netPeeringId': !exists(json, 'NetPeeringId') ? undefined : json['NetPeeringId'],
        'nicId': !exists(json, 'NicId') ? undefined : json['NicId'],
        'routeTableId': json['RouteTableId'],
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
    };
}
export function UpdateRouteRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DestinationIpRange': value.destinationIpRange,
        'DryRun': value.dryRun,
        'GatewayId': value.gatewayId,
        'NatServiceId': value.natServiceId,
        'NetPeeringId': value.netPeeringId,
        'NicId': value.nicId,
        'RouteTableId': value.routeTableId,
        'VmId': value.vmId,
    };
}
