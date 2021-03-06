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
 * Information about the account.
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The ID of the account.
     * @type {string}
     * @memberof Account
     */
    accountId?: string;
    /**
     * One or more additional email addresses for the account. These addresses are used for notifications only.
     * @type {Array<string>}
     * @memberof Account
     */
    additionalEmails?: Array<string>;
    /**
     * The city of the account owner.
     * @type {string}
     * @memberof Account
     */
    city?: string;
    /**
     * The name of the company for the account.
     * @type {string}
     * @memberof Account
     */
    companyName?: string;
    /**
     * The country of the account owner.
     * @type {string}
     * @memberof Account
     */
    country?: string;
    /**
     * The ID of the customer.
     * @type {string}
     * @memberof Account
     */
    customerId?: string;
    /**
     * The main email address for the account. This address is used for your credentials and for notifications.
     * @type {string}
     * @memberof Account
     */
    email?: string;
    /**
     * The first name of the account owner.
     * @type {string}
     * @memberof Account
     */
    firstName?: string;
    /**
     * The job title of the account owner.
     * @type {string}
     * @memberof Account
     */
    jobTitle?: string;
    /**
     * The last name of the account owner.
     * @type {string}
     * @memberof Account
     */
    lastName?: string;
    /**
     * The mobile phone number of the account owner.
     * @type {string}
     * @memberof Account
     */
    mobileNumber?: string;
    /**
     * The landline phone number of the account owner.
     * @type {string}
     * @memberof Account
     */
    phoneNumber?: string;
    /**
     * The state/province of the account.
     * @type {string}
     * @memberof Account
     */
    stateProvince?: string;
    /**
     * The value added tax (VAT) number for the account.
     * @type {string}
     * @memberof Account
     */
    vatNumber?: string;
    /**
     * The ZIP code of the city.
     * @type {string}
     * @memberof Account
     */
    zipCode?: string;
}
export declare function AccountFromJSON(json: any): Account;
export declare function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account;
export declare function AccountToJSON(value?: Account | null): any;
