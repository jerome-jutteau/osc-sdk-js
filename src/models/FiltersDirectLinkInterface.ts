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
 * @interface FiltersDirectLinkInterface
 */
export interface FiltersDirectLinkInterface {
    /**
     * The IDs of the DirectLinks.
     * @type {Array<string>}
     * @memberof FiltersDirectLinkInterface
     */
    directLinkIds?: Array<string>;
    /**
     * The IDs of the DirectLink interfaces.
     * @type {Array<string>}
     * @memberof FiltersDirectLinkInterface
     */
    directLinkInterfaceIds?: Array<string>;
}

export function FiltersDirectLinkInterfaceFromJSON(json: any): FiltersDirectLinkInterface {
    return FiltersDirectLinkInterfaceFromJSONTyped(json, false);
}

export function FiltersDirectLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersDirectLinkInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'directLinkIds': !exists(json, 'DirectLinkIds') ? undefined : json['DirectLinkIds'],
        'directLinkInterfaceIds': !exists(json, 'DirectLinkInterfaceIds') ? undefined : json['DirectLinkInterfaceIds'],
    };
}

export function FiltersDirectLinkInterfaceToJSON(value?: FiltersDirectLinkInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DirectLinkIds': value.directLinkIds,
        'DirectLinkInterfaceIds': value.directLinkInterfaceIds,
    };
}

