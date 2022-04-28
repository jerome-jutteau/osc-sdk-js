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
    CreateVolumeRequest,
    CreateVolumeRequestFromJSON,
    CreateVolumeRequestToJSON,
    CreateVolumeResponse,
    CreateVolumeResponseFromJSON,
    CreateVolumeResponseToJSON,
    DeleteVolumeRequest,
    DeleteVolumeRequestFromJSON,
    DeleteVolumeRequestToJSON,
    DeleteVolumeResponse,
    DeleteVolumeResponseFromJSON,
    DeleteVolumeResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    LinkVolumeRequest,
    LinkVolumeRequestFromJSON,
    LinkVolumeRequestToJSON,
    LinkVolumeResponse,
    LinkVolumeResponseFromJSON,
    LinkVolumeResponseToJSON,
    ReadVolumesRequest,
    ReadVolumesRequestFromJSON,
    ReadVolumesRequestToJSON,
    ReadVolumesResponse,
    ReadVolumesResponseFromJSON,
    ReadVolumesResponseToJSON,
    UnlinkVolumeRequest,
    UnlinkVolumeRequestFromJSON,
    UnlinkVolumeRequestToJSON,
    UnlinkVolumeResponse,
    UnlinkVolumeResponseFromJSON,
    UnlinkVolumeResponseToJSON,
    UpdateVolumeRequest,
    UpdateVolumeRequestFromJSON,
    UpdateVolumeRequestToJSON,
    UpdateVolumeResponse,
    UpdateVolumeResponseFromJSON,
    UpdateVolumeResponseToJSON,
} from '../models';
import { AwsV4Signer } from 'aws4fetch';

export interface CreateVolumeOperationRequest {
    createVolumeRequest?: CreateVolumeRequest;
}

export interface DeleteVolumeOperationRequest {
    deleteVolumeRequest?: DeleteVolumeRequest;
}

export interface LinkVolumeOperationRequest {
    linkVolumeRequest?: LinkVolumeRequest;
}

export interface ReadVolumesOperationRequest {
    readVolumesRequest?: ReadVolumesRequest;
}

export interface UnlinkVolumeOperationRequest {
    unlinkVolumeRequest?: UnlinkVolumeRequest;
}

export interface UpdateVolumeOperationRequest {
    updateVolumeRequest?: UpdateVolumeRequest;
}

/**
 * VolumeApi - interface
 * 
 * @export
 * @interface VolumeApiInterface
 */
export interface VolumeApiInterface {
    /**
     * 
     * @param {CreateVolumeRequest} [createVolumeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    createVolumeRaw(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateVolumeResponse>>;

    /**
     */
    createVolume(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit): Promise<CreateVolumeResponse>;

    /**
     * 
     * @param {DeleteVolumeRequest} [deleteVolumeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    deleteVolumeRaw(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteVolumeResponse>>;

    /**
     */
    deleteVolume(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit): Promise<DeleteVolumeResponse>;

    /**
     * 
     * @param {LinkVolumeRequest} [linkVolumeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    linkVolumeRaw(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkVolumeResponse>>;

    /**
     */
    linkVolume(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<LinkVolumeResponse>;

    /**
     * 
     * @param {ReadVolumesRequest} [readVolumesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    readVolumesRaw(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVolumesResponse>>;

    /**
     */
    readVolumes(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit): Promise<ReadVolumesResponse>;

    /**
     * 
     * @param {UnlinkVolumeRequest} [unlinkVolumeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    unlinkVolumeRaw(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkVolumeResponse>>;

    /**
     */
    unlinkVolume(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<UnlinkVolumeResponse>;

    /**
     * 
     * @param {UpdateVolumeRequest} [updateVolumeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    updateVolumeRaw(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateVolumeResponse>>;

    /**
     */
    updateVolume(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit): Promise<UpdateVolumeResponse>;

}

/**
 * 
 */
export class VolumeApi extends runtime.BaseAPI implements VolumeApiInterface {

    /**
     */
    async createVolumeRaw(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateVolumeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/CreateVolume`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateVolumeRequestToJSON(requestParameters.createVolumeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateVolumeResponseFromJSON(jsonValue));
    }

    /**
     */
    async createVolume(requestParameters: CreateVolumeOperationRequest = {}, initOverrides?: RequestInit): Promise<CreateVolumeResponse> {
        const response = await this.createVolumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteVolumeRaw(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteVolumeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteVolume`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteVolumeRequestToJSON(requestParameters.deleteVolumeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteVolumeResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteVolume(requestParameters: DeleteVolumeOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteVolumeResponse> {
        const response = await this.deleteVolumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async linkVolumeRaw(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkVolumeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/LinkVolume`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LinkVolumeRequestToJSON(requestParameters.linkVolumeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkVolumeResponseFromJSON(jsonValue));
    }

    /**
     */
    async linkVolume(requestParameters: LinkVolumeOperationRequest = {}, initOverrides?: RequestInit): Promise<LinkVolumeResponse> {
        const response = await this.linkVolumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readVolumesRaw(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVolumesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        console.log("requestParameters:");
        console.log(requestParameters);
        console.log("requestParameters.readVolumesRequest:");
        console.log(requestParameters.readVolumesRequest);
        const body: any = ReadVolumesRequestToJSON(requestParameters.readVolumesRequest)

        const request: runtime.RequestOpts = {
            path: `/ReadVolumes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        };

        if (this.configuration && this.configuration.awsV4SignerParameters) {
            console.log("setting up signature");
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);

            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign("POST", SignUrl, headerParameters, SignBody, "eu-west-2");
            //request.url = url;
            //request.method = method;
            request.headers = signResult.headers;

        }
        console.log("making request");
        console.log(request);
        const response = await this.request(request, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReadVolumesResponseFromJSON(jsonValue));
    }

    /**
     */
    async readVolumes(requestParameters: ReadVolumesOperationRequest = {}, initOverrides?: RequestInit): Promise<ReadVolumesResponse> {
        const response = await this.readVolumesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async unlinkVolumeRaw(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkVolumeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UnlinkVolume`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnlinkVolumeRequestToJSON(requestParameters.unlinkVolumeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkVolumeResponseFromJSON(jsonValue));
    }

    /**
     */
    async unlinkVolume(requestParameters: UnlinkVolumeOperationRequest = {}, initOverrides?: RequestInit): Promise<UnlinkVolumeResponse> {
        const response = await this.unlinkVolumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateVolumeRaw(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateVolumeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/UpdateVolume`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateVolumeRequestToJSON(requestParameters.updateVolumeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateVolumeResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateVolume(requestParameters: UpdateVolumeOperationRequest = {}, initOverrides?: RequestInit): Promise<UpdateVolumeResponse> {
        const response = await this.updateVolumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
