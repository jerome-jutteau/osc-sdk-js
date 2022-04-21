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
import * as runtime from '../runtime';
import { CheckAuthenticationRequest, CheckAuthenticationResponse, CreateAccountRequest, CreateAccountResponse, ReadAccountsRequest, ReadAccountsResponse, ReadConsumptionAccountRequest, ReadConsumptionAccountResponse, ResetAccountPasswordRequest, ResetAccountPasswordResponse, SendResetPasswordEmailRequest, SendResetPasswordEmailResponse, UpdateAccountRequest, UpdateAccountResponse } from '../models';
export interface CheckAuthenticationOperationRequest {
    checkAuthenticationRequest?: CheckAuthenticationRequest;
}
export interface CreateAccountOperationRequest {
    createAccountRequest?: CreateAccountRequest;
}
export interface ReadAccountsOperationRequest {
    readAccountsRequest?: ReadAccountsRequest;
}
export interface ReadConsumptionAccountOperationRequest {
    readConsumptionAccountRequest?: ReadConsumptionAccountRequest;
}
export interface ResetAccountPasswordOperationRequest {
    resetAccountPasswordRequest?: ResetAccountPasswordRequest;
}
export interface SendResetPasswordEmailOperationRequest {
    sendResetPasswordEmailRequest?: SendResetPasswordEmailRequest;
}
export interface UpdateAccountOperationRequest {
    updateAccountRequest?: UpdateAccountRequest;
}
/**
 * AccountApi - interface
 *
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
    /**
     *
     * @param {CheckAuthenticationRequest} [checkAuthenticationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    checkAuthenticationRaw(requestParameters: CheckAuthenticationOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckAuthenticationResponse>>;
    /**
     */
    checkAuthentication(requestParameters: CheckAuthenticationOperationRequest, initOverrides?: RequestInit): Promise<CheckAuthenticationResponse>;
    /**
     *
     * @param {CreateAccountRequest} [createAccountRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    createAccountRaw(requestParameters: CreateAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateAccountResponse>>;
    /**
     */
    createAccount(requestParameters: CreateAccountOperationRequest, initOverrides?: RequestInit): Promise<CreateAccountResponse>;
    /**
     *
     * @param {ReadAccountsRequest} [readAccountsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    readAccountsRaw(requestParameters: ReadAccountsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadAccountsResponse>>;
    /**
     */
    readAccounts(requestParameters: ReadAccountsOperationRequest, initOverrides?: RequestInit): Promise<ReadAccountsResponse>;
    /**
     *
     * @param {ReadConsumptionAccountRequest} [readConsumptionAccountRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    readConsumptionAccountRaw(requestParameters: ReadConsumptionAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadConsumptionAccountResponse>>;
    /**
     */
    readConsumptionAccount(requestParameters: ReadConsumptionAccountOperationRequest, initOverrides?: RequestInit): Promise<ReadConsumptionAccountResponse>;
    /**
     *
     * @param {ResetAccountPasswordRequest} [resetAccountPasswordRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    resetAccountPasswordRaw(requestParameters: ResetAccountPasswordOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResetAccountPasswordResponse>>;
    /**
     */
    resetAccountPassword(requestParameters: ResetAccountPasswordOperationRequest, initOverrides?: RequestInit): Promise<ResetAccountPasswordResponse>;
    /**
     *
     * @param {SendResetPasswordEmailRequest} [sendResetPasswordEmailRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    sendResetPasswordEmailRaw(requestParameters: SendResetPasswordEmailOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SendResetPasswordEmailResponse>>;
    /**
     */
    sendResetPasswordEmail(requestParameters: SendResetPasswordEmailOperationRequest, initOverrides?: RequestInit): Promise<SendResetPasswordEmailResponse>;
    /**
     *
     * @param {UpdateAccountRequest} [updateAccountRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    updateAccountRaw(requestParameters: UpdateAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateAccountResponse>>;
    /**
     */
    updateAccount(requestParameters: UpdateAccountOperationRequest, initOverrides?: RequestInit): Promise<UpdateAccountResponse>;
}
/**
 *
 */
export declare class AccountApi extends runtime.BaseAPI implements AccountApiInterface {
    /**
     */
    checkAuthenticationRaw(requestParameters: CheckAuthenticationOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckAuthenticationResponse>>;
    /**
     */
    checkAuthentication(requestParameters?: CheckAuthenticationOperationRequest, initOverrides?: RequestInit): Promise<CheckAuthenticationResponse>;
    /**
     */
    createAccountRaw(requestParameters: CreateAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateAccountResponse>>;
    /**
     */
    createAccount(requestParameters?: CreateAccountOperationRequest, initOverrides?: RequestInit): Promise<CreateAccountResponse>;
    /**
     */
    readAccountsRaw(requestParameters: ReadAccountsOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadAccountsResponse>>;
    /**
     */
    readAccounts(requestParameters?: ReadAccountsOperationRequest, initOverrides?: RequestInit): Promise<ReadAccountsResponse>;
    /**
     */
    readConsumptionAccountRaw(requestParameters: ReadConsumptionAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReadConsumptionAccountResponse>>;
    /**
     */
    readConsumptionAccount(requestParameters?: ReadConsumptionAccountOperationRequest, initOverrides?: RequestInit): Promise<ReadConsumptionAccountResponse>;
    /**
     */
    resetAccountPasswordRaw(requestParameters: ResetAccountPasswordOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResetAccountPasswordResponse>>;
    /**
     */
    resetAccountPassword(requestParameters?: ResetAccountPasswordOperationRequest, initOverrides?: RequestInit): Promise<ResetAccountPasswordResponse>;
    /**
     */
    sendResetPasswordEmailRaw(requestParameters: SendResetPasswordEmailOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SendResetPasswordEmailResponse>>;
    /**
     */
    sendResetPasswordEmail(requestParameters?: SendResetPasswordEmailOperationRequest, initOverrides?: RequestInit): Promise<SendResetPasswordEmailResponse>;
    /**
     */
    updateAccountRaw(requestParameters: UpdateAccountOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateAccountResponse>>;
    /**
     */
    updateAccount(requestParameters?: UpdateAccountOperationRequest, initOverrides?: RequestInit): Promise<UpdateAccountResponse>;
}