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
import {
    FiltersAccessKeys,
    FiltersAccessKeysFromJSON,
    FiltersAccessKeysFromJSONTyped,
    FiltersAccessKeysToJSON,
} from './FiltersAccessKeys';

/**
 * 
 * @export
 * @interface ReadAccessKeysRequest
 */
export interface ReadAccessKeysRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadAccessKeysRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {FiltersAccessKeys}
     * @memberof ReadAccessKeysRequest
     */
    filters?: FiltersAccessKeys;
}

export function ReadAccessKeysRequestFromJSON(json: any): ReadAccessKeysRequest {
    return ReadAccessKeysRequestFromJSONTyped(json, false);
}

export function ReadAccessKeysRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadAccessKeysRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !exists(json, 'Filters') ? undefined : FiltersAccessKeysFromJSON(json['Filters']),
    };
}

export function ReadAccessKeysRequestToJSON(value?: ReadAccessKeysRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'Filters': FiltersAccessKeysToJSON(value.filters),
    };
}

