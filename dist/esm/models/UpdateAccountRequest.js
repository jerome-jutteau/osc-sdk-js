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
export function UpdateAccountRequestFromJSON(json) {
    return UpdateAccountRequestFromJSONTyped(json, false);
}
export function UpdateAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalEmails': !exists(json, 'AdditionalEmails') ? undefined : json['AdditionalEmails'],
        'city': !exists(json, 'City') ? undefined : json['City'],
        'companyName': !exists(json, 'CompanyName') ? undefined : json['CompanyName'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
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
export function UpdateAccountRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AdditionalEmails': value.additionalEmails,
        'City': value.city,
        'CompanyName': value.companyName,
        'Country': value.country,
        'DryRun': value.dryRun,
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
