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
import { CreateKeypairRequestToJSON, CreateKeypairResponseFromJSON, DeleteKeypairRequestToJSON, DeleteKeypairResponseFromJSON, ReadKeypairsRequestToJSON, ReadKeypairsResponseFromJSON, } from '../models';
/**
 *
 */
export class KeypairApi extends runtime.BaseAPI {
    /**
     */
    async createKeypairRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/CreateKeypair`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateKeypairRequestToJSON(requestParameters.createKeypairRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CreateKeypairResponseFromJSON(jsonValue));
    }
    /**
     */
    async createKeypair(requestParameters = {}, initOverrides) {
        const response = await this.createKeypairRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async deleteKeypairRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/DeleteKeypair`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteKeypairRequestToJSON(requestParameters.deleteKeypairRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteKeypairResponseFromJSON(jsonValue));
    }
    /**
     */
    async deleteKeypair(requestParameters = {}, initOverrides) {
        const response = await this.deleteKeypairRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async readKeypairsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/ReadKeypairs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadKeypairsRequestToJSON(requestParameters.readKeypairsRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReadKeypairsResponseFromJSON(jsonValue));
    }
    /**
     */
    async readKeypairs(requestParameters = {}, initOverrides) {
        const response = await this.readKeypairsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
