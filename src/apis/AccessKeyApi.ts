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
    CreateAccessKeyRequest,
    CreateAccessKeyRequestFromJSON,
    CreateAccessKeyRequestToJSON,
    CreateAccessKeyResponse,
    CreateAccessKeyResponseFromJSON,
    CreateAccessKeyResponseToJSON,
    DeleteAccessKeyRequest,
    DeleteAccessKeyRequestFromJSON,
    DeleteAccessKeyRequestToJSON,
    DeleteAccessKeyResponse,
    DeleteAccessKeyResponseFromJSON,
    DeleteAccessKeyResponseToJSON,
    ReadAccessKeysRequest,
    ReadAccessKeysRequestFromJSON,
    ReadAccessKeysRequestToJSON,
    ReadAccessKeysResponse,
    ReadAccessKeysResponseFromJSON,
    ReadAccessKeysResponseToJSON,
    ReadSecretAccessKeyRequest,
    ReadSecretAccessKeyRequestFromJSON,
    ReadSecretAccessKeyRequestToJSON,
    ReadSecretAccessKeyResponse,
    ReadSecretAccessKeyResponseFromJSON,
    ReadSecretAccessKeyResponseToJSON,
    UpdateAccessKeyRequest,
    UpdateAccessKeyRequestFromJSON,
    UpdateAccessKeyRequestToJSON,
    UpdateAccessKeyResponse,
    UpdateAccessKeyResponseFromJSON,
    UpdateAccessKeyResponseToJSON,
} from '../models';

export interface CreateAccessKeyOperationRequest {
    createAccessKeyRequest?: CreateAccessKeyRequest;
}

export interface DeleteAccessKeyOperationRequest {
    deleteAccessKeyRequest?: DeleteAccessKeyRequest;
}

export interface ReadAccessKeysOperationRequest {
    readAccessKeysRequest?: ReadAccessKeysRequest;
}

export interface ReadSecretAccessKeyOperationRequest {
    readSecretAccessKeyRequest?: ReadSecretAccessKeyRequest;
}

export interface UpdateAccessKeyOperationRequest {
    updateAccessKeyRequest?: UpdateAccessKeyRequest;
}

/**
 * AccessKeyApi - interface
 * 
 * @export
 * @interface AccessKeyApiInterface
 */
export interface AccessKeyApiInterface {
    /**
     * 
     * @param {CreateAccessKeyRequest} [createAccessKeyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyApiInterface
     */
    createAccessKeyRaw(requestParameters: CreateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateAccessKeyResponse>>;

    /**
     */
    createAccessKey(requestParameters: CreateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<CreateAccessKeyResponse>;

    /**
     * 
     * @param {DeleteAccessKeyRequest} [deleteAccessKeyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyApiInterface
     */
    deleteAccessKeyRaw(requestParameters: DeleteAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteAccessKeyResponse>>;

    /**
     */
    deleteAccessKey(requestParameters: DeleteAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<DeleteAccessKeyResponse>;

    /**
     * 
     * @param {ReadAccessKeysRequest} [readAccessKeysRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyApiInterface
     */
    readAccessKeysRaw(requestParameters: ReadAccessKeysOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadAccessKeysResponse>>;

    /**
     */
    readAccessKeys(requestParameters: ReadAccessKeysOperationRequest, initOverrides?: RequestInit): Promise<ReadAccessKeysResponse>;

    /**
     * 
     * @param {ReadSecretAccessKeyRequest} [readSecretAccessKeyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyApiInterface
     */
    readSecretAccessKeyRaw(requestParameters: ReadSecretAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSecretAccessKeyResponse>>;

    /**
     */
    readSecretAccessKey(requestParameters: ReadSecretAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<ReadSecretAccessKeyResponse>;

    /**
     * 
     * @param {UpdateAccessKeyRequest} [updateAccessKeyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyApiInterface
     */
    updateAccessKeyRaw(requestParameters: UpdateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateAccessKeyResponse>>;

    /**
     */
    updateAccessKey(requestParameters: UpdateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<UpdateAccessKeyResponse>;

}

/**
 * 
 */
export class AccessKeyApi extends runtime.BaseAPI implements AccessKeyApiInterface {

    /**
     */
    async createAccessKeyRaw(requestParameters: CreateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateAccessKeyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/CreateAccessKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAccessKeyRequestToJSON(requestParameters.createAccessKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccessKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async createAccessKey(requestParameters: CreateAccessKeyOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateAccessKeyResponse> {
        const response = await this.createAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteAccessKeyRaw(requestParameters: DeleteAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteAccessKeyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/DeleteAccessKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteAccessKeyRequestToJSON(requestParameters.deleteAccessKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteAccessKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteAccessKey(requestParameters: DeleteAccessKeyOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteAccessKeyResponse> {
        const response = await this.deleteAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readAccessKeysRaw(requestParameters: ReadAccessKeysOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadAccessKeysResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/ReadAccessKeys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadAccessKeysRequestToJSON(requestParameters.readAccessKeysRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadAccessKeysResponseFromJSON(jsonValue));
    }

    /**
     */
    async readAccessKeys(requestParameters: ReadAccessKeysOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadAccessKeysResponse> {
        const response = await this.readAccessKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readSecretAccessKeyRaw(requestParameters: ReadSecretAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSecretAccessKeyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/ReadSecretAccessKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadSecretAccessKeyRequestToJSON(requestParameters.readSecretAccessKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadSecretAccessKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async readSecretAccessKey(requestParameters: ReadSecretAccessKeyOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadSecretAccessKeyResponse> {
        const response = await this.readSecretAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateAccessKeyRaw(requestParameters: UpdateAccessKeyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateAccessKeyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/UpdateAccessKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAccessKeyRequestToJSON(requestParameters.updateAccessKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateAccessKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateAccessKey(requestParameters: UpdateAccessKeyOperationRequest = {}, initOverrides?: RequestInit): Promise<UpdateAccessKeyResponse> {
        const response = await this.updateAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
