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
import { CreateCaRequest, CreateCaResponse, DeleteCaRequest, DeleteCaResponse, ReadCasRequest, ReadCasResponse, UpdateCaRequest, UpdateCaResponse } from '../models';
export interface CreateCaOperationRequest {
    createCaRequest?: CreateCaRequest;
}
export interface DeleteCaOperationRequest {
    deleteCaRequest?: DeleteCaRequest;
}
export interface ReadCasOperationRequest {
    readCasRequest?: ReadCasRequest;
}
export interface UpdateCaOperationRequest {
    updateCaRequest?: UpdateCaRequest;
}
/**
 * CaApi - interface
 *
 * @export
 * @interface CaApiInterface
 */
export interface CaApiInterface {
    /**
     *
     * @param {CreateCaRequest} [createCaRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    createCaRaw(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateCaResponse>>;
    /**
     */
    createCa(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateCaResponse>;
    /**
     *
     * @param {DeleteCaRequest} [deleteCaRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    deleteCaRaw(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteCaResponse>>;
    /**
     */
    deleteCa(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteCaResponse>;
    /**
     *
     * @param {ReadCasRequest} [readCasRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    readCasRaw(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCasResponse>>;
    /**
     */
    readCas(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCasResponse>;
    /**
     *
     * @param {UpdateCaRequest} [updateCaRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    updateCaRaw(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateCaResponse>>;
    /**
     */
    updateCa(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateCaResponse>;
}
/**
 *
 */
export declare class CaApi extends runtime.BaseAPI implements CaApiInterface {
    /**
     */
    createCaRaw(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateCaResponse>>;
    /**
     */
    createCa(requestParameters?: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateCaResponse>;
    /**
     */
    deleteCaRaw(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteCaResponse>>;
    /**
     */
    deleteCa(requestParameters?: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteCaResponse>;
    /**
     */
    readCasRaw(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCasResponse>>;
    /**
     */
    readCas(requestParameters?: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCasResponse>;
    /**
     */
    updateCaRaw(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateCaResponse>>;
    /**
     */
    updateCa(requestParameters?: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateCaResponse>;
}
