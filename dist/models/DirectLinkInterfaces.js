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
var runtime_1 = require("../runtime");
function DirectLinkInterfacesFromJSON(json) {
    return DirectLinkInterfacesFromJSONTyped(json, false);
}
exports.DirectLinkInterfacesFromJSON = DirectLinkInterfacesFromJSON;
function DirectLinkInterfacesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !runtime_1.exists(json, 'AccountId') ? undefined : json['AccountId'],
        'bgpAsn': !runtime_1.exists(json, 'BgpAsn') ? undefined : json['BgpAsn'],
        'bgpKey': !runtime_1.exists(json, 'BgpKey') ? undefined : json['BgpKey'],
        'clientPrivateIp': !runtime_1.exists(json, 'ClientPrivateIp') ? undefined : json['ClientPrivateIp'],
        'directLinkId': !runtime_1.exists(json, 'DirectLinkId') ? undefined : json['DirectLinkId'],
        'directLinkInterfaceId': !runtime_1.exists(json, 'DirectLinkInterfaceId') ? undefined : json['DirectLinkInterfaceId'],
        'directLinkInterfaceName': !runtime_1.exists(json, 'DirectLinkInterfaceName') ? undefined : json['DirectLinkInterfaceName'],
        'interfaceType': !runtime_1.exists(json, 'InterfaceType') ? undefined : json['InterfaceType'],
        'location': !runtime_1.exists(json, 'Location') ? undefined : json['Location'],
        'outscalePrivateIp': !runtime_1.exists(json, 'OutscalePrivateIp') ? undefined : json['OutscalePrivateIp'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
        'virtualGatewayId': !runtime_1.exists(json, 'VirtualGatewayId') ? undefined : json['VirtualGatewayId'],
        'vlan': !runtime_1.exists(json, 'Vlan') ? undefined : json['Vlan'],
    };
}
exports.DirectLinkInterfacesFromJSONTyped = DirectLinkInterfacesFromJSONTyped;
function DirectLinkInterfacesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'BgpAsn': value.bgpAsn,
        'BgpKey': value.bgpKey,
        'ClientPrivateIp': value.clientPrivateIp,
        'DirectLinkId': value.directLinkId,
        'DirectLinkInterfaceId': value.directLinkInterfaceId,
        'DirectLinkInterfaceName': value.directLinkInterfaceName,
        'InterfaceType': value.interfaceType,
        'Location': value.location,
        'OutscalePrivateIp': value.outscalePrivateIp,
        'State': value.state,
        'VirtualGatewayId': value.virtualGatewayId,
        'Vlan': value.vlan,
    };
}
exports.DirectLinkInterfacesToJSON = DirectLinkInterfacesToJSON;