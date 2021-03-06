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
import { OsuApiKey } from './OsuApiKey';
/**
 * Information about the OOS export task to create.
 * @export
 * @interface OsuExportToCreate
 */
export interface OsuExportToCreate {
    /**
     * The format of the export disk (`qcow2` \| `raw`).
     * @type {string}
     * @memberof OsuExportToCreate
     */
    diskImageFormat: string;
    /**
     *
     * @type {OsuApiKey}
     * @memberof OsuExportToCreate
     */
    osuApiKey?: OsuApiKey;
    /**
     * The name of the OOS bucket where you want to export the object.
     * @type {string}
     * @memberof OsuExportToCreate
     */
    osuBucket: string;
    /**
     * The URL of the manifest file.
     * @type {string}
     * @memberof OsuExportToCreate
     */
    osuManifestUrl?: string;
    /**
     * The prefix for the key of the OOS object.
     * @type {string}
     * @memberof OsuExportToCreate
     */
    osuPrefix?: string;
}
export declare function OsuExportToCreateFromJSON(json: any): OsuExportToCreate;
export declare function OsuExportToCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): OsuExportToCreate;
export declare function OsuExportToCreateToJSON(value?: OsuExportToCreate | null): any;
