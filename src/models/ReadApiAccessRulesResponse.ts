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
 * @interface ReadApiAccessRulesResponse
 */
export interface ReadApiAccessRulesResponse {
    /**
     * A list of API access rules.
     * @type {Array<ApiAccessRule>}
     * @memberof ReadApiAccessRulesResponse
     */
    apiAccessRules?: Array<ApiAccessRule>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadApiAccessRulesResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadApiAccessRulesResponseFromJSON(json: any): ReadApiAccessRulesResponse {
    return ReadApiAccessRulesResponseFromJSONTyped(json, false);
}

export function ReadApiAccessRulesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadApiAccessRulesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiAccessRules': !exists(json, 'ApiAccessRules') ? undefined : ((json['ApiAccessRules'] as Array<any>).map(ApiAccessRuleFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadApiAccessRulesResponseToJSON(value?: ReadApiAccessRulesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApiAccessRules': value.apiAccessRules === undefined ? undefined : ((value.apiAccessRules as Array<any>).map(ApiAccessRuleToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

