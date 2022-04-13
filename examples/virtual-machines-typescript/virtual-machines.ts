import * as osc from '../../src/index';
import * as volume from '../../src/apis/index';

const configuration = new osc.Configuration({
  basePath: window.location.origin,
});

const api = new osc.BaseAPI(configuration);
let v = new volume.VolumeApi(configuration)

let readParameters : volume.ReadVolumesOperationRequest = {};
let response = v.readVolumes(readParameters)
