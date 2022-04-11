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
import { CreateFlexibleGpuRequest, CreateFlexibleGpuResponse, DeleteFlexibleGpuRequest, DeleteFlexibleGpuResponse, LinkFlexibleGpuRequest, LinkFlexibleGpuResponse, ReadFlexibleGpuCatalogRequest, ReadFlexibleGpuCatalogResponse, ReadFlexibleGpusRequest, ReadFlexibleGpusResponse, UnlinkFlexibleGpuRequest, UnlinkFlexibleGpuResponse, UpdateFlexibleGpuRequest, UpdateFlexibleGpuResponse } from '../models';
export interface CreateFlexibleGpuOperationRequest {
    createFlexibleGpuRequest?: CreateFlexibleGpuRequest;
}
export interface DeleteFlexibleGpuOperationRequest {
    deleteFlexibleGpuRequest?: DeleteFlexibleGpuRequest;
}
export interface LinkFlexibleGpuOperationRequest {
    linkFlexibleGpuRequest?: LinkFlexibleGpuRequest;
}
export interface ReadFlexibleGpuCatalogOperationRequest {
    readFlexibleGpuCatalogRequest?: ReadFlexibleGpuCatalogRequest;
}
export interface ReadFlexibleGpusOperationRequest {
    readFlexibleGpusRequest?: ReadFlexibleGpusRequest;
}
export interface UnlinkFlexibleGpuOperationRequest {
    unlinkFlexibleGpuRequest?: UnlinkFlexibleGpuRequest;
}
export interface UpdateFlexibleGpuOperationRequest {
    updateFlexibleGpuRequest?: UpdateFlexibleGpuRequest;
}
/**
 * FlexibleGpuApi - interface
 *
 * @export
 * @interface FlexibleGpuApiInterface
 */
export interface FlexibleGpuApiInterface {
    /**
     *
     * @param {CreateFlexibleGpuRequest} [createFlexibleGpuRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    createFlexibleGpuRaw(requestParameters: CreateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateFlexibleGpuResponse>>;
    /**
     */
    createFlexibleGpu(requestParameters: CreateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<CreateFlexibleGpuResponse>;
    /**
     *
     * @param {DeleteFlexibleGpuRequest} [deleteFlexibleGpuRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    deleteFlexibleGpuRaw(requestParameters: DeleteFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteFlexibleGpuResponse>>;
    /**
     */
    deleteFlexibleGpu(requestParameters: DeleteFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<DeleteFlexibleGpuResponse>;
    /**
     *
     * @param {LinkFlexibleGpuRequest} [linkFlexibleGpuRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    linkFlexibleGpuRaw(requestParameters: LinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkFlexibleGpuResponse>>;
    /**
     */
    linkFlexibleGpu(requestParameters: LinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<LinkFlexibleGpuResponse>;
    /**
     *
     * @param {ReadFlexibleGpuCatalogRequest} [readFlexibleGpuCatalogRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    readFlexibleGpuCatalogRaw(requestParameters: ReadFlexibleGpuCatalogOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadFlexibleGpuCatalogResponse>>;
    /**
     */
    readFlexibleGpuCatalog(requestParameters: ReadFlexibleGpuCatalogOperationRequest, initOverrides?: RequestInit): Promise<ReadFlexibleGpuCatalogResponse>;
    /**
     *
     * @param {ReadFlexibleGpusRequest} [readFlexibleGpusRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    readFlexibleGpusRaw(requestParameters: ReadFlexibleGpusOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadFlexibleGpusResponse>>;
    /**
     */
    readFlexibleGpus(requestParameters: ReadFlexibleGpusOperationRequest, initOverrides?: RequestInit): Promise<ReadFlexibleGpusResponse>;
    /**
     *
     * @param {UnlinkFlexibleGpuRequest} [unlinkFlexibleGpuRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    unlinkFlexibleGpuRaw(requestParameters: UnlinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkFlexibleGpuResponse>>;
    /**
     */
    unlinkFlexibleGpu(requestParameters: UnlinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<UnlinkFlexibleGpuResponse>;
    /**
     *
     * @param {UpdateFlexibleGpuRequest} [updateFlexibleGpuRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlexibleGpuApiInterface
     */
    updateFlexibleGpuRaw(requestParameters: UpdateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateFlexibleGpuResponse>>;
    /**
     */
    updateFlexibleGpu(requestParameters: UpdateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<UpdateFlexibleGpuResponse>;
}
/**
 *
 */
export declare class FlexibleGpuApi extends runtime.BaseAPI implements FlexibleGpuApiInterface {
    /**
     */
    createFlexibleGpuRaw(requestParameters: CreateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateFlexibleGpuResponse>>;
    /**
     */
    createFlexibleGpu(requestParameters?: CreateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<CreateFlexibleGpuResponse>;
    /**
     */
    deleteFlexibleGpuRaw(requestParameters: DeleteFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteFlexibleGpuResponse>>;
    /**
     */
    deleteFlexibleGpu(requestParameters?: DeleteFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<DeleteFlexibleGpuResponse>;
    /**
     */
    linkFlexibleGpuRaw(requestParameters: LinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LinkFlexibleGpuResponse>>;
    /**
     */
    linkFlexibleGpu(requestParameters?: LinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<LinkFlexibleGpuResponse>;
    /**
     */
    readFlexibleGpuCatalogRaw(requestParameters: ReadFlexibleGpuCatalogOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadFlexibleGpuCatalogResponse>>;
    /**
     */
    readFlexibleGpuCatalog(requestParameters?: ReadFlexibleGpuCatalogOperationRequest, initOverrides?: RequestInit): Promise<ReadFlexibleGpuCatalogResponse>;
    /**
     */
    readFlexibleGpusRaw(requestParameters: ReadFlexibleGpusOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadFlexibleGpusResponse>>;
    /**
     */
    readFlexibleGpus(requestParameters?: ReadFlexibleGpusOperationRequest, initOverrides?: RequestInit): Promise<ReadFlexibleGpusResponse>;
    /**
     */
    unlinkFlexibleGpuRaw(requestParameters: UnlinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnlinkFlexibleGpuResponse>>;
    /**
     */
    unlinkFlexibleGpu(requestParameters?: UnlinkFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<UnlinkFlexibleGpuResponse>;
    /**
     */
    updateFlexibleGpuRaw(requestParameters: UpdateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateFlexibleGpuResponse>>;
    /**
     */
    updateFlexibleGpu(requestParameters?: UpdateFlexibleGpuOperationRequest, initOverrides?: RequestInit): Promise<UpdateFlexibleGpuResponse>;
}
