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
import { CreateInternetServiceRequest, CreateInternetServiceResponse, DeleteInternetServiceRequest, DeleteInternetServiceResponse, LinkInternetServiceRequest, LinkInternetServiceResponse, ReadInternetServicesRequest, ReadInternetServicesResponse, UnlinkInternetServiceRequest, UnlinkInternetServiceResponse } from '../models';
export interface CreateInternetServiceOperationRequest {
    createInternetServiceRequest?: CreateInternetServiceRequest;
}
export interface DeleteInternetServiceOperationRequest {
    deleteInternetServiceRequest?: DeleteInternetServiceRequest;
}
export interface LinkInternetServiceOperationRequest {
    linkInternetServiceRequest?: LinkInternetServiceRequest;
}
export interface ReadInternetServicesOperationRequest {
    readInternetServicesRequest?: ReadInternetServicesRequest;
}
export interface UnlinkInternetServiceOperationRequest {
    unlinkInternetServiceRequest?: UnlinkInternetServiceRequest;
}
/**
 * InternetServiceApi - interface
 *
 * @export
 * @interface InternetServiceApiInterface
 */
export interface InternetServiceApiInterface {
    /**
     *
     * @param {CreateInternetServiceRequest} [createInternetServiceRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternetServiceApiInterface
     */
    createInternetServiceRaw(requestParameters: CreateInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateInternetServiceResponse>>;
    /**
     */
    createInternetService(requestParameters: CreateInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateInternetServiceResponse>;
    /**
     *
     * @param {DeleteInternetServiceRequest} [deleteInternetServiceRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternetServiceApiInterface
     */
    deleteInternetServiceRaw(requestParameters: DeleteInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteInternetServiceResponse>>;
    /**
     */
    deleteInternetService(requestParameters: DeleteInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteInternetServiceResponse>;
    /**
     *
     * @param {LinkInternetServiceRequest} [linkInternetServiceRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternetServiceApiInterface
     */
    linkInternetServiceRaw(requestParameters: LinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkInternetServiceResponse>>;
    /**
     */
    linkInternetService(requestParameters: LinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkInternetServiceResponse>;
    /**
     *
     * @param {ReadInternetServicesRequest} [readInternetServicesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternetServiceApiInterface
     */
    readInternetServicesRaw(requestParameters: ReadInternetServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadInternetServicesResponse>>;
    /**
     */
    readInternetServices(requestParameters: ReadInternetServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadInternetServicesResponse>;
    /**
     *
     * @param {UnlinkInternetServiceRequest} [unlinkInternetServiceRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternetServiceApiInterface
     */
    unlinkInternetServiceRaw(requestParameters: UnlinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkInternetServiceResponse>>;
    /**
     */
    unlinkInternetService(requestParameters: UnlinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkInternetServiceResponse>;
}
/**
 *
 */
export declare class InternetServiceApi extends runtime.BaseAPI implements InternetServiceApiInterface {
    /**
     */
    createInternetServiceRaw(requestParameters: CreateInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateInternetServiceResponse>>;
    /**
     */
    createInternetService(requestParameters?: CreateInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateInternetServiceResponse>;
    /**
     */
    deleteInternetServiceRaw(requestParameters: DeleteInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteInternetServiceResponse>>;
    /**
     */
    deleteInternetService(requestParameters?: DeleteInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteInternetServiceResponse>;
    /**
     */
    linkInternetServiceRaw(requestParameters: LinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkInternetServiceResponse>>;
    /**
     */
    linkInternetService(requestParameters?: LinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkInternetServiceResponse>;
    /**
     */
    readInternetServicesRaw(requestParameters: ReadInternetServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadInternetServicesResponse>>;
    /**
     */
    readInternetServices(requestParameters?: ReadInternetServicesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadInternetServicesResponse>;
    /**
     */
    unlinkInternetServiceRaw(requestParameters: UnlinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkInternetServiceResponse>>;
    /**
     */
    unlinkInternetService(requestParameters?: UnlinkInternetServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkInternetServiceResponse>;
}