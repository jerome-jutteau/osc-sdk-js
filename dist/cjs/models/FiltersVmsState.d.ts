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
 * One or more filters.
 * @export
 * @interface FiltersVmsState
 */
export interface FiltersVmsState {
    /**
     * The code for the scheduled event (`system-reboot` \| `system-maintenance`).
     * @type {Array<string>}
     * @memberof FiltersVmsState
     */
    maintenanceEventCodes?: Array<string>;
    /**
     * The description of the scheduled event.
     * @type {Array<string>}
     * @memberof FiltersVmsState
     */
    maintenanceEventDescriptions?: Array<string>;
    /**
     * The latest time the event can end.
     * @type {Array<Date>}
     * @memberof FiltersVmsState
     */
    maintenanceEventsNotAfter?: Array<Date>;
    /**
     * The earliest time the event can start.
     * @type {Array<Date>}
     * @memberof FiltersVmsState
     */
    maintenanceEventsNotBefore?: Array<Date>;
    /**
     * The names of the Subregions of the VMs.
     * @type {Array<string>}
     * @memberof FiltersVmsState
     */
    subregionNames?: Array<string>;
    /**
     * One or more IDs of VMs.
     * @type {Array<string>}
     * @memberof FiltersVmsState
     */
    vmIds?: Array<string>;
    /**
     * The states of the VMs (`pending` \| `running` \| `stopping` \| `stopped` \| `shutting-down` \| `terminated` \| `quarantine`).
     * @type {Array<string>}
     * @memberof FiltersVmsState
     */
    vmStates?: Array<string>;
}
export declare function FiltersVmsStateFromJSON(json: any): FiltersVmsState;
export declare function FiltersVmsStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersVmsState;
export declare function FiltersVmsStateToJSON(value?: FiltersVmsState | null): any;
