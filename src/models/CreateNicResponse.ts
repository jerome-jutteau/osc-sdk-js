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
    Nic,
    NicFromJSON,
    NicFromJSONTyped,
    NicToJSON,
} from './Nic';

/**
 * 
 * @export
 * @interface CreateNicResponse
 */
export interface CreateNicResponse {
    /**
     * 
     * @type {Nic}
     * @memberof CreateNicResponse
     */
    nic?: Nic;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof CreateNicResponse
     */
    responseContext?: ModelResponseContext;
}

export function CreateNicResponseFromJSON(json: any): CreateNicResponse {
    return CreateNicResponseFromJSONTyped(json, false);
}

export function CreateNicResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNicResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nic': !exists(json, 'Nic') ? undefined : NicFromJSON(json['Nic']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function CreateNicResponseToJSON(value?: CreateNicResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Nic': NicToJSON(value.nic),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

