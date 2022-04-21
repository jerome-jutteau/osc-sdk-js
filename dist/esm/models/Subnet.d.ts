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
import { ResourceTag } from './ResourceTag';
/**
 * Information about the Subnet.
 * @export
 * @interface Subnet
 */
export interface Subnet {
    /**
     * The number of available IPs in the Subnets.
     * @type {number}
     * @memberof Subnet
     */
    availableIpsCount?: number;
    /**
     * The IP range in the Subnet, in CIDR notation (for example, 10.0.0.0/16).
     * @type {string}
     * @memberof Subnet
     */
    ipRange?: string;
    /**
     * If true, a public IP is assigned to the network interface cards (NICs) created in the specified Subnet.
     * @type {boolean}
     * @memberof Subnet
     */
    mapPublicIpOnLaunch?: boolean;
    /**
     * The ID of the Net in which the Subnet is.
     * @type {string}
     * @memberof Subnet
     */
    netId?: string;
    /**
     * The state of the Subnet (`pending` \| `available`).
     * @type {string}
     * @memberof Subnet
     */
    state?: string;
    /**
     * The ID of the Subnet.
     * @type {string}
     * @memberof Subnet
     */
    subnetId?: string;
    /**
     * The name of the Subregion in which the Subnet is located.
     * @type {string}
     * @memberof Subnet
     */
    subregionName?: string;
    /**
     * One or more tags associated with the Subnet.
     * @type {Array<ResourceTag>}
     * @memberof Subnet
     */
    tags?: Array<ResourceTag>;
}
export declare function SubnetFromJSON(json: any): Subnet;
export declare function SubnetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subnet;
export declare function SubnetToJSON(value?: Subnet | null): any;
