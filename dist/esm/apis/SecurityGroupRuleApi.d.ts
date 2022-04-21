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
import * as runtime from '../runtime';
import { CreateSecurityGroupRuleRequest, CreateSecurityGroupRuleResponse, DeleteSecurityGroupRuleRequest, DeleteSecurityGroupRuleResponse } from '../models';
export interface CreateSecurityGroupRuleOperationRequest {
    createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest;
}
export interface DeleteSecurityGroupRuleOperationRequest {
    deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest;
}
/**
 * SecurityGroupRuleApi - interface
 *
 * @export
 * @interface SecurityGroupRuleApiInterface
 */
export interface SecurityGroupRuleApiInterface {
    /**
     *
     * @param {CreateSecurityGroupRuleRequest} [createSecurityGroupRuleRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupRuleApiInterface
     */
    createSecurityGroupRuleRaw(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSecurityGroupRuleResponse>>;
    /**
     */
    createSecurityGroupRule(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<CreateSecurityGroupRuleResponse>;
    /**
     *
     * @param {DeleteSecurityGroupRuleRequest} [deleteSecurityGroupRuleRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupRuleApiInterface
     */
    deleteSecurityGroupRuleRaw(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSecurityGroupRuleResponse>>;
    /**
     */
    deleteSecurityGroupRule(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<DeleteSecurityGroupRuleResponse>;
}
/**
 *
 */
export declare class SecurityGroupRuleApi extends runtime.BaseAPI implements SecurityGroupRuleApiInterface {
    /**
     */
    createSecurityGroupRuleRaw(requestParameters: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateSecurityGroupRuleResponse>>;
    /**
     */
    createSecurityGroupRule(requestParameters?: CreateSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<CreateSecurityGroupRuleResponse>;
    /**
     */
    deleteSecurityGroupRuleRaw(requestParameters: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSecurityGroupRuleResponse>>;
    /**
     */
    deleteSecurityGroupRule(requestParameters?: DeleteSecurityGroupRuleOperationRequest, initOverrides?: RequestInit): Promise<DeleteSecurityGroupRuleResponse>;
}
