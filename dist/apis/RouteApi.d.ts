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
import { CreateRouteRequest, CreateRouteResponse, DeleteRouteRequest, DeleteRouteResponse, UpdateRouteRequest, UpdateRouteResponse } from '../models';
export interface CreateRouteOperationRequest {
    createRouteRequest?: CreateRouteRequest;
}
export interface DeleteRouteOperationRequest {
    deleteRouteRequest?: DeleteRouteRequest;
}
export interface UpdateRouteOperationRequest {
    updateRouteRequest?: UpdateRouteRequest;
}
/**
 * RouteApi - interface
 *
 * @export
 * @interface RouteApiInterface
 */
export interface RouteApiInterface {
    /**
     *
     * @param {CreateRouteRequest} [createRouteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteApiInterface
     */
    createRouteRaw(requestParameters: CreateRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateRouteResponse>>;
    /**
     */
    createRoute(requestParameters: CreateRouteOperationRequest, initOverrides?: RequestInit): Promise<CreateRouteResponse>;
    /**
     *
     * @param {DeleteRouteRequest} [deleteRouteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteApiInterface
     */
    deleteRouteRaw(requestParameters: DeleteRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteRouteResponse>>;
    /**
     */
    deleteRoute(requestParameters: DeleteRouteOperationRequest, initOverrides?: RequestInit): Promise<DeleteRouteResponse>;
    /**
     *
     * @param {UpdateRouteRequest} [updateRouteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteApiInterface
     */
    updateRouteRaw(requestParameters: UpdateRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateRouteResponse>>;
    /**
     */
    updateRoute(requestParameters: UpdateRouteOperationRequest, initOverrides?: RequestInit): Promise<UpdateRouteResponse>;
}
/**
 *
 */
export declare class RouteApi extends runtime.BaseAPI implements RouteApiInterface {
    /**
     */
    createRouteRaw(requestParameters: CreateRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateRouteResponse>>;
    /**
     */
    createRoute(requestParameters?: CreateRouteOperationRequest, initOverrides?: RequestInit): Promise<CreateRouteResponse>;
    /**
     */
    deleteRouteRaw(requestParameters: DeleteRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteRouteResponse>>;
    /**
     */
    deleteRoute(requestParameters?: DeleteRouteOperationRequest, initOverrides?: RequestInit): Promise<DeleteRouteResponse>;
    /**
     */
    updateRouteRaw(requestParameters: UpdateRouteOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateRouteResponse>>;
    /**
     */
    updateRoute(requestParameters?: UpdateRouteOperationRequest, initOverrides?: RequestInit): Promise<UpdateRouteResponse>;
}
