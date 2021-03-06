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
 * Information about Phase 2 of the Internet Key Exchange (IKE) negotiation.
 * @export
 * @interface Phase2Options
 */
export interface Phase2Options {
    /**
     * The Diffie-Hellman (DH) group numbers allowed for the VPN tunnel for phase 2.
     * @type {Array<number>}
     * @memberof Phase2Options
     */
    phase2DhGroupNumbers?: Array<number>;
    /**
     * The encryption algorithms allowed for the VPN tunnel for phase 2.
     * @type {Array<string>}
     * @memberof Phase2Options
     */
    phase2EncryptionAlgorithms?: Array<string>;
    /**
     * The integrity algorithms allowed for the VPN tunnel for phase 2.
     * @type {Array<string>}
     * @memberof Phase2Options
     */
    phase2IntegrityAlgorithms?: Array<string>;
    /**
     * The lifetime for phase 2 of the Internet Key Exchange (IKE) negociation process, in seconds.
     * @type {number}
     * @memberof Phase2Options
     */
    phase2LifetimeSeconds?: number;
    /**
     * The pre-shared key to establish the initial authentication between the client gateway and the virtual gateway. This key can contain any character except line breaks and double quotes (&quot;).
     * @type {string}
     * @memberof Phase2Options
     */
    preSharedKey?: string;
}
export declare function Phase2OptionsFromJSON(json: any): Phase2Options;
export declare function Phase2OptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Phase2Options;
export declare function Phase2OptionsToJSON(value?: Phase2Options | null): any;
