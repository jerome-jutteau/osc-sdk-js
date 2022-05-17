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
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';
import {
    Region,
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
} from './Region';

/**
 * 
 * @export
 * @interface ReadRegionsResponse
 */
export interface ReadRegionsResponse {
    /**
     * Information about one or more Regions.
     * @type {Array<Region>}
     * @memberof ReadRegionsResponse
     */
    regions?: Array<Region>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadRegionsResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadRegionsResponseFromJSON(json: any): ReadRegionsResponse {
    return ReadRegionsResponseFromJSONTyped(json, false);
}

export function ReadRegionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadRegionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regions': !exists(json, 'Regions') ? undefined : ((json['Regions'] as Array<any>).map(RegionFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadRegionsResponseToJSON(value?: ReadRegionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Regions': value.regions === undefined ? undefined : ((value.regions as Array<any>).map(RegionToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

