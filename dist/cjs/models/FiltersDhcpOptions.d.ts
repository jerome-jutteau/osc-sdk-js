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
 * @interface FiltersDhcpOptions
 */
export interface FiltersDhcpOptions {
    /**
     * If true, lists all default DHCP options set. If false, lists all non-default DHCP options set.
     * @type {boolean}
     * @memberof FiltersDhcpOptions
     */
    _default?: boolean;
    /**
     * The IDs of the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    dhcpOptionsSetIds?: Array<string>;
    /**
     * The domain name servers used for the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    domainNameServers?: Array<string>;
    /**
     * The domain names used for the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    domainNames?: Array<string>;
    /**
     * The Network Time Protocol (NTP) servers used for the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    ntpServers?: Array<string>;
    /**
     * The keys of the tags associated with the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the DHCP options sets.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the DHCP options sets, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersDhcpOptions
     */
    tags?: Array<string>;
}
export declare function FiltersDhcpOptionsFromJSON(json: any): FiltersDhcpOptions;
export declare function FiltersDhcpOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersDhcpOptions;
export declare function FiltersDhcpOptionsToJSON(value?: FiltersDhcpOptions | null): any;
