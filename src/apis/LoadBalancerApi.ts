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
    CreateLoadBalancerRequest,
    CreateLoadBalancerRequestFromJSON,
    CreateLoadBalancerRequestToJSON,
    CreateLoadBalancerResponse,
    CreateLoadBalancerResponseFromJSON,
    CreateLoadBalancerResponseToJSON,
    CreateLoadBalancerTagsRequest,
    CreateLoadBalancerTagsRequestFromJSON,
    CreateLoadBalancerTagsRequestToJSON,
    CreateLoadBalancerTagsResponse,
    CreateLoadBalancerTagsResponseFromJSON,
    CreateLoadBalancerTagsResponseToJSON,
    DeleteLoadBalancerRequest,
    DeleteLoadBalancerRequestFromJSON,
    DeleteLoadBalancerRequestToJSON,
    DeleteLoadBalancerResponse,
    DeleteLoadBalancerResponseFromJSON,
    DeleteLoadBalancerResponseToJSON,
    DeleteLoadBalancerTagsRequest,
    DeleteLoadBalancerTagsRequestFromJSON,
    DeleteLoadBalancerTagsRequestToJSON,
    DeleteLoadBalancerTagsResponse,
    DeleteLoadBalancerTagsResponseFromJSON,
    DeleteLoadBalancerTagsResponseToJSON,
    DeregisterVmsInLoadBalancerRequest,
    DeregisterVmsInLoadBalancerRequestFromJSON,
    DeregisterVmsInLoadBalancerRequestToJSON,
    DeregisterVmsInLoadBalancerResponse,
    DeregisterVmsInLoadBalancerResponseFromJSON,
    DeregisterVmsInLoadBalancerResponseToJSON,
    LinkLoadBalancerBackendMachinesRequest,
    LinkLoadBalancerBackendMachinesRequestFromJSON,
    LinkLoadBalancerBackendMachinesRequestToJSON,
    LinkLoadBalancerBackendMachinesResponse,
    LinkLoadBalancerBackendMachinesResponseFromJSON,
    LinkLoadBalancerBackendMachinesResponseToJSON,
    ReadLoadBalancerTagsRequest,
    ReadLoadBalancerTagsRequestFromJSON,
    ReadLoadBalancerTagsRequestToJSON,
    ReadLoadBalancerTagsResponse,
    ReadLoadBalancerTagsResponseFromJSON,
    ReadLoadBalancerTagsResponseToJSON,
    ReadLoadBalancersRequest,
    ReadLoadBalancersRequestFromJSON,
    ReadLoadBalancersRequestToJSON,
    ReadLoadBalancersResponse,
    ReadLoadBalancersResponseFromJSON,
    ReadLoadBalancersResponseToJSON,
    ReadVmsHealthRequest,
    ReadVmsHealthRequestFromJSON,
    ReadVmsHealthRequestToJSON,
    ReadVmsHealthResponse,
    ReadVmsHealthResponseFromJSON,
    ReadVmsHealthResponseToJSON,
    RegisterVmsInLoadBalancerRequest,
    RegisterVmsInLoadBalancerRequestFromJSON,
    RegisterVmsInLoadBalancerRequestToJSON,
    RegisterVmsInLoadBalancerResponse,
    RegisterVmsInLoadBalancerResponseFromJSON,
    RegisterVmsInLoadBalancerResponseToJSON,
    UnlinkLoadBalancerBackendMachinesRequest,
    UnlinkLoadBalancerBackendMachinesRequestFromJSON,
    UnlinkLoadBalancerBackendMachinesRequestToJSON,
    UnlinkLoadBalancerBackendMachinesResponse,
    UnlinkLoadBalancerBackendMachinesResponseFromJSON,
    UnlinkLoadBalancerBackendMachinesResponseToJSON,
    UpdateLoadBalancerRequest,
    UpdateLoadBalancerRequestFromJSON,
    UpdateLoadBalancerRequestToJSON,
    UpdateLoadBalancerResponse,
    UpdateLoadBalancerResponseFromJSON,
    UpdateLoadBalancerResponseToJSON,
} from '../models';

export interface CreateLoadBalancerOperationRequest {
    createLoadBalancerRequest?: CreateLoadBalancerRequest;
}

export interface CreateLoadBalancerTagsOperationRequest {
    createLoadBalancerTagsRequest?: CreateLoadBalancerTagsRequest;
}

export interface DeleteLoadBalancerOperationRequest {
    deleteLoadBalancerRequest?: DeleteLoadBalancerRequest;
}

export interface DeleteLoadBalancerTagsOperationRequest {
    deleteLoadBalancerTagsRequest?: DeleteLoadBalancerTagsRequest;
}

export interface DeregisterVmsInLoadBalancerOperationRequest {
    deregisterVmsInLoadBalancerRequest?: DeregisterVmsInLoadBalancerRequest;
}

export interface LinkLoadBalancerBackendMachinesOperationRequest {
    linkLoadBalancerBackendMachinesRequest?: LinkLoadBalancerBackendMachinesRequest;
}

