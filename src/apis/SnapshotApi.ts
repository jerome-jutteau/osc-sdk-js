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
    CreateSnapshotExportTaskRequest,
    CreateSnapshotExportTaskRequestFromJSON,
    CreateSnapshotExportTaskRequestToJSON,
    CreateSnapshotExportTaskResponse,
    CreateSnapshotExportTaskResponseFromJSON,
    CreateSnapshotExportTaskResponseToJSON,
    CreateSnapshotRequest,
    CreateSnapshotRequestFromJSON,
    CreateSnapshotRequestToJSON,
    CreateSnapshotResponse,
    CreateSnapshotResponseFromJSON,
    CreateSnapshotResponseToJSON,
    DeleteSnapshotRequest,
    DeleteSnapshotRequestFromJSON,
    DeleteSnapshotRequestToJSON,
    DeleteSnapshotResponse,
    DeleteSnapshotResponseFromJSON,
    DeleteSnapshotResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReadSnapshotExportTasksRequest,
    ReadSnapshotExportTasksRequestFromJSON,
    ReadSnapshotExportTasksRequestToJSON,
    ReadSnapshotExportTasksResponse,
    ReadSnapshotExportTasksResponseFromJSON,
    ReadSnapshotExportTasksResponseToJSON,
    ReadSnapshotsRequest,
    ReadSnapshotsRequestFromJSON,
    ReadSnapshotsRequestToJSON,
    ReadSnapshotsResponse,
    ReadSnapshotsResponseFromJSON,
    ReadSnapshotsResponseToJSON,
    UpdateSnapshotRequest,
    UpdateSnapshotRequestFromJSON,
    UpdateSnapshotRequestToJSON,
    UpdateSnapshotResponse,
    UpdateSnapshotResponseFromJSON,
    UpdateSnapshotResponseToJSON,
} from '../models';

export interface CreateSnapshotOperationRequest {
    createSnapshotRequest?: CreateSnapshotRequest;
}

export interface CreateSnapshotExportTaskOperationRequest {
    createSnapshotExportTaskRequest?: CreateSnapshotExportTaskRequest;
}

export interface DeleteSnapshotOperationRequest {
    deleteSnapshotRequest?: DeleteSnapshotRequest;
}

export interface ReadSnapshotExportTasksOperationRequest {
    readSnapshotExportTasksRequest?: ReadSnapshotExportTasksRequest;
}

export interface ReadSnapshotsOperationRequest {
    readSnapshotsRequest?: ReadSnapshotsRequest;
}

export interface UpdateSnapshotOperationRequest {
    updateSnapshotRequest?: UpdateSnapshotRequest;
}

/**
 * SnapshotApi - interface
 * 
 * @export
 * @interface SnapshotApiInterface
 */
export interface SnapshotApiInterface {
    /**
     * 
     * @param {CreateSnapshotRequest} [createSnapshotRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    createSnapshotRaw(requestParameters: CreateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSnapshotResponse>>;

    /**
     */
    createSnapshot(requestParameters: CreateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSnapshotResponse>;

    /**
     * 
     * @param {CreateSnapshotExportTaskRequest} [createSnapshotExportTaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    createSnapshotExportTaskRaw(requestParameters: CreateSnapshotExportTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSnapshotExportTaskResponse>>;

    /**
     */
    createSnapshotExportTask(requestParameters: CreateSnapshotExportTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSnapshotExportTaskResponse>;

    /**
     * 
     * @param {DeleteSnapshotRequest} [deleteSnapshotRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    deleteSnapshotRaw(requestParameters: DeleteSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSnapshotResponse>>;

    /**
     */
    deleteSnapshot(requestParameters: DeleteSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSnapshotResponse>;

    /**
     * 
     * @param {ReadSnapshotExportTasksRequest} [readSnapshotExportTasksRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    readSnapshotExportTasksRaw(requestParameters: ReadSnapshotExportTasksOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSnapshotExportTasksResponse>>;

    /**
     */
    readSnapshotExportTasks(requestParameters: ReadSnapshotExportTasksOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSnapshotExportTasksResponse>;

    /**
     * 
     * @param {ReadSnapshotsRequest} [readSnapshotsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    readSnapshotsRaw(requestParameters: ReadSnapshotsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSnapshotsResponse>>;

    /**
     */
    readSnapshots(requestParameters: ReadSnapshotsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSnapshotsResponse>;

    /**
     * 
     * @param {UpdateSnapshotRequest} [updateSnapshotRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotApiInterface
     */
    updateSnapshotRaw(requestParameters: UpdateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateSnapshotResponse>>;

    /**
     */
    updateSnapshot(requestParameters: UpdateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateSnapshotResponse>;

}

/**
 * 
 */
export class SnapshotApi extends runtime.BaseAPI implements SnapshotApiInterface {

    /**
     */
    async createSnapshotRaw(requestParameters: CreateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSnapshotResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateSnapshotRequestToJSON(requestParameters.createSnapshotRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateSnapshot`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSnapshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async createSnapshot(requestParameters: CreateSnapshotOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSnapshotResponse> {
        const response = await this.createSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createSnapshotExportTaskRaw(requestParameters: CreateSnapshotExportTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSnapshotExportTaskResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateSnapshotExportTaskRequestToJSON(requestParameters.createSnapshotExportTaskRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateSnapshotExportTask`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSnapshotExportTaskResponseFromJSON(jsonValue));
    }

    /**
     */
    async createSnapshotExportTask(requestParameters: CreateSnapshotExportTaskOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSnapshotExportTaskResponse> {
        const response = await this.createSnapshotExportTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteSnapshotRaw(requestParameters: DeleteSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSnapshotResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteSnapshotRequestToJSON(requestParameters.deleteSnapshotRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteSnapshot`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteSnapshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteSnapshot(requestParameters: DeleteSnapshotOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSnapshotResponse> {
        const response = await this.deleteSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readSnapshotExportTasksRaw(requestParameters: ReadSnapshotExportTasksOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSnapshotExportTasksResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadSnapshotExportTasksRequestToJSON(requestParameters.readSnapshotExportTasksRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadSnapshotExportTasks`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadSnapshotExportTasksResponseFromJSON(jsonValue));
    }

    /**
     */
    async readSnapshotExportTasks(requestParameters: ReadSnapshotExportTasksOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSnapshotExportTasksResponse> {
        const response = await this.readSnapshotExportTasksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readSnapshotsRaw(requestParameters: ReadSnapshotsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSnapshotsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadSnapshotsRequestToJSON(requestParameters.readSnapshotsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadSnapshots`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadSnapshotsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readSnapshots(requestParameters: ReadSnapshotsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSnapshotsResponse> {
        const response = await this.readSnapshotsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateSnapshotRaw(requestParameters: UpdateSnapshotOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateSnapshotResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateSnapshotRequestToJSON(requestParameters.updateSnapshotRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateSnapshot`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateSnapshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateSnapshot(requestParameters: UpdateSnapshotOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateSnapshotResponse> {
        const response = await this.updateSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
