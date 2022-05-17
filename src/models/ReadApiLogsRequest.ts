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
import {
    FiltersApiLog,
    FiltersApiLogFromJSON,
    FiltersApiLogFromJSONTyped,
    FiltersApiLogToJSON,
} from './FiltersApiLog';
import {
    With,
    WithFromJSON,
    WithFromJSONTyped,
    WithToJSON,
} from './With';

/**
 * 
 * @export
 * @interface ReadApiLogsRequest
 */
export interface ReadApiLogsRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadApiLogsRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {FiltersApiLog}
     * @memberof ReadApiLogsRequest
     */
    filters?: FiltersApiLog;
    /**
     * The token to request the next page of results.
     * @type {string}
     * @memberof ReadApiLogsRequest
     */
    nextPageToken?: string;
    /**
     * The maximum number of logs returned in a single response (between `1`and `1000`, both included). By default, `100`.
     * @type {number}
     * @memberof ReadApiLogsRequest
     */
    resultsPerPage?: number;
    /**
     * 
     * @type {With}
     * @memberof ReadApiLogsRequest
     */
    _with?: With;
}

export function ReadApiLogsRequestFromJSON(json: any): ReadApiLogsRequest {
    return ReadApiLogsRequestFromJSONTyped(json, false);
}

export function ReadApiLogsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadApiLogsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !exists(json, 'Filters') ? undefined : FiltersApiLogFromJSON(json['Filters']),
        'nextPageToken': !exists(json, 'NextPageToken') ? undefined : json['NextPageToken'],
        'resultsPerPage': !exists(json, 'ResultsPerPage') ? undefined : json['ResultsPerPage'],
        '_with': !exists(json, 'With') ? undefined : WithFromJSON(json['With']),
    };
}

export function ReadApiLogsRequestToJSON(value?: ReadApiLogsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'Filters': FiltersApiLogToJSON(value.filters),
        'NextPageToken': value.nextPageToken,
        'ResultsPerPage': value.resultsPerPage,
        'With': WithToJSON(value._with),
    };
}

