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
import { CreateSubnetRequest, CreateSubnetResponse, DeleteSubnetRequest, DeleteSubnetResponse, ReadSubnetsRequest, ReadSubnetsResponse, UpdateSubnetRequest, UpdateSubnetResponse } from '../models';
export interface CreateSubnetOperationRequest {
    createSubnetRequest?: CreateSubnetRequest;
}
export interface DeleteSubnetOperationRequest {
    deleteSubnetRequest?: DeleteSubnetRequest;
}
export interface ReadSubnetsOperationRequest {
    readSubnetsRequest?: ReadSubnetsRequest;
}
export interface UpdateSubnetOperationRequest {
    updateSubnetRequest?: UpdateSubnetRequest;
}
/**
 * SubnetApi - interface
 *
 * @export
 * @interface SubnetApiInterface
 */
export interface SubnetApiInterface {
    /**
     *
     * @param {CreateSubnetRequest} [createSubnetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    createSubnetRaw(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSubnetResponse>>;
    /**
     */
    createSubnet(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<CreateSubnetResponse>;
    /**
     *
     * @param {DeleteSubnetRequest} [deleteSubnetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    deleteSubnetRaw(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSubnetResponse>>;
    /**
     */
    deleteSubnet(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<DeleteSubnetResponse>;
    /**
     *
     * @param {ReadSubnetsRequest} [readSubnetsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    readSubnetsRaw(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSubnetsResponse>>;
    /**
     */
    readSubnets(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<ReadSubnetsResponse>;
    /**
     *
     * @param {UpdateSubnetRequest} [updateSubnetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubnetApiInterface
     */
    updateSubnetRaw(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateSubnetResponse>>;
    /**
     */
    updateSubnet(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<UpdateSubnetResponse>;
}
/**
 *
 */
export declare class SubnetApi extends runtime.BaseAPI implements SubnetApiInterface {
    /**
     */
    createSubnetRaw(requestParameters: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSubnetResponse>>;
    /**
     */
    createSubnet(requestParameters?: CreateSubnetOperationRequest, initOverrides?: RequestInit): Promise<CreateSubnetResponse>;
    /**
     */
    deleteSubnetRaw(requestParameters: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSubnetResponse>>;
    /**
     */
    deleteSubnet(requestParameters?: DeleteSubnetOperationRequest, initOverrides?: RequestInit): Promise<DeleteSubnetResponse>;
    /**
     */
    readSubnetsRaw(requestParameters: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadSubnetsResponse>>;
    /**
     */
    readSubnets(requestParameters?: ReadSubnetsOperationRequest, initOverrides?: RequestInit): Promise<ReadSubnetsResponse>;
    /**
     */
    updateSubnetRaw(requestParameters: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateSubnetResponse>>;
    /**
     */
    updateSubnet(requestParameters?: UpdateSubnetOperationRequest, initOverrides?: RequestInit): Promise<UpdateSubnetResponse>;
}
