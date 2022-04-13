//import { ReadVolumesRequest, ReadVolumesRequestFromJSON } from '../../dist/models/ReadVolumesRequest.js';
import { Configuration, Volume, VolumeApi; ReadVolumesOperationRequest, ReadVolumesResponse} from "../../src";

const configuration = new Configuration({
  basePath: window.location.origin,
});

const volumeApi = new VolumeApi(configuration);

let req: ReadVolumesOperationRequest;
let res: Promise<ReadVolumesResponse> = volumeApi.readVolumes(req)
