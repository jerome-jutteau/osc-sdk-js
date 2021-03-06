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
    NatService,
    NatServiceFromJSON,
    NatServiceFromJSONTyped,
    NatServiceToJSON,
} from './NatService';

/**
 * 
 * @export
 * @interface CreateNatServiceResponse
 */
export interface CreateNatServiceResponse {
    /**
     * 
     * @type {NatService}
     * @memberof CreateNatServiceResponse
     */
    natService?: NatService;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof CreateNatServiceResponse
     */
    responseContext?: ModelResponseContext;
}

export function CreateNatServiceResponseFromJSON(json: any): CreateNatServiceResponse {
    return CreateNatServiceResponseFromJSONTyped(json, false);
}

export function CreateNatServiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNatServiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'natService': !exists(json, 'NatService') ? undefined : NatServiceFromJSON(json['NatService']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function CreateNatServiceResponseToJSON(value?: CreateNatServiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NatService': NatServiceToJSON(value.natService),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

