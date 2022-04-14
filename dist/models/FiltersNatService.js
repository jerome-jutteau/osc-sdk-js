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
import { exists } from '../runtime.js';
export function FiltersNatServiceFromJSON(json) {
    return FiltersNatServiceFromJSONTyped(json, false);
}
export function FiltersNatServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'natServiceIds': !exists(json, 'NatServiceIds') ? undefined : json['NatServiceIds'],
        'netIds': !exists(json, 'NetIds') ? undefined : json['NetIds'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'subnetIds': !exists(json, 'SubnetIds') ? undefined : json['SubnetIds'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
    };
}
export function FiltersNatServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'NatServiceIds': value.natServiceIds,
        'NetIds': value.netIds,
        'States': value.states,
        'SubnetIds': value.subnetIds,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}
