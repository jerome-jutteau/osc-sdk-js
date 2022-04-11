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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LinkVirtualGatewayRequest
 */
export interface LinkVirtualGatewayRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof LinkVirtualGatewayRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Net to which you want to attach the virtual gateway.
     * @type {string}
     * @memberof LinkVirtualGatewayRequest
     */
    netId: string;
    /**
     * The ID of the virtual gateway.
     * @type {string}
     * @memberof LinkVirtualGatewayRequest
     */
    virtualGatewayId: string;
}

export function LinkVirtualGatewayRequestFromJSON(json: any): LinkVirtualGatewayRequest {
    return LinkVirtualGatewayRequestFromJSONTyped(json, false);
}

export function LinkVirtualGatewayRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkVirtualGatewayRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'netId': json['NetId'],
        'virtualGatewayId': json['VirtualGatewayId'],
    };
}

export function LinkVirtualGatewayRequestToJSON(value?: LinkVirtualGatewayRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'NetId': value.netId,
        'VirtualGatewayId': value.virtualGatewayId,
    };
}

