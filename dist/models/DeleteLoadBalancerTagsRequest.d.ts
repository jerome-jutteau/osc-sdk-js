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
import { ResourceLoadBalancerTag } from './ResourceLoadBalancerTag';
/**
 *
 * @export
 * @interface DeleteLoadBalancerTagsRequest
 */
export interface DeleteLoadBalancerTagsRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteLoadBalancerTagsRequest
     */
    dryRun?: boolean;
    /**
     * One or more load balancer names.
     * @type {Array<string>}
     * @memberof DeleteLoadBalancerTagsRequest
     */
    loadBalancerNames: Array<string>;
    /**
     * One or more tags to delete from the load balancers.
     * @type {Array<ResourceLoadBalancerTag>}
     * @memberof DeleteLoadBalancerTagsRequest
     */
    tags: Array<ResourceLoadBalancerTag>;
}
export declare function DeleteLoadBalancerTagsRequestFromJSON(json: any): DeleteLoadBalancerTagsRequest;
export declare function DeleteLoadBalancerTagsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteLoadBalancerTagsRequest;
export declare function DeleteLoadBalancerTagsRequestToJSON(value?: DeleteLoadBalancerTagsRequest | null): any;
