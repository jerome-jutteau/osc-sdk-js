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
 *
 * @export
 * @interface RejectNetPeeringRequest
 */
export interface RejectNetPeeringRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof RejectNetPeeringRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Net peering connection you want to reject.
     * @type {string}
     * @memberof RejectNetPeeringRequest
     */
    netPeeringId: string;
}
export declare function RejectNetPeeringRequestFromJSON(json: any): RejectNetPeeringRequest;
export declare function RejectNetPeeringRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RejectNetPeeringRequest;
export declare function RejectNetPeeringRequestToJSON(value?: RejectNetPeeringRequest | null): any;
