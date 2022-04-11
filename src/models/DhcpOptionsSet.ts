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

import { exists, mapValues } from '../runtime';
import {
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';

/**
 * Information about the DHCP options set.
 * @export
 * @interface DhcpOptionsSet
 */
export interface DhcpOptionsSet {
    /**
     * If true, the DHCP options set is a default one. If false, it is not.
     * @type {boolean}
     * @memberof DhcpOptionsSet
     */
    _default?: boolean;
    /**
     * The ID of the DHCP options set.
     * @type {string}
     * @memberof DhcpOptionsSet
     */
    dhcpOptionsSetId?: string;
    /**
     * The domain name.
     * @type {string}
     * @memberof DhcpOptionsSet
     */
    domainName?: string;
    /**
     * One or more IPs for the domain name servers.
     * @type {Array<string>}
     * @memberof DhcpOptionsSet
     */
    domainNameServers?: Array<string>;
    /**
     * One or more IPs for the NTP servers.
     * @type {Array<string>}
     * @memberof DhcpOptionsSet
     */
    ntpServers?: Array<string>;
    /**
     * One or more tags associated with the DHCP options set.
     * @type {Array<ResourceTag>}
     * @memberof DhcpOptionsSet
     */
    tags?: Array<ResourceTag>;
}

export function DhcpOptionsSetFromJSON(json: any): DhcpOptionsSet {
    return DhcpOptionsSetFromJSONTyped(json, false);
}

export function DhcpOptionsSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): DhcpOptionsSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_default': !exists(json, 'Default') ? undefined : json['Default'],
        'dhcpOptionsSetId': !exists(json, 'DhcpOptionsSetId') ? undefined : json['DhcpOptionsSetId'],
        'domainName': !exists(json, 'DomainName') ? undefined : json['DomainName'],
        'domainNameServers': !exists(json, 'DomainNameServers') ? undefined : json['DomainNameServers'],
        'ntpServers': !exists(json, 'NtpServers') ? undefined : json['NtpServers'],
        'tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
    };
}

export function DhcpOptionsSetToJSON(value?: DhcpOptionsSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Default': value._default,
        'DhcpOptionsSetId': value.dhcpOptionsSetId,
        'DomainName': value.domainName,
        'DomainNameServers': value.domainNameServers,
        'NtpServers': value.ntpServers,
        'Tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResourceTagToJSON)),
    };
}

