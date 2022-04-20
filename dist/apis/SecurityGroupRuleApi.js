/* tslint:disable */
/* eslint-disable */
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
import { CreateSecurityGroupRuleRequestToJSON, CreateSecurityGroupRuleResponseFromJSON, DeleteSecurityGroupRuleRequestToJSON, DeleteSecurityGroupRuleResponseFromJSON, } from '../models';
/**
 *
 */
export class SecurityGroupRuleApi extends runtime.BaseAPI {
    /**
     */
    async createSecurityGroupRuleRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/CreateSecurityGroupRule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSecurityGroupRuleRequestToJSON(requestParameters.createSecurityGroupRuleRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSecurityGroupRuleResponseFromJSON(jsonValue));
    }
    /**
     */
    async createSecurityGroupRule(requestParameters = {}, initOverrides) {
        const response = await this.createSecurityGroupRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async deleteSecurityGroupRuleRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/DeleteSecurityGroupRule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteSecurityGroupRuleRequestToJSON(requestParameters.deleteSecurityGroupRuleRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteSecurityGroupRuleResponseFromJSON(jsonValue));
    }
    /**
     */
    async deleteSecurityGroupRule(requestParameters = {}, initOverrides) {
        const response = await this.deleteSecurityGroupRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
