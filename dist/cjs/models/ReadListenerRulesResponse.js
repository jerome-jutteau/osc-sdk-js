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
exports.ReadListenerRulesResponseToJSON = exports.ReadListenerRulesResponseFromJSONTyped = exports.ReadListenerRulesResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const ListenerRule_1 = require("./ListenerRule");
const ModelResponseContext_1 = require("./ModelResponseContext");
function ReadListenerRulesResponseFromJSON(json) {
    return ReadListenerRulesResponseFromJSONTyped(json, false);
}
exports.ReadListenerRulesResponseFromJSON = ReadListenerRulesResponseFromJSON;
function ReadListenerRulesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'listenerRules': !runtime_1.exists(json, 'ListenerRules') ? undefined : (json['ListenerRules'].map(ListenerRule_1.ListenerRuleFromJSON)),
        'responseContext': !runtime_1.exists(json, 'ResponseContext') ? undefined : ModelResponseContext_1.ModelResponseContextFromJSON(json['ResponseContext']),
    };
}
exports.ReadListenerRulesResponseFromJSONTyped = ReadListenerRulesResponseFromJSONTyped;
function ReadListenerRulesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ListenerRules': value.listenerRules === undefined ? undefined : (value.listenerRules.map(ListenerRule_1.ListenerRuleToJSON)),
        'ResponseContext': ModelResponseContext_1.ModelResponseContextToJSON(value.responseContext),
    };
}
exports.ReadListenerRulesResponseToJSON = ReadListenerRulesResponseToJSON;
