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
import { CreateLoadBalancerRequest, CreateLoadBalancerResponse, CreateLoadBalancerTagsRequest, CreateLoadBalancerTagsResponse, DeleteLoadBalancerRequest, DeleteLoadBalancerResponse, DeleteLoadBalancerTagsRequest, DeleteLoadBalancerTagsResponse, DeregisterVmsInLoadBalancerRequest, DeregisterVmsInLoadBalancerResponse, LinkLoadBalancerBackendMachinesRequest, LinkLoadBalancerBackendMachinesResponse, ReadLoadBalancerTagsRequest, ReadLoadBalancerTagsResponse, ReadLoadBalancersRequest, ReadLoadBalancersResponse, ReadVmsHealthRequest, ReadVmsHealthResponse, RegisterVmsInLoadBalancerRequest, RegisterVmsInLoadBalancerResponse, UnlinkLoadBalancerBackendMachinesRequest, UnlinkLoadBalancerBackendMachinesResponse, UpdateLoadBalancerRequest, UpdateLoadBalancerResponse } from '../models';
export interface CreateLoadBalancerOperationRequest {
    createLoadBalancerRequest?: CreateLoadBalancerRequest;
}
export interface CreateLoadBalancerTagsOperationRequest {
    createLoadBalancerTagsRequest?: CreateLoadBalancerTagsRequest;
}
export interface DeleteLoadBalancerOperationRequest {
    deleteLoadBalancerRequest?: DeleteLoadBalancerRequest;
}
export interface DeleteLoadBalancerTagsOperationRequest {
    deleteLoadBalancerTagsRequest?: DeleteLoadBalancerTagsRequest;
}
export interface DeregisterVmsInLoadBalancerOperationRequest {
    deregisterVmsInLoadBalancerRequest?: DeregisterVmsInLoadBalancerRequest;
}
export interface LinkLoadBalancerBackendMachinesOperationRequest {
    linkLoadBalancerBackendMachinesRequest?: LinkLoadBalancerBackendMachinesRequest;
}
export interface ReadLoadBalancerTagsOperationRequest {
    readLoadBalancerTagsRequest?: ReadLoadBalancerTagsRequest;
}
export interface ReadLoadBalancersOperationRequest {
    readLoadBalancersRequest?: ReadLoadBalancersRequest;
}
export interface ReadVmsHealthOperationRequest {
    readVmsHealthRequest?: ReadVmsHealthRequest;
}
export interface RegisterVmsInLoadBalancerOperationRequest {
    registerVmsInLoadBalancerRequest?: RegisterVmsInLoadBalancerRequest;
}
export interface UnlinkLoadBalancerBackendMachinesOperationRequest {
    unlinkLoadBalancerBackendMachinesRequest?: UnlinkLoadBalancerBackendMachinesRequest;
}
export interface UpdateLoadBalancerOperationRequest {
    updateLoadBalancerRequest?: UpdateLoadBalancerRequest;
}
/**
 * LoadBalancerApi - interface
 *
 * @export
 * @interface LoadBalancerApiInterface
 */
