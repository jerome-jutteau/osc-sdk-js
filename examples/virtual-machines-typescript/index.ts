import { Configuration, BaseAPI } from "osc";
import { VolumeApi, ReadVolumesOperationRequest} from "osc/apis"

let configuration = new Configuration();

let api = new BaseAPI(configuration);
let v = new VolumeApi(configuration)

let readParameters : ReadVolumesOperationRequest = {};
let response = v.readVolumes(readParameters)
