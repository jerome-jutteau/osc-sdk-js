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
    ClientGateway,
    ClientGatewayFromJSON,
    ClientGatewayFromJSONTyped,
    ClientGatewayToJSON,
} from './ClientGateway';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface CreateClientGatewayResponse
 */
export interface CreateClientGatewayResponse {
    /**
     * 
     * @type {ClientGateway}
     * @memberof CreateClientGatewayResponse
     */
    clientGateway?: ClientGateway;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof CreateClientGatewayResponse
     */
    responseContext?: ModelResponseContext;
}

export function CreateClientGatewayResponseFromJSON(json: any): CreateClientGatewayResponse {
    return CreateClientGatewayResponseFromJSONTyped(json, false);
}

export function CreateClientGatewayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateClientGatewayResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientGateway': !exists(json, 'ClientGateway') ? undefined : ClientGatewayFromJSON(json['ClientGateway']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function CreateClientGatewayResponseToJSON(value?: CreateClientGatewayResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ClientGateway': ClientGatewayToJSON(value.clientGateway),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

