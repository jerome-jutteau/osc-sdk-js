/* tslint:disable */
/* eslint-disable */
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
import {
    DeleteExportTaskRequest,
    DeleteExportTaskRequestFromJSON,
    DeleteExportTaskRequestToJSON,
    DeleteExportTaskResponse,
    DeleteExportTaskResponseFromJSON,
    DeleteExportTaskResponseToJSON,
} from '../models';

export interface DeleteExportTaskOperationRequest {
    deleteExportTaskRequest?: DeleteExportTaskRequest;
}

/**
 * TaskApi - interface
 * 
 * @export
 * @interface TaskApiInterface
 */
export interface TaskApiInterface {
    /**
     * 
     * @param {DeleteExportTaskRequest} [deleteExportTaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiInterface
     */
    deleteExportTaskRaw(requestParameters: DeleteExportTaskOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteExportTaskResponse>>;

    /**
     */
    deleteExportTask(requestParameters: DeleteExportTaskOperationRequest, initOverrides?: RequestInit): Promise<DeleteExportTaskResponse>;

}

/**
 * 
 */
export class TaskApi extends runtime.BaseAPI implements TaskApiInterface {

    /**
     */
    async deleteExportTaskRaw(requestParameters: DeleteExportTaskOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteExportTaskResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/DeleteExportTask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteExportTaskRequestToJSON(requestParameters.deleteExportTaskRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteExportTaskResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteExportTask(requestParameters: DeleteExportTaskOperationRequest = {}, initOverrides?: RequestInit): Promise<DeleteExportTaskResponse> {
        const response = await this.deleteExportTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