export interface LoadBalancerApiInterface {
    /**
     *
     * @param {CreateLoadBalancerRequest} [createLoadBalancerRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    createLoadBalancerRaw(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerResponse>>;
    /**
     */
    createLoadBalancer(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerResponse>;
    /**
     *
     * @param {CreateLoadBalancerTagsRequest} [createLoadBalancerTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    createLoadBalancerTagsRaw(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerTagsResponse>>;
    /**
     */
    createLoadBalancerTags(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerTagsResponse>;
    /**
     *
     * @param {DeleteLoadBalancerRequest} [deleteLoadBalancerRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deleteLoadBalancerRaw(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerResponse>>;
    /**
     */
    deleteLoadBalancer(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerResponse>;
    /**
     *
     * @param {DeleteLoadBalancerTagsRequest} [deleteLoadBalancerTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deleteLoadBalancerTagsRaw(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerTagsResponse>>;
    /**
     */
    deleteLoadBalancerTags(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerTagsResponse>;
    /**
     *
     * @param {DeregisterVmsInLoadBalancerRequest} [deregisterVmsInLoadBalancerRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    deregisterVmsInLoadBalancerRaw(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeregisterVmsInLoadBalancerResponse>>;
    /**
     */
    deregisterVmsInLoadBalancer(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeregisterVmsInLoadBalancerResponse>;
    /**
     *
     * @param {LinkLoadBalancerBackendMachinesRequest} [linkLoadBalancerBackendMachinesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    linkLoadBalancerBackendMachinesRaw(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkLoadBalancerBackendMachinesResponse>>;
    /**
     */
    linkLoadBalancerBackendMachines(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<LinkLoadBalancerBackendMachinesResponse>;
    /**
     *
     * @param {ReadLoadBalancerTagsRequest} [readLoadBalancerTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readLoadBalancerTagsRaw(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancerTagsResponse>>;
    /**
     */
    readLoadBalancerTags(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancerTagsResponse>;
    /**
     *
     * @param {ReadLoadBalancersRequest} [readLoadBalancersRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readLoadBalancersRaw(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancersResponse>>;
    /**
     */
    readLoadBalancers(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancersResponse>;
    /**
     *
     * @param {ReadVmsHealthRequest} [readVmsHealthRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    readVmsHealthRaw(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVmsHealthResponse>>;
    /**
     */
    readVmsHealth(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<ReadVmsHealthResponse>;
    /**
     *
     * @param {RegisterVmsInLoadBalancerRequest} [registerVmsInLoadBalancerRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    registerVmsInLoadBalancerRaw(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RegisterVmsInLoadBalancerResponse>>;
    /**
     */
    registerVmsInLoadBalancer(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<RegisterVmsInLoadBalancerResponse>;
    /**
     *
     * @param {UnlinkLoadBalancerBackendMachinesRequest} [unlinkLoadBalancerBackendMachinesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    unlinkLoadBalancerBackendMachinesRaw(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkLoadBalancerBackendMachinesResponse>>;
    /**
     */
    unlinkLoadBalancerBackendMachines(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<UnlinkLoadBalancerBackendMachinesResponse>;
    /**
     *
     * @param {UpdateLoadBalancerRequest} [updateLoadBalancerRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerApiInterface
     */
    updateLoadBalancerRaw(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateLoadBalancerResponse>>;
    /**
     */
    updateLoadBalancer(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<UpdateLoadBalancerResponse>;
}
/**
 *
 */
export declare class LoadBalancerApi extends runtime.BaseAPI implements LoadBalancerApiInterface {
    /**
     */
    createLoadBalancerRaw(requestParameters: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerResponse>>;
    /**
     */
    createLoadBalancer(requestParameters?: CreateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerResponse>;
    /**
     */
    createLoadBalancerTagsRaw(requestParameters: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateLoadBalancerTagsResponse>>;
    /**
     */
    createLoadBalancerTags(requestParameters?: CreateLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<CreateLoadBalancerTagsResponse>;
    /**
     */
    deleteLoadBalancerRaw(requestParameters: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerResponse>>;
    /**
     */
    deleteLoadBalancer(requestParameters?: DeleteLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerResponse>;
    /**
     */
    deleteLoadBalancerTagsRaw(requestParameters: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteLoadBalancerTagsResponse>>;
    /**
     */
    deleteLoadBalancerTags(requestParameters?: DeleteLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<DeleteLoadBalancerTagsResponse>;
    /**
     */
    deregisterVmsInLoadBalancerRaw(requestParameters: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeregisterVmsInLoadBalancerResponse>>;
    /**
     */
    deregisterVmsInLoadBalancer(requestParameters?: DeregisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<DeregisterVmsInLoadBalancerResponse>;
    /**
     */
    linkLoadBalancerBackendMachinesRaw(requestParameters: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkLoadBalancerBackendMachinesResponse>>;
    /**
     */
    linkLoadBalancerBackendMachines(requestParameters?: LinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<LinkLoadBalancerBackendMachinesResponse>;
    /**
     */
    readLoadBalancerTagsRaw(requestParameters: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancerTagsResponse>>;
    /**
     */
    readLoadBalancerTags(requestParameters?: ReadLoadBalancerTagsOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancerTagsResponse>;
    /**
     */
    readLoadBalancersRaw(requestParameters: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadLoadBalancersResponse>>;
    /**
     */
    readLoadBalancers(requestParameters?: ReadLoadBalancersOperationRequest, initOverrides?: RequestInit): Promise<ReadLoadBalancersResponse>;
    /**
     */
    readVmsHealthRaw(requestParameters: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadVmsHealthResponse>>;
    /**
     */
    readVmsHealth(requestParameters?: ReadVmsHealthOperationRequest, initOverrides?: RequestInit): Promise<ReadVmsHealthResponse>;
    /**
     */
    registerVmsInLoadBalancerRaw(requestParameters: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RegisterVmsInLoadBalancerResponse>>;
    /**
     */
    registerVmsInLoadBalancer(requestParameters?: RegisterVmsInLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<RegisterVmsInLoadBalancerResponse>;
    /**
     */
    unlinkLoadBalancerBackendMachinesRaw(requestParameters: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkLoadBalancerBackendMachinesResponse>>;
    /**
     */
    unlinkLoadBalancerBackendMachines(requestParameters?: UnlinkLoadBalancerBackendMachinesOperationRequest, initOverrides?: RequestInit): Promise<UnlinkLoadBalancerBackendMachinesResponse>;
    /**
     */
    updateLoadBalancerRaw(requestParameters: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateLoadBalancerResponse>>;
    /**
     */
    updateLoadBalancer(requestParameters?: UpdateLoadBalancerOperationRequest, initOverrides?: RequestInit): Promise<UpdateLoadBalancerResponse>;
}
