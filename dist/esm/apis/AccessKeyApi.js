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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { CreateAccessKeyRequestToJSON, CreateAccessKeyResponseFromJSON, DeleteAccessKeyRequestToJSON, DeleteAccessKeyResponseFromJSON, ReadAccessKeysRequestToJSON, ReadAccessKeysResponseFromJSON, ReadSecretAccessKeyRequestToJSON, ReadSecretAccessKeyResponseFromJSON, UpdateAccessKeyRequestToJSON, UpdateAccessKeyResponseFromJSON, } from '../models';
/**
 *
 */
export class AccessKeyApi extends runtime.BaseAPI {
    /**
     */
    createAccessKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/CreateAccessKey`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateAccessKeyRequestToJSON(requestParameters.createAccessKeyRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccessKeyResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createAccessKey(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createAccessKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteAccessKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/DeleteAccessKey`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteAccessKeyRequestToJSON(requestParameters.deleteAccessKeyRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteAccessKeyResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteAccessKey(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteAccessKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readAccessKeysRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/ReadAccessKeys`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadAccessKeysRequestToJSON(requestParameters.readAccessKeysRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadAccessKeysResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readAccessKeys(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readAccessKeysRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readSecretAccessKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/ReadSecretAccessKey`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadSecretAccessKeyRequestToJSON(requestParameters.readSecretAccessKeyRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadSecretAccessKeyResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readSecretAccessKey(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readSecretAccessKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateAccessKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/UpdateAccessKey`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateAccessKeyRequestToJSON(requestParameters.updateAccessKeyRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateAccessKeyResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateAccessKey(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateAccessKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
