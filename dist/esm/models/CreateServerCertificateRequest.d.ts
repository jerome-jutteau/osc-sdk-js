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
/**
 *
 * @export
 * @interface CreateServerCertificateRequest
 */
export interface CreateServerCertificateRequest {
    /**
     * The PEM-encoded X509 certificate.
     * @type {string}
     * @memberof CreateServerCertificateRequest
     */
    body: string;
    /**
     * The PEM-encoded intermediate certification authorities.
     * @type {string}
     * @memberof CreateServerCertificateRequest
     */
    chain?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateServerCertificateRequest
     */
    dryRun?: boolean;
    /**
     * A unique name for the certificate. Constraints: 1-128 alphanumeric characters, pluses (+), equals (=), commas (,), periods (.), at signs (@), minuses (-), or underscores (_).
     * @type {string}
     * @memberof CreateServerCertificateRequest
     */
    name: string;
    /**
     * The path to the server certificate, set to a slash (/) if not specified.
     * @type {string}
     * @memberof CreateServerCertificateRequest
     */
    path?: string;
    /**
     * The PEM-encoded private key matching the certificate.
     * @type {string}
     * @memberof CreateServerCertificateRequest
     */
    privateKey: string;
}
export declare function CreateServerCertificateRequestFromJSON(json: any): CreateServerCertificateRequest;
export declare function CreateServerCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateServerCertificateRequest;
export declare function CreateServerCertificateRequestToJSON(value?: CreateServerCertificateRequest | null): any;
