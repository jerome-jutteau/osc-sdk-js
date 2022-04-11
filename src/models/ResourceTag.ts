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
 * Information about the tag.
 * @export
 * @interface ResourceTag
 */
export interface ResourceTag {
    /**
     * The key of the tag, with a minimum of 1 character.
     * @type {string}
     * @memberof ResourceTag
     */
    key: string;
    /**
     * The value of the tag, between 0 and 255 characters.
     * @type {string}
     * @memberof ResourceTag
     */
    value: string;
}

export function ResourceTagFromJSON(json: any): ResourceTag {
    return ResourceTagFromJSONTyped(json, false);
}

export function ResourceTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['Key'],
        'value': json['Value'],
    };
}

export function ResourceTagToJSON(value?: ResourceTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Key': value.key,
        'Value': value.value,
    };
}

