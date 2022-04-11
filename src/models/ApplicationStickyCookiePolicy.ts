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
/**
 * Information about the stickiness policy.
 * @export
 * @interface ApplicationStickyCookiePolicy
 */
export interface ApplicationStickyCookiePolicy {
    /**
     * The name of the application cookie used for stickiness.
     * @type {string}
     * @memberof ApplicationStickyCookiePolicy
     */
    cookieName?: string;
    /**
     * The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
     * @type {string}
     * @memberof ApplicationStickyCookiePolicy
     */
    policyName?: string;
}

export function ApplicationStickyCookiePolicyFromJSON(json: any): ApplicationStickyCookiePolicy {
    return ApplicationStickyCookiePolicyFromJSONTyped(json, false);
}

export function ApplicationStickyCookiePolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationStickyCookiePolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cookieName': !exists(json, 'CookieName') ? undefined : json['CookieName'],
        'policyName': !exists(json, 'PolicyName') ? undefined : json['PolicyName'],
    };
}

export function ApplicationStickyCookiePolicyToJSON(value?: ApplicationStickyCookiePolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CookieName': value.cookieName,
        'PolicyName': value.policyName,
    };
}

