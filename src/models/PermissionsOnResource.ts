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
 * Information about the users who have permissions for the resource.
 * @export
 * @interface PermissionsOnResource
 */
export interface PermissionsOnResource {
    /**
     * The account ID of one or more users who have permissions for the resource.
     * @type {Array<string>}
     * @memberof PermissionsOnResource
     */
    accountIds?: Array<string>;
    /**
     * If true, the resource is public. If false, the resource is private.
     * @type {boolean}
     * @memberof PermissionsOnResource
     */
    globalPermission?: boolean;
}

export function PermissionsOnResourceFromJSON(json: any): PermissionsOnResource {
    return PermissionsOnResourceFromJSONTyped(json, false);
}

export function PermissionsOnResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionsOnResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountIds': !exists(json, 'AccountIds') ? undefined : json['AccountIds'],
        'globalPermission': !exists(json, 'GlobalPermission') ? undefined : json['GlobalPermission'],
    };
}

export function PermissionsOnResourceToJSON(value?: PermissionsOnResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountIds': value.accountIds,
        'GlobalPermission': value.globalPermission,
    };
}

