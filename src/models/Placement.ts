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
 * Information about the placement of the VM.
 * @export
 * @interface Placement
 */
export interface Placement {
    /**
     * The name of the Subregion. If you specify this parameter, you must not specify the `Nics` parameter.
     * @type {string}
     * @memberof Placement
     */
    subregionName?: string;
    /**
     * The tenancy of the VM (`default` \| `dedicated`).
     * @type {string}
     * @memberof Placement
     */
    tenancy?: string;
}

export function PlacementFromJSON(json: any): Placement {
    return PlacementFromJSONTyped(json, false);
}

export function PlacementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Placement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subregionName': !exists(json, 'SubregionName') ? undefined : json['SubregionName'],
        'tenancy': !exists(json, 'Tenancy') ? undefined : json['Tenancy'],
    };
}

export function PlacementToJSON(value?: Placement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SubregionName': value.subregionName,
        'Tenancy': value.tenancy,
    };
}

