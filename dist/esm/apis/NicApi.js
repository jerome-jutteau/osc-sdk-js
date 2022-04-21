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
import { CreateNicRequestToJSON, CreateNicResponseFromJSON, DeleteNicRequestToJSON, DeleteNicResponseFromJSON, LinkNicRequestToJSON, LinkNicResponseFromJSON, LinkPrivateIpsRequestToJSON, LinkPrivateIpsResponseFromJSON, ReadNicsRequestToJSON, ReadNicsResponseFromJSON, UnlinkNicRequestToJSON, UnlinkNicResponseFromJSON, UnlinkPrivateIpsRequestToJSON, UnlinkPrivateIpsResponseFromJSON, UpdateNicRequestToJSON, UpdateNicResponseFromJSON, } from '../models';
/**
 *
 */
export class NicApi extends runtime.BaseAPI {
    /**
     */
    createNicRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateNic`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateNicRequestToJSON(requestParameters.createNicRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateNicResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createNic(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createNicRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteNicRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteNic`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteNicRequestToJSON(requestParameters.deleteNicRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNicResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteNic(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteNicRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    linkNicRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/LinkNic`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LinkNicRequestToJSON(requestParameters.linkNicRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LinkNicResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    linkNic(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkNicRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    linkPrivateIpsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/LinkPrivateIps`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LinkPrivateIpsRequestToJSON(requestParameters.linkPrivateIpsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LinkPrivateIpsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    linkPrivateIps(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkPrivateIpsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readNicsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadNics`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadNicsRequestToJSON(requestParameters.readNicsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadNicsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readNics(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readNicsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    unlinkNicRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UnlinkNic`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UnlinkNicRequestToJSON(requestParameters.unlinkNicRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkNicResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    unlinkNic(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkNicRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    unlinkPrivateIpsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UnlinkPrivateIps`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UnlinkPrivateIpsRequestToJSON(requestParameters.unlinkPrivateIpsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkPrivateIpsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    unlinkPrivateIps(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkPrivateIpsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateNicRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UpdateNic`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateNicRequestToJSON(requestParameters.updateNicRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNicResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateNic(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateNicRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
