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
 * @interface FiltersSubnet
 */
export interface FiltersSubnet {
    /**
     * The number of available IPs.
     * @type {Array<number>}
     * @memberof FiltersSubnet
     */
    availableIpsCounts?: Array<number>;
    /**
     * The IP ranges in the Subnets, in CIDR notation (for example, 10.0.0.0/16).
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    ipRanges?: Array<string>;
    /**
     * The IDs of the Nets in which the Subnets are.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    netIds?: Array<string>;
    /**
     * The states of the Subnets (`pending` \| `available`).
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    states?: Array<string>;
    /**
     * The IDs of the Subnets.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    subnetIds?: Array<string>;
    /**
     * The names of the Subregions in which the Subnets are located.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    subregionNames?: Array<string>;
    /**
     * The keys of the tags associated with the Subnets.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the Subnets.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the Subnets, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersSubnet
     */
    tags?: Array<string>;
}
export declare function FiltersSubnetFromJSON(json: any): FiltersSubnet;
export declare function FiltersSubnetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersSubnet;
export declare function FiltersSubnetToJSON(value?: FiltersSubnet | null): any;
