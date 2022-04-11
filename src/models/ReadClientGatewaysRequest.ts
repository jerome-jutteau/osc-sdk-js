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
    FiltersClientGateway,
    FiltersClientGatewayFromJSON,
    FiltersClientGatewayFromJSONTyped,
    FiltersClientGatewayToJSON,
} from './FiltersClientGateway';

/**
 * 
 * @export
 * @interface ReadClientGatewaysRequest
 */
export interface ReadClientGatewaysRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadClientGatewaysRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {FiltersClientGateway}
     * @memberof ReadClientGatewaysRequest
     */
    filters?: FiltersClientGateway;
}

export function ReadClientGatewaysRequestFromJSON(json: any): ReadClientGatewaysRequest {
    return ReadClientGatewaysRequestFromJSONTyped(json, false);
}

export function ReadClientGatewaysRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadClientGatewaysRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !exists(json, 'Filters') ? undefined : FiltersClientGatewayFromJSON(json['Filters']),
    };
}

export function ReadClientGatewaysRequestToJSON(value?: ReadClientGatewaysRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'Filters': FiltersClientGatewayToJSON(value.filters),
    };
}

