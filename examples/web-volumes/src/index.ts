import * as osc from "outscale-api";

export default function ShowVolumes() {
    console.log("entering ShowVolumes");
    let result = document.getElementById("result");
    if (!result) {
        console.error("Cannot getElementById(\"result\")");
        return;
    }
    result.innerHTML = "Quering Outscale API ...";

    const accessKeyField = document.getElementById("accessKey") as HTMLInputElement;
    if (!accessKeyField) {
        console.error("Cannot getElementById(\"accessKey\")");
        return;
    }
    const accessKey = accessKeyField.value;

    const secretKeyField = document.getElementById("secretKey") as HTMLInputElement;;
    if (!secretKeyField) {
        console.error("Cannot getElementById(\"secretKey\")");
        return;
    }
    const secretKey = secretKeyField.value;
    if (accessKey.length == 0 || secretKey.length == 0 ) {
        result.innerHTML = "Please set Access Key and Secret Key";
    }

    let config = new osc.Configuration({
        awsV4SignParameters: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            //service: "oapi",
        }
    });
    //let api = new osc.BaseAPI(config);
    let readParameters : osc.ReadVolumesOperationRequest = {};
    let v = new osc.VolumeApi(config)
    v.readVolumes(readParameters).catch((res: any) => {
        console.log("entering Catch");
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
        console.log("entering response");
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
