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
 * @interface CreateDirectLinkRequest
 */
export interface CreateDirectLinkRequest {
    /**
     * The bandwidth of the DirectLink (`1Gbps` \| `10Gbps`).
     * @type {string}
     * @memberof CreateDirectLinkRequest
     */
    bandwidth: string;
    /**
     * The name of the DirectLink.
     * @type {string}
     * @memberof CreateDirectLinkRequest
     */
    directLinkName: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateDirectLinkRequest
     */
    dryRun?: boolean;
    /**
     * The code of the requested location for the DirectLink, returned by the [ReadLocations](#readlocations) method.
     * @type {string}
     * @memberof CreateDirectLinkRequest
     */
    location: string;
}

export function CreateDirectLinkRequestFromJSON(json: any): CreateDirectLinkRequest {
    return CreateDirectLinkRequestFromJSONTyped(json, false);
}

export function CreateDirectLinkRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDirectLinkRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bandwidth': json['Bandwidth'],
        'directLinkName': json['DirectLinkName'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'location': json['Location'],
    };
}

export function CreateDirectLinkRequestToJSON(value?: CreateDirectLinkRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Bandwidth': value.bandwidth,
        'DirectLinkName': value.directLinkName,
        'DryRun': value.dryRun,
        'Location': value.location,
    };
}

