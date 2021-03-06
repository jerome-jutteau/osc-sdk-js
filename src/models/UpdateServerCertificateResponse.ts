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
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';
import {
    ServerCertificate,
    ServerCertificateFromJSON,
    ServerCertificateFromJSONTyped,
    ServerCertificateToJSON,
} from './ServerCertificate';

/**
 * 
 * @export
 * @interface UpdateServerCertificateResponse
 */
export interface UpdateServerCertificateResponse {
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof UpdateServerCertificateResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * 
     * @type {ServerCertificate}
     * @memberof UpdateServerCertificateResponse
     */
    serverCertificate?: ServerCertificate;
}

export function UpdateServerCertificateResponseFromJSON(json: any): UpdateServerCertificateResponse {
    return UpdateServerCertificateResponseFromJSONTyped(json, false);
}

export function UpdateServerCertificateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateServerCertificateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
        'serverCertificate': !exists(json, 'ServerCertificate') ? undefined : ServerCertificateFromJSON(json['ServerCertificate']),
    };
}

export function UpdateServerCertificateResponseToJSON(value?: UpdateServerCertificateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
        'ServerCertificate': ServerCertificateToJSON(value.serverCertificate),
    };
}

