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
import { LoadBalancer } from './LoadBalancer';
import { ModelResponseContext } from './ModelResponseContext';
/**
 *
 * @export
 * @interface DeleteLoadBalancerPolicyResponse
 */
export interface DeleteLoadBalancerPolicyResponse {
    /**
     *
     * @type {LoadBalancer}
     * @memberof DeleteLoadBalancerPolicyResponse
     */
    loadBalancer?: LoadBalancer;
    /**
     *
     * @type {ModelResponseContext}
     * @memberof DeleteLoadBalancerPolicyResponse
     */
    responseContext?: ModelResponseContext;
}
export declare function DeleteLoadBalancerPolicyResponseFromJSON(json: any): DeleteLoadBalancerPolicyResponse;
export declare function DeleteLoadBalancerPolicyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteLoadBalancerPolicyResponse;
export declare function DeleteLoadBalancerPolicyResponseToJSON(value?: DeleteLoadBalancerPolicyResponse | null): any;
