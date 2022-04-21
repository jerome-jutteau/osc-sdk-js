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
 * Information about the listener rule.
 * @export
 * @interface ListenerRuleForCreation
 */
export interface ListenerRuleForCreation {
    /**
     * The type of action for the rule (always `forward`).
     * @type {string}
     * @memberof ListenerRuleForCreation
     */
    action?: string;
    /**
     * A host-name pattern for the rule, with a maximum length of 128 characters. This host-name pattern supports maximum three wildcards, and must not contain any special characters except [-.?].
     * @type {string}
     * @memberof ListenerRuleForCreation
     */
    hostNamePattern?: string;
    /**
     * A human-readable name for the listener rule.
     * @type {string}
     * @memberof ListenerRuleForCreation
     */
    listenerRuleName: string;
    /**
     * A path pattern for the rule, with a maximum length of 128 characters. This path pattern supports maximum three wildcards, and must not contain any special characters except [_-.$/~&quot;'@:+?].
     * @type {string}
     * @memberof ListenerRuleForCreation
     */
    pathPattern?: string;
    /**
     * The priority level of the listener rule, between `1` and `19999` both included. Each rule must have a unique priority level. Otherwise, an error is returned.
     * @type {number}
     * @memberof ListenerRuleForCreation
     */
    priority: number;
}
export declare function ListenerRuleForCreationFromJSON(json: any): ListenerRuleForCreation;
export declare function ListenerRuleForCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListenerRuleForCreation;
export declare function ListenerRuleForCreationToJSON(value?: ListenerRuleForCreation | null): any;
