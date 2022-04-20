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
import { CheckAuthenticationRequestToJSON, CheckAuthenticationResponseFromJSON, CreateAccountRequestToJSON, CreateAccountResponseFromJSON, ReadAccountsRequestToJSON, ReadAccountsResponseFromJSON, ReadConsumptionAccountRequestToJSON, ReadConsumptionAccountResponseFromJSON, ResetAccountPasswordRequestToJSON, ResetAccountPasswordResponseFromJSON, SendResetPasswordEmailRequestToJSON, SendResetPasswordEmailResponseFromJSON, UpdateAccountRequestToJSON, UpdateAccountResponseFromJSON, } from '../models';
/**
 *
 */
export class AccountApi extends runtime.BaseAPI {
    /**
     */
    async checkAuthenticationRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/CheckAuthentication`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CheckAuthenticationRequestToJSON(requestParameters.checkAuthenticationRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CheckAuthenticationResponseFromJSON(jsonValue));
    }
    /**
     */
    async checkAuthentication(requestParameters = {}, initOverrides) {
        const response = await this.checkAuthenticationRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async createAccountRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/CreateAccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAccountRequestToJSON(requestParameters.createAccountRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccountResponseFromJSON(jsonValue));
    }
    /**
     */
    async createAccount(requestParameters = {}, initOverrides) {
        const response = await this.createAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async readAccountsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/ReadAccounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadAccountsRequestToJSON(requestParameters.readAccountsRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReadAccountsResponseFromJSON(jsonValue));
    }
    /**
     */
    async readAccounts(requestParameters = {}, initOverrides) {
        const response = await this.readAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async readConsumptionAccountRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/ReadConsumptionAccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReadConsumptionAccountRequestToJSON(requestParameters.readConsumptionAccountRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReadConsumptionAccountResponseFromJSON(jsonValue));
    }
    /**
     */
    async readConsumptionAccount(requestParameters = {}, initOverrides) {
        const response = await this.readConsumptionAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async resetAccountPasswordRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/ResetAccountPassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResetAccountPasswordRequestToJSON(requestParameters.resetAccountPasswordRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ResetAccountPasswordResponseFromJSON(jsonValue));
    }
    /**
     */
    async resetAccountPassword(requestParameters = {}, initOverrides) {
        const response = await this.resetAccountPasswordRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async sendResetPasswordEmailRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/SendResetPasswordEmail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendResetPasswordEmailRequestToJSON(requestParameters.sendResetPasswordEmailRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => SendResetPasswordEmailResponseFromJSON(jsonValue));
    }
    /**
     */
    async sendResetPasswordEmail(requestParameters = {}, initOverrides) {
        const response = await this.sendResetPasswordEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async updateAccountRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }
        const response = await this.request({
            path: `/UpdateAccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAccountRequestToJSON(requestParameters.updateAccountRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateAccountResponseFromJSON(jsonValue));
    }
    /**
     */
    async updateAccount(requestParameters = {}, initOverrides) {
        const response = await this.updateAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
