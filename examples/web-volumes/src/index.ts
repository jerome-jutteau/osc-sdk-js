import * as osc from "outscale-api";
import { PermissionsOnResourceCreationFromJSON } from "outscale-api";

export default function ShowVolumes() {
    printResult("Quering Outscale API ...");

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

    getVolumes(accessKey, secretKey).then(volumesResult => {
        if (typeof volumesResult == "string") {
            printResult(volumesResult);
            return;
        }
        printResult(volumes2Html(volumesResult));
    });
}

function printResult(content: string | HTMLDivElement) {
    let result = document.getElementById("result");
    if (!result) {
        console.error("Cannot getElementById(\"result\")");
        return;
    }
    result.textContent = '';
    if (typeof content == "string") {
        const querying = document.createElement('p');
        querying.innerHTML = content;
        result.appendChild(querying);
    } else {
        result.appendChild(content);
    }
}

 async function getVolumes(accessKey: string, secretKey: string): Promise<Array<osc.Volume> | string> {
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

    let api = new osc.VolumeApi(config)
    return api.readVolumes(readParameters).catch((res: any) => {
        return "Error 401, bad credentials?";
    })
    .then((res: osc.ReadVolumesResponse | string) => {
        if (typeof res == "string") {
            return res;
        }
        if (res.volumes === undefined || res.volumes.length == 0) {
            return "Listing suceeded but it seems you have no volume";
        }
        return res.volumes;
    }, (err: any) => {
        return "error: " + err.toString();
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