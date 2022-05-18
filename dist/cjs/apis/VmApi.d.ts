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
import { CreateVmsRequest, CreateVmsResponse, DeleteVmsRequest, DeleteVmsResponse, ReadAdminPasswordRequest, ReadAdminPasswordResponse, ReadConsoleOutputRequest, ReadConsoleOutputResponse, ReadVmTypesRequest, ReadVmTypesResponse, ReadVmsRequest, ReadVmsResponse, ReadVmsStateRequest, ReadVmsStateResponse, RebootVmsRequest, RebootVmsResponse, StartVmsRequest, StartVmsResponse, StopVmsRequest, StopVmsResponse, UpdateVmRequest, UpdateVmResponse } from '../models';
export interface CreateVmsOperationRequest {
    createVmsRequest?: CreateVmsRequest;
}
export interface DeleteVmsOperationRequest {
    deleteVmsRequest?: DeleteVmsRequest;
}
export interface ReadAdminPasswordOperationRequest {
    readAdminPasswordRequest?: ReadAdminPasswordRequest;
}
export interface ReadConsoleOutputOperationRequest {
    readConsoleOutputRequest?: ReadConsoleOutputRequest;
}
export interface ReadVmTypesOperationRequest {
    readVmTypesRequest?: ReadVmTypesRequest;
}
export interface ReadVmsOperationRequest {
    readVmsRequest?: ReadVmsRequest;
}
export interface ReadVmsStateOperationRequest {
    readVmsStateRequest?: ReadVmsStateRequest;
}
export interface RebootVmsOperationRequest {
    rebootVmsRequest?: RebootVmsRequest;
}
export interface StartVmsOperationRequest {
    startVmsRequest?: StartVmsRequest;
}
export interface StopVmsOperationRequest {
    stopVmsRequest?: StopVmsRequest;
}
export interface UpdateVmOperationRequest {
    updateVmRequest?: UpdateVmRequest;
}
/**
 * VmApi - interface
 *
 * @export
 * @interface VmApiInterface
 */
export interface VmApiInterface {
    /**
     *
     * @param {CreateVmsRequest} [createVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    createVmsRaw(requestParameters: CreateVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmsResponse>>;
    /**
     */
    createVms(requestParameters: CreateVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmsResponse>;
    /**
     *
     * @param {DeleteVmsRequest} [deleteVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    deleteVmsRaw(requestParameters: DeleteVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmsResponse>>;
    /**
     */
    deleteVms(requestParameters: DeleteVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmsResponse>;
    /**
     *
     * @param {ReadAdminPasswordRequest} [readAdminPasswordRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    readAdminPasswordRaw(requestParameters: ReadAdminPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadAdminPasswordResponse>>;
    /**
     */
    readAdminPassword(requestParameters: ReadAdminPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadAdminPasswordResponse>;
    /**
     *
     * @param {ReadConsoleOutputRequest} [readConsoleOutputRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    readConsoleOutputRaw(requestParameters: ReadConsoleOutputOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadConsoleOutputResponse>>;
    /**
     */
    readConsoleOutput(requestParameters: ReadConsoleOutputOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadConsoleOutputResponse>;
    /**
     *
     * @param {ReadVmTypesRequest} [readVmTypesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    readVmTypesRaw(requestParameters: ReadVmTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmTypesResponse>>;
    /**
     */
    readVmTypes(requestParameters: ReadVmTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmTypesResponse>;
    /**
     *
     * @param {ReadVmsRequest} [readVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    readVmsRaw(requestParameters: ReadVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmsResponse>>;
    /**
     */
    readVms(requestParameters: ReadVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmsResponse>;
    /**
     *
     * @param {ReadVmsStateRequest} [readVmsStateRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    readVmsStateRaw(requestParameters: ReadVmsStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmsStateResponse>>;
    /**
     */
    readVmsState(requestParameters: ReadVmsStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmsStateResponse>;
    /**
     *
     * @param {RebootVmsRequest} [rebootVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    rebootVmsRaw(requestParameters: RebootVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<RebootVmsResponse>>;
    /**
     */
    rebootVms(requestParameters: RebootVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<RebootVmsResponse>;
    /**
     *
     * @param {StartVmsRequest} [startVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    startVmsRaw(requestParameters: StartVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartVmsResponse>>;
    /**
     */
    startVms(requestParameters: StartVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartVmsResponse>;
    /**
     *
     * @param {StopVmsRequest} [stopVmsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    stopVmsRaw(requestParameters: StopVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StopVmsResponse>>;
    /**
     */
    stopVms(requestParameters: StopVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StopVmsResponse>;
    /**
     *
     * @param {UpdateVmRequest} [updateVmRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmApiInterface
     */
    updateVmRaw(requestParameters: UpdateVmOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmResponse>>;
    /**
     */
    updateVm(requestParameters: UpdateVmOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmResponse>;
}
/**
 *
 */
export declare class VmApi extends runtime.BaseAPI implements VmApiInterface {
    /**
     */
    createVmsRaw(requestParameters: CreateVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmsResponse>>;
    /**
     */
    createVms(requestParameters?: CreateVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmsResponse>;
    /**
     */
    deleteVmsRaw(requestParameters: DeleteVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmsResponse>>;
    /**
     */
    deleteVms(requestParameters?: DeleteVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmsResponse>;
    /**
     */
    readAdminPasswordRaw(requestParameters: ReadAdminPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadAdminPasswordResponse>>;
    /**
     */
    readAdminPassword(requestParameters?: ReadAdminPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadAdminPasswordResponse>;
    /**
     */
    readConsoleOutputRaw(requestParameters: ReadConsoleOutputOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadConsoleOutputResponse>>;
    /**
     */
    readConsoleOutput(requestParameters?: ReadConsoleOutputOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadConsoleOutputResponse>;
    /**
     */
    readVmTypesRaw(requestParameters: ReadVmTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmTypesResponse>>;
    /**
     */
    readVmTypes(requestParameters?: ReadVmTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmTypesResponse>;
    /**
     */
    readVmsRaw(requestParameters: ReadVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmsResponse>>;
    /**
     */
    readVms(requestParameters?: ReadVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmsResponse>;
    /**
     */
    readVmsStateRaw(requestParameters: ReadVmsStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmsStateResponse>>;
    /**
     */
    readVmsState(requestParameters?: ReadVmsStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmsStateResponse>;
    /**
     */
    rebootVmsRaw(requestParameters: RebootVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<RebootVmsResponse>>;
    /**
     */
    rebootVms(requestParameters?: RebootVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<RebootVmsResponse>;
    /**
     */
    startVmsRaw(requestParameters: StartVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartVmsResponse>>;
    /**
     */
    startVms(requestParameters?: StartVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartVmsResponse>;
    /**
     */
    stopVmsRaw(requestParameters: StopVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StopVmsResponse>>;
    /**
     */
    stopVms(requestParameters?: StopVmsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StopVmsResponse>;
    /**
     */
    updateVmRaw(requestParameters: UpdateVmOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmResponse>>;
    /**
     */
    updateVm(requestParameters?: UpdateVmOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmResponse>;
}
