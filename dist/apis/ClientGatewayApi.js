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
import * as runtime from '../runtime';
import { CreateClientGatewayRequestToJSON, CreateClientGatewayResponseFromJSON, DeleteClientGatewayRequestToJSON, DeleteClientGatewayResponseFromJSON, ReadClientGatewaysRequestToJSON, ReadClientGatewaysResponseFromJSON, } from '../models';
/**
 *
 */
export class ClientGatewayApi extends runtime.BaseAPI {
    /**
     */
    async createClientGatewayRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/CreateClientGateway`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateClientGatewayRequestToJSON(requestParameters.createClientGatewayRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CreateClientGatewayResponseFromJSON(jsonValue));
    }
    /**
     */
    async createClientGateway(requestParameters = {}, initOverrides) {
        const response = await this.createClientGatewayRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async deleteClientGatewayRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/DeleteClientGateway`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteClientGatewayRequestToJSON(requestParameters.deleteClientGatewayRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteClientGatewayResponseFromJSON(jsonValue));
    }
    /**
     */
    async deleteClientGateway(requestParameters = {}, initOverrides) {
        const response = await this.deleteClientGatewayRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async readClientGatewaysRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/ReadClientGateways`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadClientGatewaysRequestToJSON(requestParameters.readClientGatewaysRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReadClientGatewaysResponseFromJSON(jsonValue));
    }
    /**
     */
    async readClientGateways(requestParameters = {}, initOverrides) {
        const response = await this.readClientGatewaysRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
