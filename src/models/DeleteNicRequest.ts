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
 * @interface DeleteNicRequest
 */
export interface DeleteNicRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteNicRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the NIC you want to delete.
     * @type {string}
     * @memberof DeleteNicRequest
     */
    nicId: string;
}

export function DeleteNicRequestFromJSON(json: any): DeleteNicRequest {
    return DeleteNicRequestFromJSONTyped(json, false);
}

export function DeleteNicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteNicRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'nicId': json['NicId'],
    };
}

export function DeleteNicRequestToJSON(value?: DeleteNicRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'NicId': value.nicId,
    };
}

