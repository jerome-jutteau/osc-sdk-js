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
import { CreateKeypairRequest, CreateKeypairResponse, DeleteKeypairRequest, DeleteKeypairResponse, ReadKeypairsRequest, ReadKeypairsResponse } from '../models';
export interface CreateKeypairOperationRequest {
    createKeypairRequest?: CreateKeypairRequest;
}
export interface DeleteKeypairOperationRequest {
    deleteKeypairRequest?: DeleteKeypairRequest;
}
export interface ReadKeypairsOperationRequest {
    readKeypairsRequest?: ReadKeypairsRequest;
}
/**
 * KeypairApi - interface
 *
 * @export
 * @interface KeypairApiInterface
 */
export interface KeypairApiInterface {
    /**
     *
     * @param {CreateKeypairRequest} [createKeypairRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeypairApiInterface
     */
    createKeypairRaw(requestParameters: CreateKeypairOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateKeypairResponse>>;
    /**
     */
    createKeypair(requestParameters: CreateKeypairOperationRequest, initOverrides?: RequestInit): Promise<CreateKeypairResponse>;
    /**
     *
     * @param {DeleteKeypairRequest} [deleteKeypairRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeypairApiInterface
     */
    deleteKeypairRaw(requestParameters: DeleteKeypairOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteKeypairResponse>>;
    /**
     */
    deleteKeypair(requestParameters: DeleteKeypairOperationRequest, initOverrides?: RequestInit): Promise<DeleteKeypairResponse>;
    /**
     *
     * @param {ReadKeypairsRequest} [readKeypairsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeypairApiInterface
     */
    readKeypairsRaw(requestParameters: ReadKeypairsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadKeypairsResponse>>;
    /**
     */
    readKeypairs(requestParameters: ReadKeypairsOperationRequest, initOverrides?: RequestInit): Promise<ReadKeypairsResponse>;
}
/**
 *
 */
export declare class KeypairApi extends runtime.BaseAPI implements KeypairApiInterface {
    /**
     */
    createKeypairRaw(requestParameters: CreateKeypairOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateKeypairResponse>>;
    /**
     */
    createKeypair(requestParameters?: CreateKeypairOperationRequest, initOverrides?: RequestInit): Promise<CreateKeypairResponse>;
    /**
     */
    deleteKeypairRaw(requestParameters: DeleteKeypairOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteKeypairResponse>>;
    /**
     */
    deleteKeypair(requestParameters?: DeleteKeypairOperationRequest, initOverrides?: RequestInit): Promise<DeleteKeypairResponse>;
    /**
     */
    readKeypairsRaw(requestParameters: ReadKeypairsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadKeypairsResponse>>;
    /**
     */
    readKeypairs(requestParameters?: ReadKeypairsOperationRequest, initOverrides?: RequestInit): Promise<ReadKeypairsResponse>;
}