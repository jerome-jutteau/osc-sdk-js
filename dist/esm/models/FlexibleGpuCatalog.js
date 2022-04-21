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
export function FlexibleGpuCatalogFromJSON(json) {
    return FlexibleGpuCatalogFromJSONTyped(json, false);
}
export function FlexibleGpuCatalogFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'generations': !exists(json, 'Generations') ? undefined : json['Generations'],
        'maxCpu': !exists(json, 'MaxCpu') ? undefined : json['MaxCpu'],
        'maxRam': !exists(json, 'MaxRam') ? undefined : json['MaxRam'],
        'modelName': !exists(json, 'ModelName') ? undefined : json['ModelName'],
        'vRam': !exists(json, 'VRam') ? undefined : json['VRam'],
    };
}
export function FlexibleGpuCatalogToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Generations': value.generations,
        'MaxCpu': value.maxCpu,
        'MaxRam': value.maxRam,
        'ModelName': value.modelName,
        'VRam': value.vRam,
    };
}