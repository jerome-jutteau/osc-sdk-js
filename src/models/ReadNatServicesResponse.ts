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
 * @interface ReadNatServicesResponse
 */
export interface ReadNatServicesResponse {
    /**
     * Information about one or more NAT services.
     * @type {Array<NatService>}
     * @memberof ReadNatServicesResponse
     */
    natServices?: Array<NatService>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadNatServicesResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadNatServicesResponseFromJSON(json: any): ReadNatServicesResponse {
    return ReadNatServicesResponseFromJSONTyped(json, false);
}

export function ReadNatServicesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadNatServicesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'natServices': !exists(json, 'NatServices') ? undefined : ((json['NatServices'] as Array<any>).map(NatServiceFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadNatServicesResponseToJSON(value?: ReadNatServicesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NatServices': value.natServices === undefined ? undefined : ((value.natServices as Array<any>).map(NatServiceToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

