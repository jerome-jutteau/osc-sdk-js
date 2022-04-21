import * as osc from "outscale-api";

export default function ShowVolumes() {
    let result = document.getElementById("result");
    if (result == null) {
        return;
    }  
    result.innerHTML = "Quering Outscale API ...";

    let configuration = new osc.Configuration();

    let api = new osc.BaseAPI(configuration);
    let v = new osc.VolumeApi(configuration)
    
    let readParameters : osc.ReadVolumesOperationRequest = {};

    v.readVolumes(readParameters).catch(res => {
        let text = document.getElementById("result");
        if (text == null) {
            return;
        }
        if (res.status == 401) {
            text.innerHTML = "Error 401, bad credentials?";
        }
    })
    .then(res => {
        if (res == null) {
            return;
        }
        let text = document.getElementById("result");
        if (text == null) {
            return;
        }
        if (!res.responseContext) {
            text.innerHTML = "No response context";
            return;
        }
        let responseContext = res.responseContext;
        if (!responseContext.requestId) {
            text.innerHTML = "No requestId";
            return;
        }
        let requestId = responseContext.requestId;
        text.innerHTML = requestId.toString();
    }, err => {
        console.error(err);
        console.log(JSON.stringify(err));
        let text = document.getElementById("result");
        if (text == null) {
            return;
        }
        text.innerHTML = "An error occured";
    });
}
