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
    CreateLoadBalancerPolicyRequest,
    CreateLoadBalancerPolicyRequestFromJSON,
    CreateLoadBalancerPolicyRequestToJSON,
    CreateLoadBalancerPolicyResponse,
    CreateLoadBalancerPolicyResponseFromJSON,
    CreateLoadBalancerPolicyResponseToJSON,
    DeleteLoadBalancerPolicyRequest,
    DeleteLoadBalancerPolicyRequestFromJSON,
    DeleteLoadBalancerPolicyRequestToJSON,
    DeleteLoadBalancerPolicyResponse,
    DeleteLoadBalancerPolicyResponseFromJSON,
    DeleteLoadBalancerPolicyResponseToJSON,
} from '../models';

export interface CreateLoadBalancerPolicyOperationRequest {
    createLoadBalancerPolicyRequest?: CreateLoadBalancerPolicyRequest;
}

export interface DeleteLoadBalancerPolicyOperationRequest {
    deleteLoadBalancerPolicyRequest?: DeleteLoadBalancerPolicyRequest;
}

/**
 * LoadBalancerPolicyApi - interface
 * 
 * @export
 * @interface LoadBalancerPolicyApiInterface
 */
export interface LoadBalancerPolicyApiInterface {
    /**
     * 
     * @param {CreateLoadBalancerPolicyRequest} [createLoadBalancerPolicyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerPolicyApiInterface
     */
    createLoadBalancerPolicyRaw(requestParameters: CreateLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateLoadBalancerPolicyResponse>>;

    /**
     */
    createLoadBalancerPolicy(requestParameters: CreateLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateLoadBalancerPolicyResponse>;

    /**
     * 
     * @param {DeleteLoadBalancerPolicyRequest} [deleteLoadBalancerPolicyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerPolicyApiInterface
     */
    deleteLoadBalancerPolicyRaw(requestParameters: DeleteLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteLoadBalancerPolicyResponse>>;

    /**
     */
    deleteLoadBalancerPolicy(requestParameters: DeleteLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteLoadBalancerPolicyResponse>;

}

/**
 * 
 */
export class LoadBalancerPolicyApi extends runtime.BaseAPI implements LoadBalancerPolicyApiInterface {

    /**
     */
    async createLoadBalancerPolicyRaw(requestParameters: CreateLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateLoadBalancerPolicyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateLoadBalancerPolicyRequestToJSON(requestParameters.createLoadBalancerPolicyRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateLoadBalancerPolicy`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateLoadBalancerPolicyResponseFromJSON(jsonValue));
    }

    /**
     */
    async createLoadBalancerPolicy(requestParameters: CreateLoadBalancerPolicyOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateLoadBalancerPolicyResponse> {
        const response = await this.createLoadBalancerPolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteLoadBalancerPolicyRaw(requestParameters: DeleteLoadBalancerPolicyOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteLoadBalancerPolicyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteLoadBalancerPolicyRequestToJSON(requestParameters.deleteLoadBalancerPolicyRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteLoadBalancerPolicy`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteLoadBalancerPolicyResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteLoadBalancerPolicy(requestParameters: DeleteLoadBalancerPolicyOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteLoadBalancerPolicyResponse> {
        const response = await this.deleteLoadBalancerPolicyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
