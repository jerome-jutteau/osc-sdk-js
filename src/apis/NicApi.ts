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
    CreateNicRequest,
    CreateNicRequestFromJSON,
    CreateNicRequestToJSON,
    CreateNicResponse,
    CreateNicResponseFromJSON,
    CreateNicResponseToJSON,
    DeleteNicRequest,
    DeleteNicRequestFromJSON,
    DeleteNicRequestToJSON,
    DeleteNicResponse,
    DeleteNicResponseFromJSON,
    DeleteNicResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    LinkNicRequest,
    LinkNicRequestFromJSON,
    LinkNicRequestToJSON,
    LinkNicResponse,
    LinkNicResponseFromJSON,
    LinkNicResponseToJSON,
    LinkPrivateIpsRequest,
    LinkPrivateIpsRequestFromJSON,
    LinkPrivateIpsRequestToJSON,
    LinkPrivateIpsResponse,
    LinkPrivateIpsResponseFromJSON,
    LinkPrivateIpsResponseToJSON,
    ReadNicsRequest,
    ReadNicsRequestFromJSON,
    ReadNicsRequestToJSON,
    ReadNicsResponse,
    ReadNicsResponseFromJSON,
    ReadNicsResponseToJSON,
    UnlinkNicRequest,
    UnlinkNicRequestFromJSON,
    UnlinkNicRequestToJSON,
    UnlinkNicResponse,
    UnlinkNicResponseFromJSON,
    UnlinkNicResponseToJSON,
    UnlinkPrivateIpsRequest,
    UnlinkPrivateIpsRequestFromJSON,
    UnlinkPrivateIpsRequestToJSON,
    UnlinkPrivateIpsResponse,
    UnlinkPrivateIpsResponseFromJSON,
    UnlinkPrivateIpsResponseToJSON,
    UpdateNicRequest,
    UpdateNicRequestFromJSON,
    UpdateNicRequestToJSON,
    UpdateNicResponse,
    UpdateNicResponseFromJSON,
    UpdateNicResponseToJSON,
} from '../models';

export interface CreateNicOperationRequest {
    createNicRequest?: CreateNicRequest;
}

export interface DeleteNicOperationRequest {
    deleteNicRequest?: DeleteNicRequest;
}

export interface LinkNicOperationRequest {
    linkNicRequest?: LinkNicRequest;
}

export interface LinkPrivateIpsOperationRequest {
    linkPrivateIpsRequest?: LinkPrivateIpsRequest;
}

export interface ReadNicsOperationRequest {
    readNicsRequest?: ReadNicsRequest;
}

export interface UnlinkNicOperationRequest {
    unlinkNicRequest?: UnlinkNicRequest;
}

export interface UnlinkPrivateIpsOperationRequest {
    unlinkPrivateIpsRequest?: UnlinkPrivateIpsRequest;
}

export interface UpdateNicOperationRequest {
    updateNicRequest?: UpdateNicRequest;
}

/**
 * NicApi - interface
 * 
 * @export
 * @interface NicApiInterface
 */
export interface NicApiInterface {
    /**
     * 
     * @param {CreateNicRequest} [createNicRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    createNicRaw(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateNicResponse>>;

    /**
     */
    createNic(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit): Promise<CreateNicResponse>;

    /**
     * 
     * @param {DeleteNicRequest} [deleteNicRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    deleteNicRaw(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteNicResponse>>;

    /**
     */
    deleteNic(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit): Promise<DeleteNicResponse>;

    /**
     * 
     * @param {LinkNicRequest} [linkNicRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    linkNicRaw(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkNicResponse>>;

    /**
     */
    linkNic(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit): Promise<LinkNicResponse>;

    /**
     * 
     * @param {LinkPrivateIpsRequest} [linkPrivateIpsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    linkPrivateIpsRaw(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkPrivateIpsResponse>>;

    /**
     */
    linkPrivateIps(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<LinkPrivateIpsResponse>;

    /**
     * 
     * @param {ReadNicsRequest} [readNicsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    readNicsRaw(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadNicsResponse>>;

    /**
     */
    readNics(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit): Promise<ReadNicsResponse>;

    /**
     * 
     * @param {UnlinkNicRequest} [unlinkNicRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    unlinkNicRaw(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkNicResponse>>;

    /**
     */
    unlinkNic(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit): Promise<UnlinkNicResponse>;

    /**
     * 
     * @param {UnlinkPrivateIpsRequest} [unlinkPrivateIpsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    unlinkPrivateIpsRaw(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkPrivateIpsResponse>>;

    /**
     */
    unlinkPrivateIps(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<UnlinkPrivateIpsResponse>;

    /**
     * 
     * @param {UpdateNicRequest} [updateNicRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    updateNicRaw(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateNicResponse>>;

    /**
     */
    updateNic(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit): Promise<UpdateNicResponse>;

}

/**
 * 
 */
export class NicApi extends runtime.BaseAPI implements NicApiInterface {

    /**
     */
    async createNicRaw(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateNicResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateNic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateNicRequestToJSON(requestParameters.createNicRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateNicResponseFromJSON(jsonValue));
    }

    /**
     */
    async createNic(requestParameters: CreateNicOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateNicResponse> {
        const response = await this.createNicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteNicRaw(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteNicResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteNic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteNicRequestToJSON(requestParameters.deleteNicRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNicResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteNic(requestParameters: DeleteNicOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteNicResponse> {
        const response = await this.deleteNicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async linkNicRaw(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkNicResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/LinkNic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LinkNicRequestToJSON(requestParameters.linkNicRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkNicResponseFromJSON(jsonValue));
    }

    /**
     */
    async linkNic(requestParameters: LinkNicOperationRequest = {}, initOverrides?: RequestInit): Promise<LinkNicResponse> {
        const response = await this.linkNicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async linkPrivateIpsRaw(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkPrivateIpsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/LinkPrivateIps`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LinkPrivateIpsRequestToJSON(requestParameters.linkPrivateIpsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkPrivateIpsResponseFromJSON(jsonValue));
    }

    /**
     */
    async linkPrivateIps(requestParameters: LinkPrivateIpsOperationRequest = {}, initOverrides?: RequestInit): Promise<LinkPrivateIpsResponse> {
        const response = await this.linkPrivateIpsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readNicsRaw(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadNicsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadNics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadNicsRequestToJSON(requestParameters.readNicsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadNicsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readNics(requestParameters: ReadNicsOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadNicsResponse> {
        const response = await this.readNicsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async unlinkNicRaw(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkNicResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UnlinkNic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnlinkNicRequestToJSON(requestParameters.unlinkNicRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkNicResponseFromJSON(jsonValue));
    }

    /**
     */
    async unlinkNic(requestParameters: UnlinkNicOperationRequest = {}, initOverrides?: RequestInit): Promise<UnlinkNicResponse> {
        const response = await this.unlinkNicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async unlinkPrivateIpsRaw(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkPrivateIpsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UnlinkPrivateIps`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnlinkPrivateIpsRequestToJSON(requestParameters.unlinkPrivateIpsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkPrivateIpsResponseFromJSON(jsonValue));
    }

    /**
     */
    async unlinkPrivateIps(requestParameters: UnlinkPrivateIpsOperationRequest = {}, initOverrides?: RequestInit): Promise<UnlinkPrivateIpsResponse> {
        const response = await this.unlinkPrivateIpsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateNicRaw(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateNicResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UpdateNic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateNicRequestToJSON(requestParameters.updateNicRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNicResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateNic(requestParameters: UpdateNicOperationRequest = {}, initOverrides?: RequestInit): Promise<UpdateNicResponse> {
        const response = await this.updateNicRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
