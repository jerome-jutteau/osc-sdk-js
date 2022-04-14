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
import * as runtime from '../runtime.js';
import { CreateInternetServiceRequestToJSON, CreateInternetServiceResponseFromJSON, DeleteInternetServiceRequestToJSON, DeleteInternetServiceResponseFromJSON, LinkInternetServiceRequestToJSON, LinkInternetServiceResponseFromJSON, ReadInternetServicesRequestToJSON, ReadInternetServicesResponseFromJSON, UnlinkInternetServiceRequestToJSON, UnlinkInternetServiceResponseFromJSON, } from '../models/index.js';
/**
 *
 */
export class InternetServiceApi extends runtime.BaseAPI {
    /**
     */
    createInternetServiceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateInternetService`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateInternetServiceRequestToJSON(requestParameters.createInternetServiceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateInternetServiceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createInternetService(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createInternetServiceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteInternetServiceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteInternetService`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteInternetServiceRequestToJSON(requestParameters.deleteInternetServiceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteInternetServiceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteInternetService(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteInternetServiceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    linkInternetServiceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/LinkInternetService`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LinkInternetServiceRequestToJSON(requestParameters.linkInternetServiceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LinkInternetServiceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    linkInternetService(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkInternetServiceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readInternetServicesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadInternetServices`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadInternetServicesRequestToJSON(requestParameters.readInternetServicesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadInternetServicesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readInternetServices(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readInternetServicesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    unlinkInternetServiceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UnlinkInternetService`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UnlinkInternetServiceRequestToJSON(requestParameters.unlinkInternetServiceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkInternetServiceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    unlinkInternetService(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkInternetServiceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
