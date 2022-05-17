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
 * One or more filters.
 * @export
 * @interface FiltersNet
 */
export interface FiltersNet {
    /**
     * The IDs of the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    dhcpOptionsSetIds?: Array<string>;
    /**
     * The IP ranges for the Nets, in CIDR notation (for example, 10.0.0.0/16).
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    ipRanges?: Array<string>;
    /**
     * If true, the Net used is the default one.
     * @type {boolean}
     * @memberof FiltersNet
     */
    isDefault?: boolean;
    /**
     * The IDs of the Nets.
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    netIds?: Array<string>;
    /**
     * The states of the Nets (`pending` \| `available`).
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    states?: Array<string>;
    /**
     * The keys of the tags associated with the Nets.
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the Nets.
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the Nets, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersNet
     */
    tags?: Array<string>;
}

export function FiltersNetFromJSON(json: any): FiltersNet {
    return FiltersNetFromJSONTyped(json, false);
}

export function FiltersNetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersNet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dhcpOptionsSetIds': !exists(json, 'DhcpOptionsSetIds') ? undefined : json['DhcpOptionsSetIds'],
        'ipRanges': !exists(json, 'IpRanges') ? undefined : json['IpRanges'],
        'isDefault': !exists(json, 'IsDefault') ? undefined : json['IsDefault'],
        'netIds': !exists(json, 'NetIds') ? undefined : json['NetIds'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
    };
}

export function FiltersNetToJSON(value?: FiltersNet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DhcpOptionsSetIds': value.dhcpOptionsSetIds,
        'IpRanges': value.ipRanges,
        'IsDefault': value.isDefault,
        'NetIds': value.netIds,
        'States': value.states,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}

