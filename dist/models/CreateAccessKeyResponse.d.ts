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
import { AccessKeySecretKey } from './AccessKeySecretKey';
import { ModelResponseContext } from './ModelResponseContext';
/**
 *
 * @export
 * @interface CreateAccessKeyResponse
 */
export interface CreateAccessKeyResponse {
    /**
     *
     * @type {AccessKeySecretKey}
     * @memberof CreateAccessKeyResponse
     */
    accessKey?: AccessKeySecretKey;
    /**
     *
     * @type {ModelResponseContext}
     * @memberof CreateAccessKeyResponse
     */
    responseContext?: ModelResponseContext;
}
export declare function CreateAccessKeyResponseFromJSON(json: any): CreateAccessKeyResponse;
export declare function CreateAccessKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccessKeyResponse;
export declare function CreateAccessKeyResponseToJSON(value?: CreateAccessKeyResponse | null): any;