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
 * @interface UpdateNetAccessPointResponse
 */
export interface UpdateNetAccessPointResponse {
    /**
     * 
     * @type {NetAccessPoint}
     * @memberof UpdateNetAccessPointResponse
     */
    netAccessPoint?: NetAccessPoint;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof UpdateNetAccessPointResponse
     */
    responseContext?: ModelResponseContext;
}

export function UpdateNetAccessPointResponseFromJSON(json: any): UpdateNetAccessPointResponse {
    return UpdateNetAccessPointResponseFromJSONTyped(json, false);
}

export function UpdateNetAccessPointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNetAccessPointResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'netAccessPoint': !exists(json, 'NetAccessPoint') ? undefined : NetAccessPointFromJSON(json['NetAccessPoint']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function UpdateNetAccessPointResponseToJSON(value?: UpdateNetAccessPointResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NetAccessPoint': NetAccessPointToJSON(value.netAccessPoint),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

