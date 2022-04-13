//import { ReadVolumesRequest, ReadVolumesRequestFromJSON } from '../../dist/models/ReadVolumesRequest.js';
import { Configuration } from "../../src";
const configuration = new Configuration({
    basePath: window.location.origin,
});
const volumeApi = new VolumesApi(configuration);
const posts = volumeApi.getPosts();
