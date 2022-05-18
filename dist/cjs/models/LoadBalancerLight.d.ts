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
 * Information about the load balancer.
 * @export
 * @interface LoadBalancerLight
 */
export interface LoadBalancerLight {
    /**
     * The name of the load balancer to which the listener is attached.
     * @type {string}
     * @memberof LoadBalancerLight
     */
    loadBalancerName: string;
    /**
     * The port of load balancer on which the load balancer is listening (between `1` and `65535` both included).
     * @type {number}
     * @memberof LoadBalancerLight
     */
    loadBalancerPort: number;
}
export declare function LoadBalancerLightFromJSON(json: any): LoadBalancerLight;
export declare function LoadBalancerLightFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoadBalancerLight;
export declare function LoadBalancerLightToJSON(value?: LoadBalancerLight | null): any;
