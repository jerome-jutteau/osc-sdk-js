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

import { exists, mapValues } from '../runtime';
/**
 * One or more filters.
 * @export
 * @interface FiltersClientGateway
 */
export interface FiltersClientGateway {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs) of the connections.
     * @type {Array<number>}
     * @memberof FiltersClientGateway
     */
    bgpAsns?: Array<number>;
    /**
     * The IDs of the client gateways.
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    clientGatewayIds?: Array<string>;
    /**
     * The types of communication tunnels used by the client gateways (only `ipsec.1` is supported).
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    connectionTypes?: Array<string>;
    /**
     * The public IPv4 addresses of the client gateways.
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    publicIps?: Array<string>;
    /**
     * The states of the client gateways (`pending` \| `available` \| `deleting` \| `deleted`).
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    states?: Array<string>;
    /**
     * The keys of the tags associated with the client gateways.
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the client gateways.
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the client gateways, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersClientGateway
     */
    tags?: Array<string>;
}

export function FiltersClientGatewayFromJSON(json: any): FiltersClientGateway {
    return FiltersClientGatewayFromJSONTyped(json, false);
}

export function FiltersClientGatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersClientGateway {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bgpAsns': !exists(json, 'BgpAsns') ? undefined : json['BgpAsns'],
        'clientGatewayIds': !exists(json, 'ClientGatewayIds') ? undefined : json['ClientGatewayIds'],
        'connectionTypes': !exists(json, 'ConnectionTypes') ? undefined : json['ConnectionTypes'],
        'publicIps': !exists(json, 'PublicIps') ? undefined : json['PublicIps'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
    };
}

export function FiltersClientGatewayToJSON(value?: FiltersClientGateway | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BgpAsns': value.bgpAsns,
        'ClientGatewayIds': value.clientGatewayIds,
        'ConnectionTypes': value.connectionTypes,
        'PublicIps': value.publicIps,
        'States': value.states,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
    };
}

