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
import { exists } from '../runtime';
export function ConsumptionEntryFromJSON(json) {
    return ConsumptionEntryFromJSONTyped(json, false);
}
export function ConsumptionEntryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'category': !exists(json, 'Category') ? undefined : json['Category'],
        'fromDate': !exists(json, 'FromDate') ? undefined : json['FromDate'],
        'operation': !exists(json, 'Operation') ? undefined : json['Operation'],
        'payingAccountId': !exists(json, 'PayingAccountId') ? undefined : json['PayingAccountId'],
        'service': !exists(json, 'Service') ? undefined : json['Service'],
        'subregionName': !exists(json, 'SubregionName') ? undefined : json['SubregionName'],
        'title': !exists(json, 'Title') ? undefined : json['Title'],
        'toDate': !exists(json, 'ToDate') ? undefined : json['ToDate'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
    };
}
export function ConsumptionEntryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Category': value.category,
        'FromDate': value.fromDate,
        'Operation': value.operation,
        'PayingAccountId': value.payingAccountId,
        'Service': value.service,
        'SubregionName': value.subregionName,
        'Title': value.title,
        'ToDate': value.toDate,
        'Type': value.type,
        'Value': value.value,
    };
}