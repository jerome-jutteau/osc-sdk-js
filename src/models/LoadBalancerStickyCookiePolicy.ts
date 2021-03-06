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
/**
 * Information about the stickiness policy.
 * @export
 * @interface LoadBalancerStickyCookiePolicy
 */
export interface LoadBalancerStickyCookiePolicy {
    /**
     * The time period, in seconds, after which the cookie should be considered stale.<br />
     * If `1`, the stickiness session lasts for the duration of the browser session.
     * @type {number}
     * @memberof LoadBalancerStickyCookiePolicy
     */
    cookieExpirationPeriod?: number;
    /**
     * The name of the stickiness policy.
     * @type {string}
     * @memberof LoadBalancerStickyCookiePolicy
     */
    policyName?: string;
}

export function LoadBalancerStickyCookiePolicyFromJSON(json: any): LoadBalancerStickyCookiePolicy {
    return LoadBalancerStickyCookiePolicyFromJSONTyped(json, false);
}

export function LoadBalancerStickyCookiePolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoadBalancerStickyCookiePolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cookieExpirationPeriod': !exists(json, 'CookieExpirationPeriod') ? undefined : json['CookieExpirationPeriod'],
        'policyName': !exists(json, 'PolicyName') ? undefined : json['PolicyName'],
    };
}

export function LoadBalancerStickyCookiePolicyToJSON(value?: LoadBalancerStickyCookiePolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CookieExpirationPeriod': value.cookieExpirationPeriod,
        'PolicyName': value.policyName,
    };
}

