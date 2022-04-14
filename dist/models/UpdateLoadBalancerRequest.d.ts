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
import { AccessLog } from './AccessLog';
import { HealthCheck } from './HealthCheck';
/**
 *
 * @export
 * @interface UpdateLoadBalancerRequest
 */
export interface UpdateLoadBalancerRequest {
    /**
     *
     * @type {AccessLog}
     * @memberof UpdateLoadBalancerRequest
     */
    accessLog?: AccessLog;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateLoadBalancerRequest
     */
    dryRun?: boolean;
    /**
     *
     * @type {HealthCheck}
     * @memberof UpdateLoadBalancerRequest
     */
    healthCheck?: HealthCheck;
    /**
     * The name of the load balancer.
     * @type {string}
     * @memberof UpdateLoadBalancerRequest
     */
    loadBalancerName: string;
    /**
     * The port on which the load balancer is listening (between `1` and `65535`, both included). This parameter is required if you want to update the server certificate.
     * @type {number}
     * @memberof UpdateLoadBalancerRequest
     */
    loadBalancerPort?: number;
    /**
     * The name of the policy you want to enable for the listener.
     * @type {Array<string>}
     * @memberof UpdateLoadBalancerRequest
     */
    policyNames?: Array<string>;
    /**
     * (internet-facing only) The public IP you want to associate with the load balancer. The former public IP of the load balancer is then disassociated. If you specify an empty string and the former public IP belonged to you, it is disassociated and replaced by a public IP owned by 3DS OUTSCALE.
     * @type {string}
     * @memberof UpdateLoadBalancerRequest
     */
    publicIp?: string;
    /**
     * (Net only) One or more IDs of security groups you want to assign to the load balancer. You need to specify the already assigned security groups that you want to keep along with the new ones you are assigning. If the list is empty, the default security group of the Net is assigned to the load balancer.
     * @type {Array<string>}
     * @memberof UpdateLoadBalancerRequest
     */
    securityGroups?: Array<string>;
    /**
     * The Outscale Resource Name (ORN) of the server certificate. For more information, see [Resource Identifiers > Outscale Resource Names (ORNs)](https://docs.outscale.com/en/userguide/Resource-Identifiers.html#_outscale_resource_names_orns). If this parameter is specified, you must also specify the `LoadBalancerPort` parameter.
     * @type {string}
     * @memberof UpdateLoadBalancerRequest
     */
    serverCertificateId?: string;
}
export declare function UpdateLoadBalancerRequestFromJSON(json: any): UpdateLoadBalancerRequest;
export declare function UpdateLoadBalancerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoadBalancerRequest;
export declare function UpdateLoadBalancerRequestToJSON(value?: UpdateLoadBalancerRequest | null): any;