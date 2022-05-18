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
 * @interface FiltersTag
 */
export interface FiltersTag {
    /**
     * The keys of the tags that are assigned to the resources. You can use this filter alongside the `Values` filter. In that case, you filter the resources corresponding to each tag, regardless of the other filter.
     * @type {Array<string>}
     * @memberof FiltersTag
     */
    keys?: Array<string>;
    /**
     * The IDs of the resources with which the tags are associated.
     * @type {Array<string>}
     * @memberof FiltersTag
     */
    resourceIds?: Array<string>;
    /**
     * The resource type (`vm` \| `image` \| `volume` \| `snapshot` \| `public-ip` \| `security-group` \| `route-table` \| `nic` \| `net` \| `subnet` \| `net-peering` \| `net-access-point` \| `nat-service` \| `internet-service` \| `client-gateway` \| `virtual-gateway` \| `vpn-connection` \| `dhcp-options` \| `task`).
     * @type {Array<string>}
     * @memberof FiltersTag
     */
    resourceTypes?: Array<string>;
    /**
     * The values of the tags that are assigned to the resources. You can use this filter alongside the `TagKeys` filter. In that case, you filter the resources corresponding to each tag, regardless of the other filter.
     * @type {Array<string>}
     * @memberof FiltersTag
     */
    values?: Array<string>;
}
export declare function FiltersTagFromJSON(json: any): FiltersTag;
export declare function FiltersTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersTag;
export declare function FiltersTagToJSON(value?: FiltersTag | null): any;