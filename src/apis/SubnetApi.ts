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
    CreateSubnetRequest,
    CreateSubnetRequestFromJSON,
    CreateSubnetRequestToJSON,
    CreateSubnetResponse,
    CreateSubnetResponseFromJSON,
    CreateSubnetResponseToJSON,
    DeleteSubnetRequest,
    DeleteSubnetRequestFromJSON,
    DeleteSubnetRequestToJSON,
    DeleteSubnetResponse,
    DeleteSubnetResponseFromJSON,
    DeleteSubnetResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReadSubnetsRequest,
    ReadSubnetsRequestFromJSON,
    ReadSubnetsRequestToJSON,
    ReadSubnetsResponse,
    ReadSubnetsResponseFromJSON,
    ReadSubnetsResponseToJSON,
    UpdateSubnetRequest,
    UpdateSubnetRequestFromJSON,
    UpdateSubnetRequestToJSON,
    UpdateSubnetResponse,
    UpdateSubnetResponseFromJSON,
    UpdateSubnetResponseToJSON,
} from '../models';

export interface CreateSubnetOperationRequest {
    createSubnetRequest?: CreateSubnetRequest;
}

export interface DeleteSubnetOperationRequest {
    deleteSubnetRequest?: DeleteSubnetRequest;
}

export interface ReadSubnetsOperationRequest {
    readSubnetsRequest?: ReadSubnetsRequest;
}

export interface UpdateSubnetOperationRequest {
    updateSubnetRequest?: UpdateSubnetRequest;
}

/**
 * SubnetApi - interface
 * 
 * @export
 * @interface SubnetApiInterface
 */
export interface SubnetApiInterface {
    /**
     * 
     * @param {CreateSubnetRequest} [createSubnetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    createSubnetRaw(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSubnetResponse>>;

    /**
     */
    createSubnet(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<CreateSubnetResponse>;

    /**
     * 
     * @param {DeleteSubnetRequest} [deleteSubnetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    deleteSubnetRaw(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSubnetResponse>>;

    /**
     */
    deleteSubnet(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<DeleteSubnetResponse>;

    /**
     * 
     * @param {ReadSubnetsRequest} [readSubnetsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    readSubnetsRaw(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSubnetsResponse>>;

    /**
     */
    readSubnets(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<ReadSubnetsResponse>;

    /**
     * 
     * @param {UpdateSubnetRequest} [updateSubnetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    updateSubnetRaw(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateSubnetResponse>>;

    /**
     */
    updateSubnet(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<UpdateSubnetResponse>;

}

/**
 * 
 */
export class SubnetApi extends runtime.BaseAPI implements SubnetApiInterface {

    /**
     */
    async createSubnetRaw(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSubnetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateSubnet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSubnetRequestToJSON(requestParameters.createSubnetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSubnetResponseFromJSON(jsonValue));
    }

    /**
     */
    async createSubnet(requestParameters: CreateSubnetOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateSubnetResponse> {
        const response = await this.createSubnetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteSubnetRaw(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSubnetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteSubnet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteSubnetRequestToJSON(requestParameters.deleteSubnetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteSubnetResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteSubnet(requestParameters: DeleteSubnetOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteSubnetResponse> {
        const response = await this.deleteSubnetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readSubnetsRaw(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSubnetsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadSubnets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadSubnetsRequestToJSON(requestParameters.readSubnetsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadSubnetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readSubnets(requestParameters: ReadSubnetsOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadSubnetsResponse> {
        const response = await this.readSubnetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateSubnetRaw(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateSubnetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UpdateSubnet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSubnetRequestToJSON(requestParameters.updateSubnetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateSubnetResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateSubnet(requestParameters: UpdateSubnetOperationRequest = {}, initOverrides?: RequestInit): Promise<UpdateSubnetResponse> {
        const response = await this.updateSubnetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
