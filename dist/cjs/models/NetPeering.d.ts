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
import { AccepterNet } from './AccepterNet';
import { NetPeeringState } from './NetPeeringState';
import { ResourceTag } from './ResourceTag';
import { SourceNet } from './SourceNet';
/**
 * Information about the Net peering connection.
 * @export
 * @interface NetPeering
 */
export interface NetPeering {
    /**
     *
     * @type {AccepterNet}
     * @memberof NetPeering
     */
    accepterNet?: AccepterNet;
    /**
     * The ID of the Net peering connection.
     * @type {string}
     * @memberof NetPeering
     */
    netPeeringId?: string;
    /**
     *
     * @type {SourceNet}
     * @memberof NetPeering
     */
    sourceNet?: SourceNet;
    /**
     *
     * @type {NetPeeringState}
     * @memberof NetPeering
     */
    state?: NetPeeringState;
    /**
     * One or more tags associated with the Net peering connection.
     * @type {Array<ResourceTag>}
     * @memberof NetPeering
     */
    tags?: Array<ResourceTag>;
}
export declare function NetPeeringFromJSON(json: any): NetPeering;
export declare function NetPeeringFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetPeering;
export declare function NetPeeringToJSON(value?: NetPeering | null): any;
