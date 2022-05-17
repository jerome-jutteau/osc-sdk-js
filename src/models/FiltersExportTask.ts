/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * One or more filters.
 * @export
 * @interface FiltersExportTask
 */
export interface FiltersExportTask {
    /**
     * The IDs of the export tasks.
     * @type {Array<string>}
     * @memberof FiltersExportTask
     */
    taskIds?: Array<string>;
}

export function FiltersExportTaskFromJSON(json: any): FiltersExportTask {
    return FiltersExportTaskFromJSONTyped(json, false);
}

export function FiltersExportTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersExportTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'taskIds': !exists(json, 'TaskIds') ? undefined : json['TaskIds'],
    };
}

export function FiltersExportTaskToJSON(value?: FiltersExportTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TaskIds': value.taskIds,
    };
}

