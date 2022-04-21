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
import { exists } from '../runtime';
import { BlockDeviceMappingCreatedFromJSON, BlockDeviceMappingCreatedToJSON, } from './BlockDeviceMappingCreated';
import { NicLightFromJSON, NicLightToJSON, } from './NicLight';
import { PlacementFromJSON, PlacementToJSON, } from './Placement';
import { ResourceTagFromJSON, ResourceTagToJSON, } from './ResourceTag';
import { SecurityGroupLightFromJSON, SecurityGroupLightToJSON, } from './SecurityGroupLight';
export function VmFromJSON(json) {
    return VmFromJSONTyped(json, false);
}
export function VmFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'architecture': !exists(json, 'Architecture') ? undefined : json['Architecture'],
        'blockDeviceMappings': !exists(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingCreatedFromJSON)),
        'bsuOptimized': !exists(json, 'BsuOptimized') ? undefined : json['BsuOptimized'],
        'clientToken': !exists(json, 'ClientToken') ? undefined : json['ClientToken'],
        'creationDate': !exists(json, 'CreationDate') ? undefined : json['CreationDate'],
        'deletionProtection': !exists(json, 'DeletionProtection') ? undefined : json['DeletionProtection'],
        'hypervisor': !exists(json, 'Hypervisor') ? undefined : json['Hypervisor'],
        'imageId': !exists(json, 'ImageId') ? undefined : json['ImageId'],
        'isSourceDestChecked': !exists(json, 'IsSourceDestChecked') ? undefined : json['IsSourceDestChecked'],
        'keypairName': !exists(json, 'KeypairName') ? undefined : json['KeypairName'],
        'launchNumber': !exists(json, 'LaunchNumber') ? undefined : json['LaunchNumber'],
        'netId': !exists(json, 'NetId') ? undefined : json['NetId'],
        'nics': !exists(json, 'Nics') ? undefined : (json['Nics'].map(NicLightFromJSON)),
        'osFamily': !exists(json, 'OsFamily') ? undefined : json['OsFamily'],
        'performance': !exists(json, 'Performance') ? undefined : json['Performance'],
        'placement': !exists(json, 'Placement') ? undefined : PlacementFromJSON(json['Placement']),
        'privateDnsName': !exists(json, 'PrivateDnsName') ? undefined : json['PrivateDnsName'],
        'privateIp': !exists(json, 'PrivateIp') ? undefined : json['PrivateIp'],
        'productCodes': !exists(json, 'ProductCodes') ? undefined : json['ProductCodes'],
        'publicDnsName': !exists(json, 'PublicDnsName') ? undefined : json['PublicDnsName'],
        'publicIp': !exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'reservationId': !exists(json, 'ReservationId') ? undefined : json['ReservationId'],
        'rootDeviceName': !exists(json, 'RootDeviceName') ? undefined : json['RootDeviceName'],
        'rootDeviceType': !exists(json, 'RootDeviceType') ? undefined : json['RootDeviceType'],
        'securityGroups': !exists(json, 'SecurityGroups') ? undefined : (json['SecurityGroups'].map(SecurityGroupLightFromJSON)),
        'state': !exists(json, 'State') ? undefined : json['State'],
        'stateReason': !exists(json, 'StateReason') ? undefined : json['StateReason'],
        'subnetId': !exists(json, 'SubnetId') ? undefined : json['SubnetId'],
        'tags': !exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTagFromJSON)),
        'userData': !exists(json, 'UserData') ? undefined : json['UserData'],
        'vmId': !exists(json, 'VmId') ? undefined : json['VmId'],
        'vmInitiatedShutdownBehavior': !exists(json, 'VmInitiatedShutdownBehavior') ? undefined : json['VmInitiatedShutdownBehavior'],
        'vmType': !exists(json, 'VmType') ? undefined : json['VmType'],
    };
}
export function VmToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Architecture': value.architecture,
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingCreatedToJSON)),
        'BsuOptimized': value.bsuOptimized,
        'ClientToken': value.clientToken,
        'CreationDate': value.creationDate,
        'DeletionProtection': value.deletionProtection,
        'Hypervisor': value.hypervisor,
        'ImageId': value.imageId,
        'IsSourceDestChecked': value.isSourceDestChecked,
        'KeypairName': value.keypairName,
        'LaunchNumber': value.launchNumber,
        'NetId': value.netId,
        'Nics': value.nics === undefined ? undefined : (value.nics.map(NicLightToJSON)),
        'OsFamily': value.osFamily,
        'Performance': value.performance,
        'Placement': PlacementToJSON(value.placement),
        'PrivateDnsName': value.privateDnsName,
        'PrivateIp': value.privateIp,
        'ProductCodes': value.productCodes,
        'PublicDnsName': value.publicDnsName,
        'PublicIp': value.publicIp,
        'ReservationId': value.reservationId,
        'RootDeviceName': value.rootDeviceName,
        'RootDeviceType': value.rootDeviceType,
        'SecurityGroups': value.securityGroups === undefined ? undefined : (value.securityGroups.map(SecurityGroupLightToJSON)),
        'State': value.state,
        'StateReason': value.stateReason,
        'SubnetId': value.subnetId,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTagToJSON)),
        'UserData': value.userData,
        'VmId': value.vmId,
        'VmInitiatedShutdownBehavior': value.vmInitiatedShutdownBehavior,
        'VmType': value.vmType,
    };
}