"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecurityGroupResponseToJSON = exports.CreateSecurityGroupResponseFromJSONTyped = exports.CreateSecurityGroupResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const ModelResponseContext_1 = require("./ModelResponseContext");
const SecurityGroup_1 = require("./SecurityGroup");
function CreateSecurityGroupResponseFromJSON(json) {
    return CreateSecurityGroupResponseFromJSONTyped(json, false);
}
exports.CreateSecurityGroupResponseFromJSON = CreateSecurityGroupResponseFromJSON;
function CreateSecurityGroupResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'responseContext': !(0, runtime_1.exists)(json, 'ResponseContext') ? undefined : (0, ModelResponseContext_1.ModelResponseContextFromJSON)(json['ResponseContext']),
        'securityGroup': !(0, runtime_1.exists)(json, 'SecurityGroup') ? undefined : (0, SecurityGroup_1.SecurityGroupFromJSON)(json['SecurityGroup']),
    };
}
exports.CreateSecurityGroupResponseFromJSONTyped = CreateSecurityGroupResponseFromJSONTyped;
function CreateSecurityGroupResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ResponseContext': (0, ModelResponseContext_1.ModelResponseContextToJSON)(value.responseContext),
        'SecurityGroup': (0, SecurityGroup_1.SecurityGroupToJSON)(value.securityGroup),
    };
}
exports.CreateSecurityGroupResponseToJSON = CreateSecurityGroupResponseToJSON;