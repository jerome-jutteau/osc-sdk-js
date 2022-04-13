//import { ReadVolumesRequest, ReadVolumesRequestFromJSON } from '../../src/models/ReadVolumesRequest';
import { ReadVolumesRequest, ReadVolumesRequestFromJSON } from '@osc/models/ReadVolumesRequest';

console.log("hello");
let readRequest : ReadVolumesRequest = ReadVolumesRequestFromJSON({})
console.log(readRequest);

//VolumeApi.readVolumes(readRequest, )