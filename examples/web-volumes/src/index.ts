import * as osc from "outscale-api";

export default function ShowVolumes() {
    console.log("entering ShowVolumes");
    let result = document.getElementById("result");
    if (!result) {
        console.error("Cannot getElementById(\"result\")");
        return;
    }
    result.textContent = '';

    const querying = document.createElement('p');
    querying.innerHTML = "Quering Outscale API ...";
    result.appendChild(querying);

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
        const error = document.createElement('p');
        error.innerHTML = "Please set Access Key and Secret Key";
        result.appendChild(error);
        return;
    }

    if (accessKey.length != 20 || secretKey.length != 40 ) {
        const error = document.createElement('p');
        error.innerHTML = "Bad Access Key or Secret Key";
        result.appendChild(error);
        return;
    }

    let config = new osc.Configuration({
        awsV4SignParameters: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            service: "api",
        }
    });
    let readParameters : osc.ReadVolumesOperationRequest = {
        readVolumesRequest: {}
    };

    let v = new osc.VolumeApi(config)
    v.readVolumes(readParameters).catch((res: any) => {
        console.log("entering catch");
        console.log("catch res:");
        console.log(res);
        let result = document.getElementById("result");
        if (result == null) {
            return;
        }
        if (res.status == 401) {
            const error = document.createElement('p');
            error.innerHTML = "Error 401, bad credentials?";
            result.appendChild(error);
            return;
        }
        result.innerHTML = res.status;
    })
    .then((res: osc.ReadVolumesResponse | void) => {
        if (res === undefined) {
            return;
        }
        console.log("entering response");
        let result = document.getElementById("result");
        if (result == null) {
            return;
        }
        let requestId = res.responseContext?.requestId;
        if (requestId == undefined) {
            console.log("No request ID");
            return;
        }
        console.log("Request ID:" + requestId)
        if (res.volumes === undefined || res.volumes.length == 0) {
            const error = document.createElement('p');
            error.innerHTML = "Listing suceeded but it seems you have no volume";
            result.appendChild(error);
            return;
        }
        result.textContent = '';
        result.appendChild(volumes2Html(res.volumes));
    }, (err: any) => {
        console.log("entering error after then");
        console.error(err);
        console.log(JSON.stringify(err));
        let result = document.getElementById("result");
        if (result == null) {
            return;
        }
        const error = document.createElement('p');
        error.innerHTML = "An error occured";
        result.appendChild(error);
    });
}

function volumes2Html(volumes: Array<osc.Volume>): HTMLDivElement {
    const result = document.createElement('div');

    const intro = document.createElement('p');
    intro.innerHTML = "You have "+ volumes.length + " Volumes with a total of " + sizeOfAllVolumes(volumes) + " GiB";
    result.appendChild(intro);

    const table = document.createElement('table');
    result.appendChild(table);

    const header = document.createElement('tr');
    table.appendChild(header);

    const idHeader = document.createElement('th');
    idHeader.innerHTML = "Id";
    header.appendChild(idHeader);

    const sizeHeader = document.createElement('th');
    sizeHeader.innerHTML = "Size";
    header.appendChild(sizeHeader);

    const typeHeader = document.createElement('th');
    typeHeader.innerHTML = "Type";
    header.appendChild(typeHeader);

    const subregionHeader = document.createElement('th');
    subregionHeader.innerHTML = "Subregion";
    header.appendChild(subregionHeader);

    const stateHeader = document.createElement('th');
    stateHeader.innerHTML = "State";
    header.appendChild(stateHeader);

    for (const volume of volumes) {
        const volumeRow = document.createElement('tr');
        table.appendChild(volumeRow);

        const volumeId = document.createElement('td');
        volumeId.innerHTML = volume.volumeId?.toString() ?? "Unknown";
        volumeRow.appendChild(volumeId);

        const size = document.createElement('td');
        size.innerHTML = volume.size?.toString() ?? "Unknown";
        volumeRow.appendChild(size);

        const volumeType = document.createElement('td');
        volumeType.innerHTML = volume.volumeType?.toString() ?? "Unknown";
        volumeRow.appendChild(volumeType);

        const subregionName = document.createElement('td');
        subregionName.innerHTML = volume.subregionName?.toString() ?? "Unknown";
        volumeRow.appendChild(subregionName);

        const state = document.createElement('td');
        state.innerHTML = volume.state?.toString() ?? "Unknown";
        volumeRow.appendChild(state);
    }
    return result;
}

function sizeOfAllVolumes(volumes: Array<osc.Volume>): number {
    let total = 0;
    for (const volume of volumes) {
        if (volume.size === undefined) {
            continue;
        }
        total += volume.size;
    }
    return total;
}