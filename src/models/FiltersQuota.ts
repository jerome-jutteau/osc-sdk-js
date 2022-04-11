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
 * One or more filters.
 * @export
 * @interface FiltersQuota
 */
export interface FiltersQuota {
    /**
     * The group names of the quotas.
     * @type {Array<string>}
     * @memberof FiltersQuota
     */
    collections?: Array<string>;
    /**
     * The names of the quotas.
     * @type {Array<string>}
     * @memberof FiltersQuota
     */
    quotaNames?: Array<string>;
    /**
     * The resource IDs if these are resource-specific quotas, `global` if they are not.
     * @type {Array<string>}
     * @memberof FiltersQuota
     */
    quotaTypes?: Array<string>;
    /**
     * The description of the quotas.
     * @type {Array<string>}
     * @memberof FiltersQuota
     */
    shortDescriptions?: Array<string>;
}

export function FiltersQuotaFromJSON(json: any): FiltersQuota {
    return FiltersQuotaFromJSONTyped(json, false);
}

export function FiltersQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collections': !exists(json, 'Collections') ? undefined : json['Collections'],
        'quotaNames': !exists(json, 'QuotaNames') ? undefined : json['QuotaNames'],
        'quotaTypes': !exists(json, 'QuotaTypes') ? undefined : json['QuotaTypes'],
        'shortDescriptions': !exists(json, 'ShortDescriptions') ? undefined : json['ShortDescriptions'],
    };
}

export function FiltersQuotaToJSON(value?: FiltersQuota | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Collections': value.collections,
        'QuotaNames': value.quotaNames,
        'QuotaTypes': value.quotaTypes,
        'ShortDescriptions': value.shortDescriptions,
    };
}

