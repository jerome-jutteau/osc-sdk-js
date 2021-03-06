/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.19
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
import { CreatePublicIpRequestToJSON, CreatePublicIpResponseFromJSON, DeletePublicIpRequestToJSON, DeletePublicIpResponseFromJSON, LinkPublicIpRequestToJSON, LinkPublicIpResponseFromJSON, ReadPublicIpRangesRequestToJSON, ReadPublicIpRangesResponseFromJSON, ReadPublicIpsRequestToJSON, ReadPublicIpsResponseFromJSON, UnlinkPublicIpRequestToJSON, UnlinkPublicIpResponseFromJSON, } from '../models';
/**
 *
 */
export class PublicIpApi extends runtime.BaseAPI {
    /**
     */
    createPublicIpRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = CreatePublicIpRequestToJSON(requestParameters.createPublicIpRequest);
            const request = {
                path: `/CreatePublicIp`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreatePublicIpResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createPublicIp(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createPublicIpRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deletePublicIpRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = DeletePublicIpRequestToJSON(requestParameters.deletePublicIpRequest);
            const request = {
                path: `/DeletePublicIp`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeletePublicIpResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deletePublicIp(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deletePublicIpRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    linkPublicIpRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = LinkPublicIpRequestToJSON(requestParameters.linkPublicIpRequest);
            const request = {
                path: `/LinkPublicIp`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LinkPublicIpResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    linkPublicIp(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkPublicIpRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readPublicIpRangesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const body = ReadPublicIpRangesRequestToJSON(requestParameters.readPublicIpRangesRequest);
            const request = {
                path: `/ReadPublicIpRanges`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadPublicIpRangesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readPublicIpRanges(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readPublicIpRangesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readPublicIpsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = ReadPublicIpsRequestToJSON(requestParameters.readPublicIpsRequest);
            const request = {
                path: `/ReadPublicIps`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadPublicIpsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readPublicIps(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readPublicIpsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    unlinkPublicIpRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = UnlinkPublicIpRequestToJSON(requestParameters.unlinkPublicIpRequest);
            const request = {
                path: `/UnlinkPublicIp`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UnlinkPublicIpResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    unlinkPublicIp(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkPublicIpRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
