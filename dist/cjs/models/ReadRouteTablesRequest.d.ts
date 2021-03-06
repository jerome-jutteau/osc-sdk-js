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
import { FiltersRouteTable } from './FiltersRouteTable';
/**
 *
 * @export
 * @interface ReadRouteTablesRequest
 */
export interface ReadRouteTablesRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadRouteTablesRequest
     */
    dryRun?: boolean;
    /**
     *
     * @type {FiltersRouteTable}
     * @memberof ReadRouteTablesRequest
     */
    filters?: FiltersRouteTable;
}
export declare function ReadRouteTablesRequestFromJSON(json: any): ReadRouteTablesRequest;
export declare function ReadRouteTablesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadRouteTablesRequest;
export declare function ReadRouteTablesRequestToJSON(value?: ReadRouteTablesRequest | null): any;
