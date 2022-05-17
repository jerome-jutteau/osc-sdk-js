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
    ListenerRule,
    ListenerRuleFromJSON,
    ListenerRuleFromJSONTyped,
    ListenerRuleToJSON,
} from './ListenerRule';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface UpdateListenerRuleResponse
 */
export interface UpdateListenerRuleResponse {
    /**
     * 
     * @type {ListenerRule}
     * @memberof UpdateListenerRuleResponse
     */
    listenerRule?: ListenerRule;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof UpdateListenerRuleResponse
     */
    responseContext?: ModelResponseContext;
}

export function UpdateListenerRuleResponseFromJSON(json: any): UpdateListenerRuleResponse {
    return UpdateListenerRuleResponseFromJSONTyped(json, false);
}

export function UpdateListenerRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateListenerRuleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listenerRule': !exists(json, 'ListenerRule') ? undefined : ListenerRuleFromJSON(json['ListenerRule']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function UpdateListenerRuleResponseToJSON(value?: UpdateListenerRuleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ListenerRule': ListenerRuleToJSON(value.listenerRule),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

