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
/**
 *
 * @export
 * @interface DeleteExportTaskRequest
 */
export interface DeleteExportTaskRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteExportTaskRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the export task to delete.
     * @type {string}
     * @memberof DeleteExportTaskRequest
     */
    exportTaskId: string;
}
export declare function DeleteExportTaskRequestFromJSON(json: any): DeleteExportTaskRequest;
export declare function DeleteExportTaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteExportTaskRequest;
export declare function DeleteExportTaskRequestToJSON(value?: DeleteExportTaskRequest | null): any;
