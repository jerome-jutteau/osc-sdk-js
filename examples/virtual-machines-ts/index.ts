import * as osc from "outscale-api";

let configuration = new osc.Configuration();

let api = new osc.BaseAPI(configuration);
let v = new osc.VolumeApi(configuration)

let readParameters : osc.ReadVolumesOperationRequest = {};
let response = v.readVolumes(readParameters)
