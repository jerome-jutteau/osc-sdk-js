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
    ApiAccessRule,
    ApiAccessRuleFromJSON,
    ApiAccessRuleFromJSONTyped,
    ApiAccessRuleToJSON,
} from './ApiAccessRule';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface CreateApiAccessRuleResponse
 */
export interface CreateApiAccessRuleResponse {
    /**
     * 
     * @type {ApiAccessRule}
     * @memberof CreateApiAccessRuleResponse
     */
    apiAccessRule?: ApiAccessRule;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof CreateApiAccessRuleResponse
     */
    responseContext?: ModelResponseContext;
}

export function CreateApiAccessRuleResponseFromJSON(json: any): CreateApiAccessRuleResponse {
    return CreateApiAccessRuleResponseFromJSONTyped(json, false);
}

export function CreateApiAccessRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApiAccessRuleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiAccessRule': !exists(json, 'ApiAccessRule') ? undefined : ApiAccessRuleFromJSON(json['ApiAccessRule']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function CreateApiAccessRuleResponseToJSON(value?: CreateApiAccessRuleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApiAccessRule': ApiAccessRuleToJSON(value.apiAccessRule),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

