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
 * @interface FiltersServerCertificate
 */
export interface FiltersServerCertificate {
    /**
     * The paths to the server certificates.
     * @type {Array<string>}
     * @memberof FiltersServerCertificate
     */
    paths?: Array<string>;
}

export function FiltersServerCertificateFromJSON(json: any): FiltersServerCertificate {
    return FiltersServerCertificateFromJSONTyped(json, false);
}

export function FiltersServerCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersServerCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paths': !exists(json, 'Paths') ? undefined : json['Paths'],
    };
}

export function FiltersServerCertificateToJSON(value?: FiltersServerCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Paths': value.paths,
    };
}

