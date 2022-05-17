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
    CreateNetAccessPointRequest,
    CreateNetAccessPointRequestFromJSON,
    CreateNetAccessPointRequestToJSON,
    CreateNetAccessPointResponse,
    CreateNetAccessPointResponseFromJSON,
    CreateNetAccessPointResponseToJSON,
    DeleteNetAccessPointRequest,
    DeleteNetAccessPointRequestFromJSON,
    DeleteNetAccessPointRequestToJSON,
    DeleteNetAccessPointResponse,
    DeleteNetAccessPointResponseFromJSON,
    DeleteNetAccessPointResponseToJSON,
    ReadNetAccessPointServicesRequest,
    ReadNetAccessPointServicesRequestFromJSON,
    ReadNetAccessPointServicesRequestToJSON,
    ReadNetAccessPointServicesResponse,
    ReadNetAccessPointServicesResponseFromJSON,
    ReadNetAccessPointServicesResponseToJSON,
    ReadNetAccessPointsRequest,
    ReadNetAccessPointsRequestFromJSON,
    ReadNetAccessPointsRequestToJSON,
    ReadNetAccessPointsResponse,
    ReadNetAccessPointsResponseFromJSON,
    ReadNetAccessPointsResponseToJSON,
    UpdateNetAccessPointRequest,
    UpdateNetAccessPointRequestFromJSON,
    UpdateNetAccessPointRequestToJSON,
    UpdateNetAccessPointResponse,
    UpdateNetAccessPointResponseFromJSON,
    UpdateNetAccessPointResponseToJSON,
} from '../models';

export interface CreateNetAccessPointOperationRequest {
    createNetAccessPointRequest?: CreateNetAccessPointRequest;
}

export interface DeleteNetAccessPointOperationRequest {
    deleteNetAccessPointRequest?: DeleteNetAccessPointRequest;
}

export interface ReadNetAccessPointServicesOperationRequest {
    readNetAccessPointServicesRequest?: ReadNetAccessPointServicesRequest;
}

export interface ReadNetAccessPointsOperationRequest {
    readNetAccessPointsRequest?: ReadNetAccessPointsRequest;
}

export interface UpdateNetAccessPointOperationRequest {
    updateNetAccessPointRequest?: UpdateNetAccessPointRequest;
}

/**
 * NetAccessPointApi - interface
 * 
 * @export
 * @interface NetAccessPointApiInterface
 */
export interface NetAccessPointApiInterface {
    /**
     * 
     * @param {CreateNetAccessPointRequest} [createNetAccessPointRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetAccessPointApiInterface
     */
    createNetAccessPointRaw(requestParameters: CreateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNetAccessPointResponse>>;

    /**
     */
    createNetAccessPoint(requestParameters: CreateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNetAccessPointResponse>;

    /**
     * 
     * @param {DeleteNetAccessPointRequest} [deleteNetAccessPointRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetAccessPointApiInterface
     */
    deleteNetAccessPointRaw(requestParameters: DeleteNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNetAccessPointResponse>>;

    /**
     */
    deleteNetAccessPoint(requestParameters: DeleteNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNetAccessPointResponse>;

    /**
     * 
     * @param {ReadNetAccessPointServicesRequest} [readNetAccessPointServicesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetAccessPointApiInterface
     */
    readNetAccessPointServicesRaw(requestParameters: ReadNetAccessPointServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetAccessPointServicesResponse>>;

    /**
     */
    readNetAccessPointServices(requestParameters: ReadNetAccessPointServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetAccessPointServicesResponse>;

    /**
     * 
     * @param {ReadNetAccessPointsRequest} [readNetAccessPointsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetAccessPointApiInterface
     */
    readNetAccessPointsRaw(requestParameters: ReadNetAccessPointsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetAccessPointsResponse>>;

    /**
     */
    readNetAccessPoints(requestParameters: ReadNetAccessPointsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetAccessPointsResponse>;

    /**
     * 
     * @param {UpdateNetAccessPointRequest} [updateNetAccessPointRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetAccessPointApiInterface
     */
    updateNetAccessPointRaw(requestParameters: UpdateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNetAccessPointResponse>>;

    /**
     */
    updateNetAccessPoint(requestParameters: UpdateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNetAccessPointResponse>;

}

/**
 * 
 */
export class NetAccessPointApi extends runtime.BaseAPI implements NetAccessPointApiInterface {

    /**
     */
    async createNetAccessPointRaw(requestParameters: CreateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNetAccessPointResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateNetAccessPointRequestToJSON(requestParameters.createNetAccessPointRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateNetAccessPoint`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateNetAccessPointResponseFromJSON(jsonValue));
    }

    /**
     */
    async createNetAccessPoint(requestParameters: CreateNetAccessPointOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNetAccessPointResponse> {
        const response = await this.createNetAccessPointRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteNetAccessPointRaw(requestParameters: DeleteNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNetAccessPointResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteNetAccessPointRequestToJSON(requestParameters.deleteNetAccessPointRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteNetAccessPoint`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNetAccessPointResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteNetAccessPoint(requestParameters: DeleteNetAccessPointOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNetAccessPointResponse> {
        const response = await this.deleteNetAccessPointRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readNetAccessPointServicesRaw(requestParameters: ReadNetAccessPointServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetAccessPointServicesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = ReadNetAccessPointServicesRequestToJSON(requestParameters.readNetAccessPointServicesRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadNetAccessPointServices`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadNetAccessPointServicesResponseFromJSON(jsonValue));
    }

    /**
     */
    async readNetAccessPointServices(requestParameters: ReadNetAccessPointServicesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetAccessPointServicesResponse> {
        const response = await this.readNetAccessPointServicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readNetAccessPointsRaw(requestParameters: ReadNetAccessPointsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNetAccessPointsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadNetAccessPointsRequestToJSON(requestParameters.readNetAccessPointsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadNetAccessPoints`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadNetAccessPointsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readNetAccessPoints(requestParameters: ReadNetAccessPointsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNetAccessPointsResponse> {
        const response = await this.readNetAccessPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateNetAccessPointRaw(requestParameters: UpdateNetAccessPointOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNetAccessPointResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateNetAccessPointRequestToJSON(requestParameters.updateNetAccessPointRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateNetAccessPoint`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNetAccessPointResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateNetAccessPoint(requestParameters: UpdateNetAccessPointOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNetAccessPointResponse> {
        const response = await this.updateNetAccessPointRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
