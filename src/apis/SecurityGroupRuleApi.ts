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
    CreateSecurityGroupRuleRequest,
    CreateSecurityGroupRuleRequestFromJSON,
    CreateSecurityGroupRuleRequestToJSON,
    CreateSecurityGroupRuleResponse,
    CreateSecurityGroupRuleResponseFromJSON,
    CreateSecurityGroupRuleResponseToJSON,
    DeleteSecurityGroupRuleRequest,
    DeleteSecurityGroupRuleRequestFromJSON,
    DeleteSecurityGroupRuleRequestToJSON,
    DeleteSecurityGroupRuleResponse,
    DeleteSecurityGroupRuleResponseFromJSON,
    DeleteSecurityGroupRuleResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CreateSecurityGroupRuleOperationRequest {
    createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest;
}

export interface DeleteSecurityGroupRuleOperationRequest {
    deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest;
}

/**
 * SecurityGroupRuleApi - interface
 * 
 * @export
 * @interface SecurityGroupRuleApiInterface
 */
export interface SecurityGroupRuleApiInterface {
    /**
     * 
     * @param {CreateSecurityGroupRuleRequest} [createSecurityGroupRuleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupRuleApiInterface
     */
    createSecurityGroupRuleRaw(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSecurityGroupRuleResponse>>;

    /**
     */
    createSecurityGroupRule(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSecurityGroupRuleResponse>;

    /**
     * 
     * @param {DeleteSecurityGroupRuleRequest} [deleteSecurityGroupRuleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupRuleApiInterface
     */
    deleteSecurityGroupRuleRaw(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSecurityGroupRuleResponse>>;

    /**
     */
    deleteSecurityGroupRule(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSecurityGroupRuleResponse>;

}

/**
 * 
 */
export class SecurityGroupRuleApi extends runtime.BaseAPI implements SecurityGroupRuleApiInterface {

    /**
     */
    async createSecurityGroupRuleRaw(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSecurityGroupRuleResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateSecurityGroupRuleRequestToJSON(requestParameters.createSecurityGroupRuleRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateSecurityGroupRule`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSecurityGroupRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async createSecurityGroupRule(requestParameters: CreateSecurityGroupRuleOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSecurityGroupRuleResponse> {
        const response = await this.createSecurityGroupRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteSecurityGroupRuleRaw(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSecurityGroupRuleResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteSecurityGroupRuleRequestToJSON(requestParameters.deleteSecurityGroupRuleRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteSecurityGroupRule`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteSecurityGroupRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteSecurityGroupRule(requestParameters: DeleteSecurityGroupRuleOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSecurityGroupRuleResponse> {
        const response = await this.deleteSecurityGroupRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
