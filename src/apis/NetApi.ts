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
    CreateNetRequest,
    CreateNetRequestFromJSON,
    CreateNetRequestToJSON,
    CreateNetResponse,
    CreateNetResponseFromJSON,
    CreateNetResponseToJSON,
    DeleteNetRequest,
    DeleteNetRequestFromJSON,
    DeleteNetRequestToJSON,
    DeleteNetResponse,
    DeleteNetResponseFromJSON,
    DeleteNetResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReadNetsRequest,
    ReadNetsRequestFromJSON,
    ReadNetsRequestToJSON,
    ReadNetsResponse,
    ReadNetsResponseFromJSON,
    ReadNetsResponseToJSON,
    UpdateNetRequest,
    UpdateNetRequestFromJSON,
    UpdateNetRequestToJSON,
    UpdateNetResponse,
    UpdateNetResponseFromJSON,
    UpdateNetResponseToJSON,
} from '../models';

export interface CreateNetOperationRequest {
    createNetRequest?: CreateNetRequest;
}

export interface DeleteNetOperationRequest {
    deleteNetRequest?: DeleteNetRequest;
}

export interface ReadNetsOperationRequest {
    readNetsRequest?: ReadNetsRequest;
}

export interface UpdateNetOperationRequest {
    updateNetRequest?: UpdateNetRequest;
}

/**
 * NetApi - interface
 * 
 * @export
 * @interface NetApiInterface
 */
export interface NetApiInterface {
    /**
     * 
     * @param {CreateNetRequest} [createNetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetApiInterface
     */
    createNetRaw(requestParameters: CreateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNetResponse>>;

    /**
     */
    createNet(requestParameters: CreateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNetResponse>;

    /**
     * 
     * @param {DeleteNetRequest} [deleteNetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetApiInterface
     */
    deleteNetRaw(requestParameters: DeleteNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNetResponse>>;

    /**
     */
    deleteNet(requestParameters: DeleteNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNetResponse>;

    /**
     * 
     * @param {ReadNetsRequest} [readNetsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetApiInterface
     */
    readNetsRaw(requestParameters: ReadNetsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetsResponse>>;

    /**
     */
    readNets(requestParameters: ReadNetsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetsResponse>;

    /**
     * 
     * @param {UpdateNetRequest} [updateNetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetApiInterface
     */
    updateNetRaw(requestParameters: UpdateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNetResponse>>;

    /**
     */
    updateNet(requestParameters: UpdateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNetResponse>;

}

/**
 * 
 */
export class NetApi extends runtime.BaseAPI implements NetApiInterface {

    /**
     */
    async createNetRaw(requestParameters: CreateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateNetRequestToJSON(requestParameters.createNetRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateNet`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateNetResponseFromJSON(jsonValue));
    }

    /**
     */
    async createNet(requestParameters: CreateNetOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNetResponse> {
        const response = await this.createNetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteNetRaw(requestParameters: DeleteNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteNetRequestToJSON(requestParameters.deleteNetRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteNet`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNetResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteNet(requestParameters: DeleteNetOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNetResponse> {
        const response = await this.deleteNetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readNetsRaw(requestParameters: ReadNetsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadNetsRequestToJSON(requestParameters.readNetsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadNets`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadNetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readNets(requestParameters: ReadNetsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetsResponse> {
        const response = await this.readNetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateNetRaw(requestParameters: UpdateNetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNetResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateNetRequestToJSON(requestParameters.updateNetRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateNet`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNetResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateNet(requestParameters: UpdateNetOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNetResponse> {
        const response = await this.updateNetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
