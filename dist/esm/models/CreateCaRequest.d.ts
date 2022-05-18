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
 *
 * @export
 * @interface CreateCaRequest
 */
export interface CreateCaRequest {
    /**
     * The CA in PEM format. It must be a single-line string, containing literal line breaks (`\n`).
     * @type {string}
     * @memberof CreateCaRequest
     */
    caPem: string;
    /**
     * The description of the CA.
     * @type {string}
     * @memberof CreateCaRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateCaRequest
     */
    dryRun?: boolean;
}
export declare function CreateCaRequestFromJSON(json: any): CreateCaRequest;
export declare function CreateCaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCaRequest;
export declare function CreateCaRequestToJSON(value?: CreateCaRequest | null): any;