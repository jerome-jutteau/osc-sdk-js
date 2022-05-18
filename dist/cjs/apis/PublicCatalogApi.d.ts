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
import { ReadPublicCatalogRequest, ReadPublicCatalogResponse } from '../models';
export interface ReadPublicCatalogOperationRequest {
    readPublicCatalogRequest?: ReadPublicCatalogRequest;
}
/**
 * PublicCatalogApi - interface
 *
 * @export
 * @interface PublicCatalogApiInterface
 */
export interface PublicCatalogApiInterface {
    /**
     *
     * @param {ReadPublicCatalogRequest} [readPublicCatalogRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicCatalogApiInterface
     */
    readPublicCatalogRaw(requestParameters: ReadPublicCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadPublicCatalogResponse>>;
    /**
     */
    readPublicCatalog(requestParameters: ReadPublicCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadPublicCatalogResponse>;
}
/**
 *
 */
export declare class PublicCatalogApi extends runtime.BaseAPI implements PublicCatalogApiInterface {
    /**
     */
    readPublicCatalogRaw(requestParameters: ReadPublicCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadPublicCatalogResponse>>;
    /**
     */
    readPublicCatalog(requestParameters?: ReadPublicCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadPublicCatalogResponse>;
}
