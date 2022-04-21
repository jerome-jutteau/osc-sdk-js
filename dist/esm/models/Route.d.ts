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
 * Information about the route.
 * @export
 * @interface Route
 */
export interface Route {
    /**
     * The method used to create the route.
     * @type {string}
     * @memberof Route
     */
    creationMethod?: string;
    /**
     * The IP range used for the destination match, in CIDR notation (for example, 10.0.0.0/24).
     * @type {string}
     * @memberof Route
     */
    destinationIpRange?: string;
    /**
     * The ID of the OUTSCALE service.
     * @type {string}
     * @memberof Route
     */
    destinationServiceId?: string;
    /**
     * The ID of the Internet service or virtual gateway attached to the Net.
     * @type {string}
     * @memberof Route
     */
    gatewayId?: string;
    /**
     * The ID of a NAT service attached to the Net.
     * @type {string}
     * @memberof Route
     */
    natServiceId?: string;
    /**
     * The ID of the Net access point.
     * @type {string}
     * @memberof Route
     */
    netAccessPointId?: string;
    /**
     * The ID of the Net peering connection.
     * @type {string}
     * @memberof Route
     */
    netPeeringId?: string;
    /**
     * The ID of the NIC.
     * @type {string}
     * @memberof Route
     */
    nicId?: string;
    /**
     * The state of a route in the route table (`active` \| `blackhole`). The `blackhole` state indicates that the target of the route is not available.
     * @type {string}
     * @memberof Route
     */
    state?: string;
    /**
     * The account ID of the owner of the VM.
     * @type {string}
     * @memberof Route
     */
    vmAccountId?: string;
    /**
     * The ID of a VM specified in a route in the table.
     * @type {string}
     * @memberof Route
     */
    vmId?: string;
}
export declare function RouteFromJSON(json: any): Route;
export declare function RouteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Route;
export declare function RouteToJSON(value?: Route | null): any;
