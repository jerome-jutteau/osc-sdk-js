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
 * @interface UpdateApiAccessRuleResponse
 */
export interface UpdateApiAccessRuleResponse {
    /**
     * 
     * @type {ApiAccessRule}
     * @memberof UpdateApiAccessRuleResponse
     */
    apiAccessRule?: ApiAccessRule;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof UpdateApiAccessRuleResponse
     */
    responseContext?: ModelResponseContext;
}

export function UpdateApiAccessRuleResponseFromJSON(json: any): UpdateApiAccessRuleResponse {
    return UpdateApiAccessRuleResponseFromJSONTyped(json, false);
}

export function UpdateApiAccessRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiAccessRuleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiAccessRule': !exists(json, 'ApiAccessRule') ? undefined : ApiAccessRuleFromJSON(json['ApiAccessRule']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function UpdateApiAccessRuleResponseToJSON(value?: UpdateApiAccessRuleResponse | null): any {
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

