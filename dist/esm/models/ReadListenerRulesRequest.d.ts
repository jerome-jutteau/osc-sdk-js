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
import { FiltersListenerRule } from './FiltersListenerRule';
/**
 *
 * @export
 * @interface ReadListenerRulesRequest
 */
export interface ReadListenerRulesRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadListenerRulesRequest
     */
    dryRun?: boolean;
    /**
     *
     * @type {FiltersListenerRule}
     * @memberof ReadListenerRulesRequest
     */
    filters?: FiltersListenerRule;
}
export declare function ReadListenerRulesRequestFromJSON(json: any): ReadListenerRulesRequest;
export declare function ReadListenerRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadListenerRulesRequest;
export declare function ReadListenerRulesRequestToJSON(value?: ReadListenerRulesRequest | null): any;
