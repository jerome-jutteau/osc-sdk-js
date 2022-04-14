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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { CheckAuthenticationRequestToJSON, CheckAuthenticationResponseFromJSON, CreateAccountRequestToJSON, CreateAccountResponseFromJSON, ReadAccountsRequestToJSON, ReadAccountsResponseFromJSON, ReadConsumptionAccountRequestToJSON, ReadConsumptionAccountResponseFromJSON, ResetAccountPasswordRequestToJSON, ResetAccountPasswordResponseFromJSON, SendResetPasswordEmailRequestToJSON, SendResetPasswordEmailResponseFromJSON, UpdateAccountRequestToJSON, UpdateAccountResponseFromJSON, } from '../models';
/**
 *
 */
export class AccountApi extends runtime.BaseAPI {
    /**
     */
    checkAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CheckAuthentication`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CheckAuthenticationRequestToJSON(requestParameters.checkAuthenticationRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CheckAuthenticationResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    checkAuthentication(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.checkAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    createAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateAccount`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateAccountRequestToJSON(requestParameters.createAccountRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccountResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createAccount(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readAccountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadAccounts`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadAccountsRequestToJSON(requestParameters.readAccountsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadAccountsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readAccounts(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readAccountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readConsumptionAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadConsumptionAccount`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadConsumptionAccountRequestToJSON(requestParameters.readConsumptionAccountRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadConsumptionAccountResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readConsumptionAccount(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readConsumptionAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    resetAccountPasswordRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/ResetAccountPassword`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ResetAccountPasswordRequestToJSON(requestParameters.resetAccountPasswordRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ResetAccountPasswordResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    resetAccountPassword(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.resetAccountPasswordRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    sendResetPasswordEmailRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/SendResetPasswordEmail`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SendResetPasswordEmailRequestToJSON(requestParameters.sendResetPasswordEmailRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SendResetPasswordEmailResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    sendResetPasswordEmail(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendResetPasswordEmailRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UpdateAccount`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateAccountRequestToJSON(requestParameters.updateAccountRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateAccountResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateAccount(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
