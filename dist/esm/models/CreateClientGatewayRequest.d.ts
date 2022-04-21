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
 *
 * @export
 * @interface CreateClientGatewayRequest
 */
export interface CreateClientGatewayRequest {
    /**
     * The Autonomous System Number (ASN) used by the Border Gateway Protocol (BGP) to find the path to your client gateway through the Internet. This number must be between 1 and 4294967295.
     * @type {number}
     * @memberof CreateClientGatewayRequest
     */
    bgpAsn: number;
    /**
     * The communication protocol used to establish tunnel with your client gateway (only `ipsec.1` is supported).
     * @type {string}
     * @memberof CreateClientGatewayRequest
     */
    connectionType: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateClientGatewayRequest
     */
    dryRun?: boolean;
    /**
     * The public fixed IPv4 address of your client gateway.
     * @type {string}
     * @memberof CreateClientGatewayRequest
     */
    publicIp: string;
}
export declare function CreateClientGatewayRequestFromJSON(json: any): CreateClientGatewayRequest;
export declare function CreateClientGatewayRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateClientGatewayRequest;
export declare function CreateClientGatewayRequestToJSON(value?: CreateClientGatewayRequest | null): any;
