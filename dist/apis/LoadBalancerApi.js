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
import { CreateLoadBalancerRequestToJSON, CreateLoadBalancerResponseFromJSON, CreateLoadBalancerTagsRequestToJSON, CreateLoadBalancerTagsResponseFromJSON, DeleteLoadBalancerRequestToJSON, DeleteLoadBalancerResponseFromJSON, DeleteLoadBalancerTagsRequestToJSON, DeleteLoadBalancerTagsResponseFromJSON, DeregisterVmsInLoadBalancerRequestToJSON, DeregisterVmsInLoadBalancerResponseFromJSON, LinkLoadBalancerBackendMachinesRequestToJSON, LinkLoadBalancerBackendMachinesResponseFromJSON, ReadLoadBalancerTagsRequestToJSON, ReadLoadBalancerTagsResponseFromJSON, ReadLoadBalancersRequestToJSON, ReadLoadBalancersResponseFromJSON, ReadVmsHealthRequestToJSON, ReadVmsHealthResponseFromJSON, RegisterVmsInLoadBalancerRequestToJSON, RegisterVmsInLoadBalancerResponseFromJSON, UnlinkLoadBalancerBackendMachinesRequestToJSON, UnlinkLoadBalancerBackendMachinesResponseFromJSON, UpdateLoadBalancerRequestToJSON, UpdateLoadBalancerResponseFromJSON, } from '../models/index.js';
/**
 *
 */
export class LoadBalancerApi extends runtime.BaseAPI {
    /**
     */
    createLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateLoadBalancer`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateLoadBalancerRequestToJSON(requestParameters.createLoadBalancerRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateLoadBalancerResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    createLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateLoadBalancerTags`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateLoadBalancerTagsRequestToJSON(requestParameters.createLoadBalancerTagsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateLoadBalancerTagsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteLoadBalancer`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteLoadBalancerRequestToJSON(requestParameters.deleteLoadBalancerRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteLoadBalancerResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteLoadBalancerTags`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteLoadBalancerTagsRequestToJSON(requestParameters.deleteLoadBalancerTagsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteLoadBalancerTagsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deregisterVmsInLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeregisterVmsInLoadBalancer`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeregisterVmsInLoadBalancerRequestToJSON(requestParameters.deregisterVmsInLoadBalancerRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeregisterVmsInLoadBalancerResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deregisterVmsInLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deregisterVmsInLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    linkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/LinkLoadBalancerBackendMachines`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LinkLoadBalancerBackendMachinesRequestToJSON(requestParameters.linkLoadBalancerBackendMachinesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LinkLoadBalancerBackendMachinesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    linkLoadBalancerBackendMachines(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadLoadBalancerTags`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadLoadBalancerTagsRequestToJSON(requestParameters.readLoadBalancerTagsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadLoadBalancerTagsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readLoadBalancersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadLoadBalancers`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadLoadBalancersRequestToJSON(requestParameters.readLoadBalancersRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadLoadBalancersResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readLoadBalancers(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readLoadBalancersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readVmsHealthRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadVmsHealth`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadVmsHealthRequestToJSON(requestParameters.readVmsHealthRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadVmsHealthResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readVmsHealth(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readVmsHealthRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    registerVmsInLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/RegisterVmsInLoadBalancer`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: RegisterVmsInLoadBalancerRequestToJSON(requestParameters.registerVmsInLoadBalancerRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RegisterVmsInLoadBalancerResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    registerVmsInLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerVmsInLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    unlinkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UnlinkLoadBalancerBackendMachines`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UnlinkLoadBalancerBackendMachinesRequestToJSON(requestParameters.unlinkLoadBalancerBackendMachinesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkLoadBalancerBackendMachinesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    unlinkLoadBalancerBackendMachines(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UpdateLoadBalancer`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateLoadBalancerRequestToJSON(requestParameters.updateLoadBalancerRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateLoadBalancerResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
