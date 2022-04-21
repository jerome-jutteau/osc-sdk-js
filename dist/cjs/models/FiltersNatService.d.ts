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
 * @interface FiltersNatService
 */
export interface FiltersNatService {
    /**
     * The IDs of the NAT services.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    natServiceIds?: Array<string>;
    /**
     * The IDs of the Nets in which the NAT services are.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    netIds?: Array<string>;
    /**
     * The states of the NAT services (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    states?: Array<string>;
    /**
     * The IDs of the Subnets in which the NAT services are.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    subnetIds?: Array<string>;
    /**
     * The keys of the tags associated with the NAT services.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the NAT services.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the NAT services, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersNatService
     */
    tags?: Array<string>;
}
export declare function FiltersNatServiceFromJSON(json: any): FiltersNatService;
export declare function FiltersNatServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersNatService;
export declare function FiltersNatServiceToJSON(value?: FiltersNatService | null): any;