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
 * Information about the listener.
 * @export
 * @interface Listener
 */
export interface Listener {
    /**
     * The port on which the back-end VM is listening (between `1` and `65535`, both included).
     * @type {number}
     * @memberof Listener
     */
    backendPort?: number;
    /**
     * The protocol for routing traffic to back-end VMs (`HTTP` \| `HTTPS` \| `TCP` \| `SSL`).
     * @type {string}
     * @memberof Listener
     */
    backendProtocol?: string;
    /**
     * The port on which the load balancer is listening (between 1 and `65535`, both included).
     * @type {number}
     * @memberof Listener
     */
    loadBalancerPort?: number;
    /**
     * The routing protocol (`HTTP` \| `HTTPS` \| `TCP` \| `SSL`).
     * @type {string}
     * @memberof Listener
     */
    loadBalancerProtocol?: string;
    /**
     * The names of the policies. If there are no policies enabled, the list is empty.
     * @type {Array<string>}
     * @memberof Listener
     */
    policyNames?: Array<string>;
    /**
     * The OUTSCALE Resource Name (ORN) of the server certificate. For more information, see [Resource Identifiers > OUTSCALE Resource Names (ORNs)](https://docs.outscale.com/en/userguide/Resource-Identifiers.html#_outscale_resource_names_orns).
     * @type {string}
     * @memberof Listener
     */
    serverCertificateId?: string;
}
export declare function ListenerFromJSON(json: any): Listener;
export declare function ListenerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Listener;
export declare function ListenerToJSON(value?: Listener | null): any;