export interface ReadLoadBalancerTagsOperationRequest {
    readLoadBalancerTagsRequest?: ReadLoadBalancerTagsRequest;
}

export interface ReadLoadBalancersOperationRequest {
    readLoadBalancersRequest?: ReadLoadBalancersRequest;
}

export interface ReadVmsHealthOperationRequest {
    readVmsHealthRequest?: ReadVmsHealthRequest;
}

export interface RegisterVmsInLoadBalancerOperationRequest {
    registerVmsInLoadBalancerRequest?: RegisterVmsInLoadBalancerRequest;
}

export interface UnlinkLoadBalancerBackendMachinesOperationRequest {
    unlinkLoadBalancerBackendMachinesRequest?: UnlinkLoadBalancerBackendMachinesRequest;
}

export interface UpdateLoadBalancerOperationRequest {
    updateLoadBalancerRequest?: UpdateLoadBalancerRequest;
}

/**
 * LoadBalancerApi - interface
 * 
 * @export
 * @interface LoadBalancerApiInterface
 */
export interface LoadBalancerApiInterface {
    /**
     * 
     * @param {CreateLoadBalancerRequest} [createLoadBalancerRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    createLoadBalancerRaw(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerResponse>>;

    /**
     */
    createLoadBalancer(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerResponse>;

    /**
     * 
     * @param {CreateLoadBalancerTagsRequest} [createLoadBalancerTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    createLoadBalancerTagsRaw(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerTagsResponse>>;

    /**
     */
    createLoadBalancerTags(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerTagsResponse>;

    /**
     * 
     * @param {DeleteLoadBalancerRequest} [deleteLoadBalancerRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deleteLoadBalancerRaw(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerResponse>>;

    /**
     */
    deleteLoadBalancer(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerResponse>;

    /**
     * 
     * @param {DeleteLoadBalancerTagsRequest} [deleteLoadBalancerTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deleteLoadBalancerTagsRaw(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerTagsResponse>>;

    /**
     */
    deleteLoadBalancerTags(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerTagsResponse>;

    /**
     * 
     * @param {DeregisterVmsInLoadBalancerRequest} [deregisterVmsInLoadBalancerRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deregisterVmsInLoadBalancerRaw(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeregisterVmsInLoadBalancerResponse>>;

    /**
     */
    deregisterVmsInLoadBalancer(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeregisterVmsInLoadBalancerResponse>;

    /**
     * 
     * @param {LinkLoadBalancerBackendMachinesRequest} [linkLoadBalancerBackendMachinesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    linkLoadBalancerBackendMachinesRaw(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkLoadBalancerBackendMachinesResponse>>;

    /**
     */
    linkLoadBalancerBackendMachines(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<LinkLoadBalancerBackendMachinesResponse>;

    /**
     * 
     * @param {ReadLoadBalancerTagsRequest} [readLoadBalancerTagsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readLoadBalancerTagsRaw(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancerTagsResponse>>;

    /**
     */
    readLoadBalancerTags(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancerTagsResponse>;

    /**
     * 
     * @param {ReadLoadBalancersRequest} [readLoadBalancersRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readLoadBalancersRaw(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancersResponse>>;

    /**
     */
    readLoadBalancers(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancersResponse>;

    /**
     * 
     * @param {ReadVmsHealthRequest} [readVmsHealthRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readVmsHealthRaw(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVmsHealthResponse>>;

    /**
     */
    readVmsHealth(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<ReadVmsHealthResponse>;

    /**
     * 
     * @param {RegisterVmsInLoadBalancerRequest} [registerVmsInLoadBalancerRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    registerVmsInLoadBalancerRaw(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RegisterVmsInLoadBalancerResponse>>;

    /**
     */
    registerVmsInLoadBalancer(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<RegisterVmsInLoadBalancerResponse>;

    /**
     * 
     * @param {UnlinkLoadBalancerBackendMachinesRequest} [unlinkLoadBalancerBackendMachinesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    unlinkLoadBalancerBackendMachinesRaw(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkLoadBalancerBackendMachinesResponse>>;

    /**
     */
    unlinkLoadBalancerBackendMachines(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<UnlinkLoadBalancerBackendMachinesResponse>;

    /**
     * 
     * @param {UpdateLoadBalancerRequest} [updateLoadBalancerRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    updateLoadBalancerRaw(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateLoadBalancerResponse>>;

    /**
     */
    updateLoadBalancer(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<UpdateLoadBalancerResponse>;

}

/**
 * 
 */
export class LoadBalancerApi extends runtime.BaseAPI implements LoadBalancerApiInterface {

    /**
     */
    async createLoadBalancerRaw(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateLoadBalancer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLoadBalancerRequestToJSON(requestParameters.createLoadBalancerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateLoadBalancerResponseFromJSON(jsonValue));
    }

    /**
     */
    async createLoadBalancer(requestParameters: CreateLoadBalancerOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateLoadBalancerResponse> {
        const response = await this.createLoadBalancerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createLoadBalancerTagsRaw(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateLoadBalancerTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLoadBalancerTagsRequestToJSON(requestParameters.createLoadBalancerTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateLoadBalancerTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async createLoadBalancerTags(requestParameters: CreateLoadBalancerTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateLoadBalancerTagsResponse> {
        const response = await this.createLoadBalancerTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteLoadBalancerRaw(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteLoadBalancer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteLoadBalancerRequestToJSON(requestParameters.deleteLoadBalancerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteLoadBalancerResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteLoadBalancer(requestParameters: DeleteLoadBalancerOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteLoadBalancerResponse> {
        const response = await this.deleteLoadBalancerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteLoadBalancerTagsRaw(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteLoadBalancerTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteLoadBalancerTagsRequestToJSON(requestParameters.deleteLoadBalancerTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteLoadBalancerTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteLoadBalancerTags(requestParameters: DeleteLoadBalancerTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteLoadBalancerTagsResponse> {
        const response = await this.deleteLoadBalancerTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deregisterVmsInLoadBalancerRaw(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeregisterVmsInLoadBalancerResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeregisterVmsInLoadBalancer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeregisterVmsInLoadBalancerRequestToJSON(requestParameters.deregisterVmsInLoadBalancerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeregisterVmsInLoadBalancerResponseFromJSON(jsonValue));
    }

    /**
     */
    async deregisterVmsInLoadBalancer(requestParameters: DeregisterVmsInLoadBalancerOperationRequest = {}, initOverrides?: RequestInit): Promise<DeregisterVmsInLoadBalancerResponse> {
        const response = await this.deregisterVmsInLoadBalancerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async linkLoadBalancerBackendMachinesRaw(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkLoadBalancerBackendMachinesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/LinkLoadBalancerBackendMachines`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LinkLoadBalancerBackendMachinesRequestToJSON(requestParameters.linkLoadBalancerBackendMachinesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkLoadBalancerBackendMachinesResponseFromJSON(jsonValue));
    }

    /**
     */
    async linkLoadBalancerBackendMachines(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest = {}, initOverrides?: RequestInit): Promise<LinkLoadBalancerBackendMachinesResponse> {
        const response = await this.linkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readLoadBalancerTagsRaw(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancerTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadLoadBalancerTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadLoadBalancerTagsRequestToJSON(requestParameters.readLoadBalancerTagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadLoadBalancerTagsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readLoadBalancerTags(requestParameters: ReadLoadBalancerTagsOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadLoadBalancerTagsResponse> {
        const response = await this.readLoadBalancerTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readLoadBalancersRaw(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancersResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadLoadBalancers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadLoadBalancersRequestToJSON(requestParameters.readLoadBalancersRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadLoadBalancersResponseFromJSON(jsonValue));
    }

    /**
     */
    async readLoadBalancers(requestParameters: ReadLoadBalancersOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadLoadBalancersResponse> {
        const response = await this.readLoadBalancersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readVmsHealthRaw(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVmsHealthResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ReadVmsHealth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadVmsHealthRequestToJSON(requestParameters.readVmsHealthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadVmsHealthResponseFromJSON(jsonValue));
    }

    /**
     */
    async readVmsHealth(requestParameters: ReadVmsHealthOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadVmsHealthResponse> {
        const response = await this.readVmsHealthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerVmsInLoadBalancerRaw(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RegisterVmsInLoadBalancerResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/RegisterVmsInLoadBalancer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterVmsInLoadBalancerRequestToJSON(requestParameters.registerVmsInLoadBalancerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegisterVmsInLoadBalancerResponseFromJSON(jsonValue));
    }

    /**
     */
    async registerVmsInLoadBalancer(requestParameters: RegisterVmsInLoadBalancerOperationRequest = {}, initOverrides?: RequestInit): Promise<RegisterVmsInLoadBalancerResponse> {
        const response = await this.registerVmsInLoadBalancerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async unlinkLoadBalancerBackendMachinesRaw(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkLoadBalancerBackendMachinesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UnlinkLoadBalancerBackendMachines`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnlinkLoadBalancerBackendMachinesRequestToJSON(requestParameters.unlinkLoadBalancerBackendMachinesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkLoadBalancerBackendMachinesResponseFromJSON(jsonValue));
    }

    /**
     */
    async unlinkLoadBalancerBackendMachines(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest = {}, initOverrides?: RequestInit): Promise<UnlinkLoadBalancerBackendMachinesResponse> {
        const response = await this.unlinkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateLoadBalancerRaw(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateLoadBalancerResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UpdateLoadBalancer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateLoadBalancerRequestToJSON(requestParameters.updateLoadBalancerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateLoadBalancerResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateLoadBalancer(requestParameters: UpdateLoadBalancerOperationRequest = {}, initOverrides?: RequestInit): Promise<UpdateLoadBalancerResponse> {
        const response = await this.updateLoadBalancerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
