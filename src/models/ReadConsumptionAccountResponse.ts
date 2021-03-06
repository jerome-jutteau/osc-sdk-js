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
    ConsumptionEntry,
    ConsumptionEntryFromJSON,
    ConsumptionEntryFromJSONTyped,
    ConsumptionEntryToJSON,
} from './ConsumptionEntry';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface ReadConsumptionAccountResponse
 */
export interface ReadConsumptionAccountResponse {
    /**
     * Information about the resources consumed during the specified time period.
     * @type {Array<ConsumptionEntry>}
     * @memberof ReadConsumptionAccountResponse
     */
    consumptionEntries?: Array<ConsumptionEntry>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadConsumptionAccountResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadConsumptionAccountResponseFromJSON(json: any): ReadConsumptionAccountResponse {
    return ReadConsumptionAccountResponseFromJSONTyped(json, false);
}

export function ReadConsumptionAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadConsumptionAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consumptionEntries': !exists(json, 'ConsumptionEntries') ? undefined : ((json['ConsumptionEntries'] as Array<any>).map(ConsumptionEntryFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadConsumptionAccountResponseToJSON(value?: ReadConsumptionAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ConsumptionEntries': value.consumptionEntries === undefined ? undefined : ((value.consumptionEntries as Array<any>).map(ConsumptionEntryToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

