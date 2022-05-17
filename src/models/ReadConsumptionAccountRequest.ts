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
 * @interface ReadConsumptionAccountRequest
 */
export interface ReadConsumptionAccountRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadConsumptionAccountRequest
     */
    dryRun?: boolean;
    /**
     * The beginning of the time period, in ISO 8601 date-time format (for example, `2017-06-14` or `2017-06-14T00:00:00Z`).
     * @type {string}
     * @memberof ReadConsumptionAccountRequest
     */
    fromDate: string;
    /**
     * The end of the time period, in ISO 8601 date-time format (for example, `2017-06-30` or `2017-06-30T00:00:00Z`).
     * @type {string}
     * @memberof ReadConsumptionAccountRequest
     */
    toDate: string;
}

export function ReadConsumptionAccountRequestFromJSON(json: any): ReadConsumptionAccountRequest {
    return ReadConsumptionAccountRequestFromJSONTyped(json, false);
}

export function ReadConsumptionAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadConsumptionAccountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'fromDate': json['FromDate'],
        'toDate': json['ToDate'],
    };
}

export function ReadConsumptionAccountRequestToJSON(value?: ReadConsumptionAccountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'FromDate': value.fromDate,
        'ToDate': value.toDate,
    };
}

