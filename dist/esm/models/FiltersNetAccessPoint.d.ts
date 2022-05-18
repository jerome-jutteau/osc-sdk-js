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
 * One or more filters.
 * @export
 * @interface FiltersNetAccessPoint
 */
export interface FiltersNetAccessPoint {
    /**
     * The IDs of the Net access points.
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    netAccessPointIds?: Array<string>;
    /**
     * The IDs of the Nets.
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    netIds?: Array<string>;
    /**
     * The names of the services. For more information, see [ReadNetAccessPointServices](#readnetaccesspointservices).
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    serviceNames?: Array<string>;
    /**
     * The states of the Net access points (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    states?: Array<string>;
    /**
     * The keys of the tags associated with the Net access points.
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the Net access points.
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the Net access points, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersNetAccessPoint
     */
    tags?: Array<string>;
}
export declare function FiltersNetAccessPointFromJSON(json: any): FiltersNetAccessPoint;
export declare function FiltersNetAccessPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersNetAccessPoint;
export declare function FiltersNetAccessPointToJSON(value?: FiltersNetAccessPoint | null): any;