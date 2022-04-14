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
import { CreateImageExportTaskRequestToJSON, CreateImageExportTaskResponseFromJSON, CreateImageRequestToJSON, CreateImageResponseFromJSON, DeleteImageRequestToJSON, DeleteImageResponseFromJSON, ReadImageExportTasksRequestToJSON, ReadImageExportTasksResponseFromJSON, ReadImagesRequestToJSON, ReadImagesResponseFromJSON, UpdateImageRequestToJSON, UpdateImageResponseFromJSON, } from '../models/index.js';
/**
 *
 */
export class ImageApi extends runtime.BaseAPI {
    /**
     */
    createImageRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateImage`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateImageRequestToJSON(requestParameters.createImageRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateImageResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createImage(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createImageRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    createImageExportTaskRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/CreateImageExportTask`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateImageExportTaskRequestToJSON(requestParameters.createImageExportTaskRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateImageExportTaskResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createImageExportTask(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createImageExportTaskRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteImageRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/DeleteImage`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DeleteImageRequestToJSON(requestParameters.deleteImageRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteImageResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteImage(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteImageRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readImageExportTasksRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadImageExportTasks`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadImageExportTasksRequestToJSON(requestParameters.readImageExportTasksRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadImageExportTasksResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readImageExportTasks(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readImageExportTasksRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readImagesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/ReadImages`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ReadImagesRequestToJSON(requestParameters.readImagesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadImagesResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readImages(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readImagesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateImageRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/UpdateImage`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateImageRequestToJSON(requestParameters.updateImageRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateImageResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateImage(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateImageRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
