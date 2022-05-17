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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DeleteVpnConnectionRouteRequest
 */
export interface DeleteVpnConnectionRouteRequest {
    /**
     * The network prefix of the route to delete, in CIDR notation (for example, 10.12.0.0/16).
     * @type {string}
     * @memberof DeleteVpnConnectionRouteRequest
     */
    destinationIpRange: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteVpnConnectionRouteRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the target VPN connection of the static route to delete.
     * @type {string}
     * @memberof DeleteVpnConnectionRouteRequest
     */
    vpnConnectionId: string;
}

export function DeleteVpnConnectionRouteRequestFromJSON(json: any): DeleteVpnConnectionRouteRequest {
    return DeleteVpnConnectionRouteRequestFromJSONTyped(json, false);
}

export function DeleteVpnConnectionRouteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteVpnConnectionRouteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationIpRange': json['DestinationIpRange'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'vpnConnectionId': json['VpnConnectionId'],
    };
}

export function DeleteVpnConnectionRouteRequestToJSON(value?: DeleteVpnConnectionRouteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DestinationIpRange': value.destinationIpRange,
        'DryRun': value.dryRun,
        'VpnConnectionId': value.vpnConnectionId,
    };
}

