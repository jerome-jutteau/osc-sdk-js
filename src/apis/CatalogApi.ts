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
    ReadCatalogRequest,
    ReadCatalogRequestFromJSON,
    ReadCatalogRequestToJSON,
    ReadCatalogResponse,
    ReadCatalogResponseFromJSON,
    ReadCatalogResponseToJSON,
} from '../models';

export interface ReadCatalogOperationRequest {
    readCatalogRequest?: ReadCatalogRequest;
}

/**
 * CatalogApi - interface
 * 
 * @export
 * @interface CatalogApiInterface
 */
export interface CatalogApiInterface {
    /**
     * 
     * @param {ReadCatalogRequest} [readCatalogRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApiInterface
     */
    readCatalogRaw(requestParameters: ReadCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCatalogResponse>>;

    /**
     */
    readCatalog(requestParameters: ReadCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCatalogResponse>;

}

/**
 * 
 */
export class CatalogApi extends runtime.BaseAPI implements CatalogApiInterface {

    /**
     */
    async readCatalogRaw(requestParameters: ReadCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCatalogResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadCatalogRequestToJSON(requestParameters.readCatalogRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadCatalog`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadCatalogResponseFromJSON(jsonValue));
    }

    /**
     */
    async readCatalog(requestParameters: ReadCatalogOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCatalogResponse> {
        const response = await this.readCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
