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
import { ListenerRuleForCreation } from './ListenerRuleForCreation';
import { LoadBalancerLight } from './LoadBalancerLight';
/**
 *
 * @export
 * @interface CreateListenerRuleRequest
 */
export interface CreateListenerRuleRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateListenerRuleRequest
     */
    dryRun?: boolean;
    /**
     *
     * @type {LoadBalancerLight}
     * @memberof CreateListenerRuleRequest
     */
    listener: LoadBalancerLight;
    /**
     *
     * @type {ListenerRuleForCreation}
     * @memberof CreateListenerRuleRequest
     */
    listenerRule: ListenerRuleForCreation;
    /**
     * The IDs of the backend VMs.
     * @type {Array<string>}
     * @memberof CreateListenerRuleRequest
     */
    vmIds: Array<string>;
}
export declare function CreateListenerRuleRequestFromJSON(json: any): CreateListenerRuleRequest;
export declare function CreateListenerRuleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateListenerRuleRequest;
export declare function CreateListenerRuleRequestToJSON(value?: CreateListenerRuleRequest | null): any;
