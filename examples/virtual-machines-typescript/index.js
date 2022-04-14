import { Configuration, BaseAPI } from "osc";
import { VolumeApi } from "osc/apis";
let configuration = new Configuration();
let api = new BaseAPI(configuration);
let v = new VolumeApi(configuration);
let readParameters = {};
let response = v.readVolumes(readParameters);
