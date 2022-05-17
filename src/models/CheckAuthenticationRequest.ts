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
 * 
 * @export
 * @interface CheckAuthenticationRequest
 */
export interface CheckAuthenticationRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CheckAuthenticationRequest
     */
    dryRun?: boolean;
    /**
     * The email address of the account.
     * @type {string}
     * @memberof CheckAuthenticationRequest
     */
    login: string;
    /**
     * The password of the account.
     * @type {string}
     * @memberof CheckAuthenticationRequest
     */
    password: string;
}

export function CheckAuthenticationRequestFromJSON(json: any): CheckAuthenticationRequest {
    return CheckAuthenticationRequestFromJSONTyped(json, false);
}

export function CheckAuthenticationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckAuthenticationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'login': json['Login'],
        'password': json['Password'],
    };
}

export function CheckAuthenticationRequestToJSON(value?: CheckAuthenticationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'Login': value.login,
        'Password': value.password,
    };
}

