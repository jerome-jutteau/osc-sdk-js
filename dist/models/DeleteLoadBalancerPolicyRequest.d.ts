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
 * @interface DeleteLoadBalancerPolicyRequest
 */
export interface DeleteLoadBalancerPolicyRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteLoadBalancerPolicyRequest
     */
    dryRun?: boolean;
    /**
     * The name of the load balancer for which you want to delete a policy.
     * @type {string}
     * @memberof DeleteLoadBalancerPolicyRequest
     */
    loadBalancerName: string;
    /**
     * The name of the policy you want to delete.
     * @type {string}
     * @memberof DeleteLoadBalancerPolicyRequest
     */
    policyName: string;
}
export declare function DeleteLoadBalancerPolicyRequestFromJSON(json: any): DeleteLoadBalancerPolicyRequest;
export declare function DeleteLoadBalancerPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteLoadBalancerPolicyRequest;
export declare function DeleteLoadBalancerPolicyRequestToJSON(value?: DeleteLoadBalancerPolicyRequest | null): any;
