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
    ReadSubregionsRequest,
    ReadSubregionsRequestFromJSON,
    ReadSubregionsRequestToJSON,
    ReadSubregionsResponse,
    ReadSubregionsResponseFromJSON,
    ReadSubregionsResponseToJSON,
} from '../models';

export interface ReadSubregionsOperationRequest {
    readSubregionsRequest?: ReadSubregionsRequest;
}

/**
 * SubregionApi - interface
 * 
 * @export
 * @interface SubregionApiInterface
 */
export interface SubregionApiInterface {
    /**
     * 
     * @param {ReadSubregionsRequest} [readSubregionsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubregionApiInterface
     */
    readSubregionsRaw(requestParameters: ReadSubregionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSubregionsResponse>>;

    /**
     */
    readSubregions(requestParameters: ReadSubregionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSubregionsResponse>;

}

/**
 * 
 */
export class SubregionApi extends runtime.BaseAPI implements SubregionApiInterface {

    /**
     */
    async readSubregionsRaw(requestParameters: ReadSubregionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSubregionsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadSubregionsRequestToJSON(requestParameters.readSubregionsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadSubregions`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadSubregionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readSubregions(requestParameters: ReadSubregionsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSubregionsResponse> {
        const response = await this.readSubregionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
