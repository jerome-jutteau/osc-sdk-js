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
import { exists } from '../runtime';
export function DirectLinkInterfaceFromJSON(json) {
    return DirectLinkInterfaceFromJSONTyped(json, false);
}
export function DirectLinkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bgpAsn': json['BgpAsn'],
        'bgpKey': !exists(json, 'BgpKey') ? undefined : json['BgpKey'],
        'clientPrivateIp': !exists(json, 'ClientPrivateIp') ? undefined : json['ClientPrivateIp'],
        'directLinkInterfaceName': json['DirectLinkInterfaceName'],
        'outscalePrivateIp': !exists(json, 'OutscalePrivateIp') ? undefined : json['OutscalePrivateIp'],
        'virtualGatewayId': json['VirtualGatewayId'],
        'vlan': json['Vlan'],
    };
}
export function DirectLinkInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BgpAsn': value.bgpAsn,
        'BgpKey': value.bgpKey,
        'ClientPrivateIp': value.clientPrivateIp,
        'DirectLinkInterfaceName': value.directLinkInterfaceName,
        'OutscalePrivateIp': value.outscalePrivateIp,
        'VirtualGatewayId': value.virtualGatewayId,
        'Vlan': value.vlan,
    };
}
