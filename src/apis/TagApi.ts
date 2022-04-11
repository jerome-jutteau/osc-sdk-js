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
import {
    CreateTagsRequest,
    CreateTagsRequestFromJSON,
    CreateTagsRequestToJSON,
    CreateTagsResponse,
    CreateTagsResponseFromJSON,
    CreateTagsResponseToJSON,
    DeleteTagsRequest,
    DeleteTagsRequestFromJSON,
    DeleteTagsRequestToJSON,
    DeleteTagsResponse,
    DeleteTagsResponseFromJSON,
    DeleteTagsResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReadTagsRequest,
    ReadTagsRequestFromJSON,
    ReadTagsRequestToJSON,
    ReadTagsResponse,
    ReadTagsResponseFromJSON,
    ReadTagsResponseToJSON,
} from '../models';

export interface CreateTagsOperationRequest {
    createTagsRequest?: CreateTagsRequest;
}

export interface DeleteTagsOperationRequest {
    deleteTagsRequest?: DeleteTagsRequest;
}

export interface ReadTagsOperationRequest {
    readTagsRequest?: ReadTagsRequest;
}

/**
 * TagApi - interface
 * 
 * @export
 * @interface TagApiInterface
 */
export interface TagApiInterface {
    /**
     * 
     * @param {CreateTagsRequest} [createTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagApiInterface
     */
    createTagsRaw(requestParameters: CreateTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateTagsResponse>>;

    /**
     */
    createTags(requestParameters: CreateTagsOperationRequest, initOverrides?: RequestInit): Promise<CreateTagsResponse>;

    /**
     * 
     * @param {DeleteTagsRequest} [deleteTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagApiInterface
     */
    deleteTagsRaw(requestParameters: DeleteTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteTagsResponse>>;

    /**
     */
    deleteTags(requestParameters: DeleteTagsOperationRequest, initOverrides?: RequestInit): Promise<DeleteTagsResponse>;

    /**
     * 
     * @param {ReadTagsRequest} [readTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagApiInterface
     */
    readTagsRaw(requestParameters: ReadTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadTagsResponse>>;

    /**
     */
    readTags(requestParameters: ReadTagsOperationRequest, initOverrides?: RequestInit): Promise<ReadTagsResponse>;

}

/**
 * 
 */
export class TagApi extends runtime.BaseAPI implements TagApiInterface {

    /**
     */
    async createTagsRaw(requestParameters: CreateTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTagsRequestToJSON(requestParameters.createTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async createTags(requestParameters: CreateTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateTagsResponse> {
        const response = await this.createTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteTagsRaw(requestParameters: DeleteTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteTagsRequestToJSON(requestParameters.deleteTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteTags(requestParameters: DeleteTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteTagsResponse> {
        const response = await this.deleteTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readTagsRaw(requestParameters: ReadTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadTagsRequestToJSON(requestParameters.readTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readTags(requestParameters: ReadTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadTagsResponse> {
        const response = await this.readTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
