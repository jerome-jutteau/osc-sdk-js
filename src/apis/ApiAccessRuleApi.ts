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


import * as runtime from '../runtime';
import {
    CreateApiAccessRuleRequest,
    CreateApiAccessRuleRequestFromJSON,
    CreateApiAccessRuleRequestToJSON,
    CreateApiAccessRuleResponse,
    CreateApiAccessRuleResponseFromJSON,
    CreateApiAccessRuleResponseToJSON,
    DeleteApiAccessRuleRequest,
    DeleteApiAccessRuleRequestFromJSON,
    DeleteApiAccessRuleRequestToJSON,
    DeleteApiAccessRuleResponse,
    DeleteApiAccessRuleResponseFromJSON,
    DeleteApiAccessRuleResponseToJSON,
    ReadApiAccessRulesRequest,
    ReadApiAccessRulesRequestFromJSON,
    ReadApiAccessRulesRequestToJSON,
    ReadApiAccessRulesResponse,
    ReadApiAccessRulesResponseFromJSON,
    ReadApiAccessRulesResponseToJSON,
    UpdateApiAccessRuleRequest,
    UpdateApiAccessRuleRequestFromJSON,
    UpdateApiAccessRuleRequestToJSON,
    UpdateApiAccessRuleResponse,
    UpdateApiAccessRuleResponseFromJSON,
    UpdateApiAccessRuleResponseToJSON,
} from '../models';

export interface CreateApiAccessRuleOperationRequest {
    createApiAccessRuleRequest?: CreateApiAccessRuleRequest;
}

export interface DeleteApiAccessRuleOperationRequest {
    deleteApiAccessRuleRequest?: DeleteApiAccessRuleRequest;
}

export interface ReadApiAccessRulesOperationRequest {
    readApiAccessRulesRequest?: ReadApiAccessRulesRequest;
}

export interface UpdateApiAccessRuleOperationRequest {
    updateApiAccessRuleRequest?: UpdateApiAccessRuleRequest;
}

/**
 * ApiAccessRuleApi - interface
 * 
 * @export
 * @interface ApiAccessRuleApiInterface
 */
export interface ApiAccessRuleApiInterface {
    /**
     * 
     * @param {CreateApiAccessRuleRequest} [createApiAccessRuleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiAccessRuleApiInterface
     */
    createApiAccessRuleRaw(requestParameters: CreateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateApiAccessRuleResponse>>;

    /**
     */
    createApiAccessRule(requestParameters: CreateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateApiAccessRuleResponse>;

    /**
     * 
     * @param {DeleteApiAccessRuleRequest} [deleteApiAccessRuleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiAccessRuleApiInterface
     */
    deleteApiAccessRuleRaw(requestParameters: DeleteApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteApiAccessRuleResponse>>;

    /**
     */
    deleteApiAccessRule(requestParameters: DeleteApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteApiAccessRuleResponse>;

    /**
     * 
     * @param {ReadApiAccessRulesRequest} [readApiAccessRulesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiAccessRuleApiInterface
     */
    readApiAccessRulesRaw(requestParameters: ReadApiAccessRulesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadApiAccessRulesResponse>>;

    /**
     */
    readApiAccessRules(requestParameters: ReadApiAccessRulesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadApiAccessRulesResponse>;

    /**
     * 
     * @param {UpdateApiAccessRuleRequest} [updateApiAccessRuleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiAccessRuleApiInterface
     */
    updateApiAccessRuleRaw(requestParameters: UpdateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateApiAccessRuleResponse>>;

    /**
     */
    updateApiAccessRule(requestParameters: UpdateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateApiAccessRuleResponse>;

}

/**
 * 
 */
export class ApiAccessRuleApi extends runtime.BaseAPI implements ApiAccessRuleApiInterface {

    /**
     */
    async createApiAccessRuleRaw(requestParameters: CreateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateApiAccessRuleResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = CreateApiAccessRuleRequestToJSON(requestParameters.createApiAccessRuleRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateApiAccessRule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateApiAccessRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async createApiAccessRule(requestParameters: CreateApiAccessRuleOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateApiAccessRuleResponse> {
        const response = await this.createApiAccessRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteApiAccessRuleRaw(requestParameters: DeleteApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteApiAccessRuleResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = DeleteApiAccessRuleRequestToJSON(requestParameters.deleteApiAccessRuleRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteApiAccessRule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteApiAccessRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteApiAccessRule(requestParameters: DeleteApiAccessRuleOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteApiAccessRuleResponse> {
        const response = await this.deleteApiAccessRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readApiAccessRulesRaw(requestParameters: ReadApiAccessRulesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadApiAccessRulesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = ReadApiAccessRulesRequestToJSON(requestParameters.readApiAccessRulesRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadApiAccessRules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadApiAccessRulesResponseFromJSON(jsonValue));
    }

    /**
     */
    async readApiAccessRules(requestParameters: ReadApiAccessRulesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadApiAccessRulesResponse> {
        const response = await this.readApiAccessRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateApiAccessRuleRaw(requestParameters: UpdateApiAccessRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateApiAccessRuleResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = UpdateApiAccessRuleRequestToJSON(requestParameters.updateApiAccessRuleRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateApiAccessRule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateApiAccessRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateApiAccessRule(requestParameters: UpdateApiAccessRuleOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateApiAccessRuleResponse> {
        const response = await this.updateApiAccessRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
