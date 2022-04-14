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
import { exists } from '../runtime';
export function FiltersFlexibleGpuFromJSON(json) {
    return FiltersFlexibleGpuFromJSONTyped(json, false);
}
export function FiltersFlexibleGpuFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deleteOnVmDeletion': !exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'flexibleGpuIds': !exists(json, 'FlexibleGpuIds') ? undefined : json['FlexibleGpuIds'],
        'generations': !exists(json, 'Generations') ? undefined : json['Generations'],
        'modelNames': !exists(json, 'ModelNames') ? undefined : json['ModelNames'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'subregionNames': !exists(json, 'SubregionNames') ? undefined : json['SubregionNames'],
        'vmIds': !exists(json, 'VmIds') ? undefined : json['VmIds'],
    };
}
export function FiltersFlexibleGpuToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'FlexibleGpuIds': value.flexibleGpuIds,
        'Generations': value.generations,
        'ModelNames': value.modelNames,
        'States': value.states,
        'SubregionNames': value.subregionNames,
        'VmIds': value.vmIds,
    };
}
