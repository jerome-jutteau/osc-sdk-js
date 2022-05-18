"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadApiLogsRequestToJSON = exports.ReadApiLogsRequestFromJSONTyped = exports.ReadApiLogsRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const FiltersApiLog_1 = require("./FiltersApiLog");
const With_1 = require("./With");
function ReadApiLogsRequestFromJSON(json) {
    return ReadApiLogsRequestFromJSONTyped(json, false);
}
exports.ReadApiLogsRequestFromJSON = ReadApiLogsRequestFromJSON;
function ReadApiLogsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'filters': !runtime_1.exists(json, 'Filters') ? undefined : FiltersApiLog_1.FiltersApiLogFromJSON(json['Filters']),
        'nextPageToken': !runtime_1.exists(json, 'NextPageToken') ? undefined : json['NextPageToken'],
        'resultsPerPage': !runtime_1.exists(json, 'ResultsPerPage') ? undefined : json['ResultsPerPage'],
        '_with': !runtime_1.exists(json, 'With') ? undefined : With_1.WithFromJSON(json['With']),
    };
}
exports.ReadApiLogsRequestFromJSONTyped = ReadApiLogsRequestFromJSONTyped;
function ReadApiLogsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Filters': FiltersApiLog_1.FiltersApiLogToJSON(value.filters),
        'NextPageToken': value.nextPageToken,
        'ResultsPerPage': value.resultsPerPage,
        'With': With_1.WithToJSON(value._with),
    };
}
exports.ReadApiLogsRequestToJSON = ReadApiLogsRequestToJSON;
