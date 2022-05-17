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
    VmStates,
    VmStatesFromJSON,
    VmStatesFromJSONTyped,
    VmStatesToJSON,
} from './VmStates';

/**
 * 
 * @export
 * @interface ReadVmsStateResponse
 */
export interface ReadVmsStateResponse {
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadVmsStateResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * Information about one or more VM states.
     * @type {Array<VmStates>}
     * @memberof ReadVmsStateResponse
     */
    vmStates?: Array<VmStates>;
}

export function ReadVmsStateResponseFromJSON(json: any): ReadVmsStateResponse {
    return ReadVmsStateResponseFromJSONTyped(json, false);
}

export function ReadVmsStateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadVmsStateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
        'vmStates': !exists(json, 'VmStates') ? undefined : ((json['VmStates'] as Array<any>).map(VmStatesFromJSON)),
    };
}

export function ReadVmsStateResponseToJSON(value?: ReadVmsStateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
        'VmStates': value.vmStates === undefined ? undefined : ((value.vmStates as Array<any>).map(VmStatesToJSON)),
    };
}

