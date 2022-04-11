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
/**
 * One or more filters.
 * @export
 * @interface FiltersVm
 */
export interface FiltersVm {
    /**
     * The keys of the tags associated with the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the VMs, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tags?: Array<string>;
    /**
     * One or more IDs of VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmIds?: Array<string>;
}
export declare function FiltersVmFromJSON(json: any): FiltersVm;
export declare function FiltersVmFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersVm;
export declare function FiltersVmToJSON(value?: FiltersVm | null): any;
