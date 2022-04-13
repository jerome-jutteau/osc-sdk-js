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
 * One or more filters.
 * @export
 * @interface FiltersVolume
 */
export interface FiltersVolume {
    /**
     * The dates and times at which the volumes were created.
     * @type {Array<Date>}
     * @memberof FiltersVolume
     */
    creationDates?: Array<Date>;
    /**
     * Whether the volumes are deleted or not when terminating the VMs.
     * @type {boolean}
     * @memberof FiltersVolume
     */
    linkVolumeDeleteOnVmDeletion?: boolean;
    /**
     * The VM device names.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    linkVolumeDeviceNames?: Array<string>;
    /**
     * The dates and times at which the volumes were created.
     * @type {Array<Date>}
     * @memberof FiltersVolume
     */
    linkVolumeLinkDates?: Array<Date>;
    /**
     * The attachment states of the volumes (`attaching` \| `detaching` \| `attached` \| `detached`).
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    linkVolumeLinkStates?: Array<string>;
    /**
     * One or more IDs of VMs.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    linkVolumeVmIds?: Array<string>;
    /**
     * The snapshots from which the volumes were created.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    snapshotIds?: Array<string>;
    /**
     * The names of the Subregions in which the volumes were created.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    subregionNames?: Array<string>;
    /**
     * The keys of the tags associated with the volumes.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the volumes.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the volumes, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    tags?: Array<string>;
    /**
     * The IDs of the volumes.
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    volumeIds?: Array<string>;
    /**
     * The sizes of the volumes, in gibibytes (GiB).
     * @type {Array<number>}
     * @memberof FiltersVolume
     */
    volumeSizes?: Array<number>;
    /**
     * The states of the volumes (`creating` \| `available` \| `in-use` \| `updating` \| `deleting` \| `error`).
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    volumeStates?: Array<string>;
    /**
     * The types of the volumes (`standard` \| `gp2` \| `io1`).
     * @type {Array<string>}
     * @memberof FiltersVolume
     */
    volumeTypes?: Array<string>;
}
export declare function FiltersVolumeFromJSON(json: any): FiltersVolume;
export declare function FiltersVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersVolume;
export declare function FiltersVolumeToJSON(value?: FiltersVolume | null): any;
