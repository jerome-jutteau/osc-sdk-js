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
 * Information about the state of the Net peering connection.
 * @export
 * @interface NetPeeringState
 */
export interface NetPeeringState {
    /**
     * Additional information about the state of the Net peering connection.
     * @type {string}
     * @memberof NetPeeringState
     */
    message?: string;
    /**
     * The state of the Net peering connection (`pending-acceptance` \| `active` \| `rejected` \| `failed` \| `expired` \| `deleted`).
     * @type {string}
     * @memberof NetPeeringState
     */
    name?: string;
}
export declare function NetPeeringStateFromJSON(json: any): NetPeeringState;
export declare function NetPeeringStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetPeeringState;
export declare function NetPeeringStateToJSON(value?: NetPeeringState | null): any;
