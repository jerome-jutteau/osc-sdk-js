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
import {
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';

/**
 * 
 * @export
 * @interface DeleteTagsRequest
 */
export interface DeleteTagsRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof DeleteTagsRequest
     */
    dryRun?: boolean;
    /**
     * One or more resource IDs.
     * @type {Array<string>}
     * @memberof DeleteTagsRequest
     */
    resourceIds: Array<string>;
    /**
     * One or more tags to delete (if you set a tag value, only the tags matching exactly this value are deleted).
     * @type {Array<ResourceTag>}
     * @memberof DeleteTagsRequest
     */
    tags: Array<ResourceTag>;
}

export function DeleteTagsRequestFromJSON(json: any): DeleteTagsRequest {
    return DeleteTagsRequestFromJSONTyped(json, false);
}

export function DeleteTagsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTagsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'resourceIds': json['ResourceIds'],
        'tags': ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
    };
}

export function DeleteTagsRequestToJSON(value?: DeleteTagsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'ResourceIds': value.resourceIds,
        'Tags': ((value.tags as Array<any>).map(ResourceTagToJSON)),
    };
}

