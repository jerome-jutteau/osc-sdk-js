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
import { CreateDirectLinkInterfaceRequestToJSON, CreateDirectLinkInterfaceResponseFromJSON, DeleteDirectLinkInterfaceRequestToJSON, DeleteDirectLinkInterfaceResponseFromJSON, ReadDirectLinkInterfacesRequestToJSON, ReadDirectLinkInterfacesResponseFromJSON, } from '../models/index.js';
/**
 *
 */
export class DirectLinkInterfaceApi extends runtime.BaseAPI {
    /**
     */
    createDirectLinkInterfaceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateDirectLinkInterface`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateDirectLinkInterfaceRequestToJSON(requestParameters.createDirectLinkInterfaceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateDirectLinkInterfaceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createDirectLinkInterface(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createDirectLinkInterfaceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteDirectLinkInterfaceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteDirectLinkInterface`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteDirectLinkInterfaceRequestToJSON(requestParameters.deleteDirectLinkInterfaceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteDirectLinkInterfaceResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteDirectLinkInterface(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteDirectLinkInterfaceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readDirectLinkInterfacesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadDirectLinkInterfaces`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadDirectLinkInterfacesRequestToJSON(requestParameters.readDirectLinkInterfacesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadDirectLinkInterfacesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readDirectLinkInterfaces(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readDirectLinkInterfacesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
