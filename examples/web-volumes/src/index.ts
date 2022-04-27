import * as osc from "outscale-api";

export default function ShowVolumes() {
    let accessKey = document.getElementById("accessKey");
    if (!accessKey) {
        console.error("Cannot getElementById(\"accessKey\")");
        return;
    }
    let secretKey = document.getElementById("secretKey");
    if (!secretKey) {
        console.error("Cannot getElementById(\"secretKey\")");
        return;
    }
    let result = document.getElementById("result");
    if (!result) {
        console.error("Cannot getElementById(\"result\")");
        return;
    }
    result.innerHTML = "Quering Outscale API ...";
    let configuration = new osc.Configuration();
   

    let api = new osc.BaseAPI(configuration);
    let v = new osc.VolumeApi(configuration)
    
    let readParameters : osc.ReadVolumesOperationRequest = {};

    v.readVolumes(readParameters).catch((res: any) => {
        let text = document.getElementById("result");
        if (text == null) {
            return;
        }
        if (res.status == 401) {
            text.innerHTML = "Error 401, bad credentials?";
            return;
        }
        text.innerHTML = res.status;
    })
    .then((res: any) => {
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
    }, (err: any) => {
        console.error(err);
        console.log(JSON.stringify(err));
        let text = document.getElementById("result");
        if (text == null) {
            return;
        }
        text.innerHTML = "An error occured";
    });
}
