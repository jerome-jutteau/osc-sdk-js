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
import { CreateVpnConnectionRequest, CreateVpnConnectionResponse, CreateVpnConnectionRouteRequest, CreateVpnConnectionRouteResponse, DeleteVpnConnectionRequest, DeleteVpnConnectionResponse, DeleteVpnConnectionRouteRequest, DeleteVpnConnectionRouteResponse, ReadVpnConnectionsRequest, ReadVpnConnectionsResponse, UpdateVpnConnectionRequest, UpdateVpnConnectionResponse } from '../models';
export interface CreateVpnConnectionOperationRequest {
    createVpnConnectionRequest?: CreateVpnConnectionRequest;
}
export interface CreateVpnConnectionRouteOperationRequest {
    createVpnConnectionRouteRequest?: CreateVpnConnectionRouteRequest;
}
export interface DeleteVpnConnectionOperationRequest {
    deleteVpnConnectionRequest?: DeleteVpnConnectionRequest;
}
export interface DeleteVpnConnectionRouteOperationRequest {
    deleteVpnConnectionRouteRequest?: DeleteVpnConnectionRouteRequest;
}
export interface ReadVpnConnectionsOperationRequest {
    readVpnConnectionsRequest?: ReadVpnConnectionsRequest;
}
export interface UpdateVpnConnectionOperationRequest {
    updateVpnConnectionRequest?: UpdateVpnConnectionRequest;
}
/**
 * VpnConnectionApi - interface
 *
 * @export
 * @interface VpnConnectionApiInterface
 */
export interface VpnConnectionApiInterface {
    /**
     *
     * @param {CreateVpnConnectionRequest} [createVpnConnectionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    createVpnConnectionRaw(requestParameters: CreateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVpnConnectionResponse>>;
    /**
     */
    createVpnConnection(requestParameters: CreateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVpnConnectionResponse>;
    /**
     *
     * @param {CreateVpnConnectionRouteRequest} [createVpnConnectionRouteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    createVpnConnectionRouteRaw(requestParameters: CreateVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVpnConnectionRouteResponse>>;
    /**
     */
    createVpnConnectionRoute(requestParameters: CreateVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVpnConnectionRouteResponse>;
    /**
     *
     * @param {DeleteVpnConnectionRequest} [deleteVpnConnectionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    deleteVpnConnectionRaw(requestParameters: DeleteVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVpnConnectionResponse>>;
    /**
     */
    deleteVpnConnection(requestParameters: DeleteVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVpnConnectionResponse>;
    /**
     *
     * @param {DeleteVpnConnectionRouteRequest} [deleteVpnConnectionRouteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    deleteVpnConnectionRouteRaw(requestParameters: DeleteVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVpnConnectionRouteResponse>>;
    /**
     */
    deleteVpnConnectionRoute(requestParameters: DeleteVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVpnConnectionRouteResponse>;
    /**
     *
     * @param {ReadVpnConnectionsRequest} [readVpnConnectionsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    readVpnConnectionsRaw(requestParameters: ReadVpnConnectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVpnConnectionsResponse>>;
    /**
     */
    readVpnConnections(requestParameters: ReadVpnConnectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVpnConnectionsResponse>;
    /**
     *
     * @param {UpdateVpnConnectionRequest} [updateVpnConnectionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VpnConnectionApiInterface
     */
    updateVpnConnectionRaw(requestParameters: UpdateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVpnConnectionResponse>>;
    /**
     */
    updateVpnConnection(requestParameters: UpdateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVpnConnectionResponse>;
}
/**
 *
 */
export declare class VpnConnectionApi extends runtime.BaseAPI implements VpnConnectionApiInterface {
    /**
     */
    createVpnConnectionRaw(requestParameters: CreateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVpnConnectionResponse>>;
    /**
     */
    createVpnConnection(requestParameters?: CreateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVpnConnectionResponse>;
    /**
     */
    createVpnConnectionRouteRaw(requestParameters: CreateVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVpnConnectionRouteResponse>>;
    /**
     */
    createVpnConnectionRoute(requestParameters?: CreateVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVpnConnectionRouteResponse>;
    /**
     */
    deleteVpnConnectionRaw(requestParameters: DeleteVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVpnConnectionResponse>>;
    /**
     */
    deleteVpnConnection(requestParameters?: DeleteVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVpnConnectionResponse>;
    /**
     */
    deleteVpnConnectionRouteRaw(requestParameters: DeleteVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVpnConnectionRouteResponse>>;
    /**
     */
    deleteVpnConnectionRoute(requestParameters?: DeleteVpnConnectionRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVpnConnectionRouteResponse>;
    /**
     */
    readVpnConnectionsRaw(requestParameters: ReadVpnConnectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVpnConnectionsResponse>>;
    /**
     */
    readVpnConnections(requestParameters?: ReadVpnConnectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVpnConnectionsResponse>;
    /**
     */
    updateVpnConnectionRaw(requestParameters: UpdateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVpnConnectionResponse>>;
    /**
     */
    updateVpnConnection(requestParameters?: UpdateVpnConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVpnConnectionResponse>;
}
