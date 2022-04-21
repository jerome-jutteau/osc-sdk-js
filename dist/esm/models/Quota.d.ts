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
 * Information about the quota.
 * @export
 * @interface Quota
 */
export interface Quota {
    /**
     * The account ID of the owner of the quotas.
     * @type {string}
     * @memberof Quota
     */
    accountId?: string;
    /**
     * The description of the quota.
     * @type {string}
     * @memberof Quota
     */
    description?: string;
    /**
     * The maximum value of the quota for the OUTSCALE user account (if there is no limit, `0`).
     * @type {number}
     * @memberof Quota
     */
    maxValue?: number;
    /**
     * The unique name of the quota.
     * @type {string}
     * @memberof Quota
     */
    name?: string;
    /**
     * The group name of the quota.
     * @type {string}
     * @memberof Quota
     */
    quotaCollection?: string;
    /**
     * The description of the quota.
     * @type {string}
     * @memberof Quota
     */
    shortDescription?: string;
    /**
     * The limit value currently used by the OUTSCALE user account.
     * @type {number}
     * @memberof Quota
     */
    usedValue?: number;
}
export declare function QuotaFromJSON(json: any): Quota;
export declare function QuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quota;
export declare function QuotaToJSON(value?: Quota | null): any;
