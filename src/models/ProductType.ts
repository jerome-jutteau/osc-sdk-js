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
 * Information about the product type.
 * @export
 * @interface ProductType
 */
export interface ProductType {
    /**
     * The description of the product type.
     * @type {string}
     * @memberof ProductType
     */
    description?: string;
    /**
     * The ID of the product type.
     * @type {string}
     * @memberof ProductType
     */
    productTypeId?: string;
    /**
     * The vendor of the product type.
     * @type {string}
     * @memberof ProductType
     */
    vendor?: string;
}

export function ProductTypeFromJSON(json: any): ProductType {
    return ProductTypeFromJSONTyped(json, false);
}

export function ProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'productTypeId': !exists(json, 'ProductTypeId') ? undefined : json['ProductTypeId'],
        'vendor': !exists(json, 'Vendor') ? undefined : json['Vendor'],
    };
}

export function ProductTypeToJSON(value?: ProductType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Description': value.description,
        'ProductTypeId': value.productTypeId,
        'Vendor': value.vendor,
    };
}

