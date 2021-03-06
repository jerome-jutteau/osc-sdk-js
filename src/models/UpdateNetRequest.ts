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
 * @interface UpdateNetRequest
 */
export interface UpdateNetRequest {
    /**
     * The ID of the DHCP options set (or `default` if you want to associate the default one).
     * @type {string}
     * @memberof UpdateNetRequest
     */
    dhcpOptionsSetId: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateNetRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Net.
     * @type {string}
     * @memberof UpdateNetRequest
     */
    netId: string;
}

export function UpdateNetRequestFromJSON(json: any): UpdateNetRequest {
    return UpdateNetRequestFromJSONTyped(json, false);
}

export function UpdateNetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dhcpOptionsSetId': json['DhcpOptionsSetId'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'netId': json['NetId'],
    };
}

export function UpdateNetRequestToJSON(value?: UpdateNetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DhcpOptionsSetId': value.dhcpOptionsSetId,
        'DryRun': value.dryRun,
        'NetId': value.netId,
    };
}

