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
 * @interface CreateFlexibleGpuRequest
 */
export interface CreateFlexibleGpuRequest {
    /**
     * If true, the fGPU is deleted when the VM is terminated.
     * @type {boolean}
     * @memberof CreateFlexibleGpuRequest
     */
    deleteOnVmDeletion?: boolean;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateFlexibleGpuRequest
     */
    dryRun?: boolean;
    /**
     * The processor generation that the fGPU must be compatible with. If not specified, the oldest possible processor generation is selected (as provided by [ReadFlexibleGpuCatalog](#readflexiblegpucatalog) for the specified model of fGPU).
     * @type {string}
     * @memberof CreateFlexibleGpuRequest
     */
    generation?: string;
    /**
     * The model of fGPU you want to allocate. For more information, see [About Flexible GPUs](https://docs.outscale.com/en/userguide/About-Flexible-GPUs.html).
     * @type {string}
     * @memberof CreateFlexibleGpuRequest
     */
    modelName: string;
    /**
     * The Subregion in which you want to create the fGPU.
     * @type {string}
     * @memberof CreateFlexibleGpuRequest
     */
    subregionName: string;
}
export declare function CreateFlexibleGpuRequestFromJSON(json: any): CreateFlexibleGpuRequest;
export declare function CreateFlexibleGpuRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFlexibleGpuRequest;
export declare function CreateFlexibleGpuRequestToJSON(value?: CreateFlexibleGpuRequest | null): any;
