/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime.js';
export function AccountFromJSON(json) {
    return AccountFromJSONTyped(json, false);
}
export function AccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'city': !exists(json, 'City') ? undefined : json['City'],
        'companyName': !exists(json, 'CompanyName') ? undefined : json['CompanyName'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'customerId': !exists(json, 'CustomerId') ? undefined : json['CustomerId'],
        'email': !exists(json, 'Email') ? undefined : json['Email'],
        'firstName': !exists(json, 'FirstName') ? undefined : json['FirstName'],
        'jobTitle': !exists(json, 'JobTitle') ? undefined : json['JobTitle'],
        'lastName': !exists(json, 'LastName') ? undefined : json['LastName'],
        'mobileNumber': !exists(json, 'MobileNumber') ? undefined : json['MobileNumber'],
        'phoneNumber': !exists(json, 'PhoneNumber') ? undefined : json['PhoneNumber'],
        'stateProvince': !exists(json, 'StateProvince') ? undefined : json['StateProvince'],
        'vatNumber': !exists(json, 'VatNumber') ? undefined : json['VatNumber'],
        'zipCode': !exists(json, 'ZipCode') ? undefined : json['ZipCode'],
    };
}
export function AccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'City': value.city,
        'CompanyName': value.companyName,
        'Country': value.country,
        'CustomerId': value.customerId,
        'Email': value.email,
        'FirstName': value.firstName,
        'JobTitle': value.jobTitle,
        'LastName': value.lastName,
        'MobileNumber': value.mobileNumber,
        'PhoneNumber': value.phoneNumber,
        'StateProvince': value.stateProvince,
        'VatNumber': value.vatNumber,
        'ZipCode': value.zipCode,
    };
}
