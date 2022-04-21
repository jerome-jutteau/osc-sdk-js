import * as osc from "outscale-api";
var configuration = new osc.Configuration();
var api = new osc.BaseAPI(configuration);
var v = new osc.VolumeApi(configuration);
var readParameters = {};
var response = v.readVolumes(readParameters);
