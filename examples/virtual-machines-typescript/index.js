import * as osc from "../../dist/index.js";
let configuration = new osc.Configuration();
let api = new osc.BaseAPI(configuration);
let v = new osc.VolumeApi(configuration);
let readParameters = {};
let response = v.readVolumes(readParameters);
