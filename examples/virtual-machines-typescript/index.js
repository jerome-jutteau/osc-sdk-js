import { Configuration, BaseAPI } from "../../dist/index.js";
import { VolumeApi } from "../../dist/apis/index.js";
let configuration = new Configuration();
let api = new BaseAPI(configuration);
let v = new VolumeApi(configuration);
let readParameters = {};
let response = v.readVolumes(readParameters);
