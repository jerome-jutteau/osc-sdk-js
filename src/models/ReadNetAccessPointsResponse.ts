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
    NetAccessPoint,
    NetAccessPointFromJSON,
    NetAccessPointFromJSONTyped,
    NetAccessPointToJSON,
} from './NetAccessPoint';

/**
 * 
 * @export
 * @interface ReadNetAccessPointsResponse
 */
export interface ReadNetAccessPointsResponse {
    /**
     * One or more Net access points.
     * @type {Array<NetAccessPoint>}
     * @memberof ReadNetAccessPointsResponse
     */
    netAccessPoints?: Array<NetAccessPoint>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadNetAccessPointsResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadNetAccessPointsResponseFromJSON(json: any): ReadNetAccessPointsResponse {
    return ReadNetAccessPointsResponseFromJSONTyped(json, false);
}

export function ReadNetAccessPointsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadNetAccessPointsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'netAccessPoints': !exists(json, 'NetAccessPoints') ? undefined : ((json['NetAccessPoints'] as Array<any>).map(NetAccessPointFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadNetAccessPointsResponseToJSON(value?: ReadNetAccessPointsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NetAccessPoints': value.netAccessPoints === undefined ? undefined : ((value.netAccessPoints as Array<any>).map(NetAccessPointToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

