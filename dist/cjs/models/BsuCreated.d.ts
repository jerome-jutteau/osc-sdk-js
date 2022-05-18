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
/**
 * Information about the created BSU volume.
 * @export
 * @interface BsuCreated
 */
export interface BsuCreated {
    /**
     * If true, the volume is deleted when terminating the VM. If false, the volume is not deleted when terminating the VM.
     * @type {boolean}
     * @memberof BsuCreated
     */
    deleteOnVmDeletion?: boolean;
    /**
     * The time and date of attachment of the volume to the VM.
     * @type {Date}
     * @memberof BsuCreated
     */
    linkDate?: Date;
    /**
     * The state of the volume.
     * @type {string}
     * @memberof BsuCreated
     */
    state?: string;
    /**
     * The ID of the volume.
     * @type {string}
     * @memberof BsuCreated
     */
    volumeId?: string;
}
export declare function BsuCreatedFromJSON(json: any): BsuCreated;
export declare function BsuCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BsuCreated;
export declare function BsuCreatedToJSON(value?: BsuCreated | null): any;