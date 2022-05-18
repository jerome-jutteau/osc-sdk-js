import * as osc from "outscale-api";
import { ErrorResponse, Errors } from "outscale-api";

export default function ShowVms() {
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

    getVms(accessKey, secretKey).then(vmsResult => {
        if (typeof vmsResult == "string") {
            printResult(vmsResult);
            return;
        }
        printResult(vms2Html(vmsResult));
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

 async function getVms(accessKey: string, secretKey: string): Promise<Array<osc.Vm> | string> {
    let config = new osc.Configuration({
        awsV4SignParameters: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            service: "api",
            region: "eu-west-2",
        }
    });
    let readParameters : osc.ReadVmsOperationRequest = {
        readVmsRequest: {}
    };

    let api = new osc.VmApi(config)
    return api.readVms(readParameters).catch((rejected: any) => {
        let resp: Response | undefined = rejected;
        if (resp == undefined) {
            return "Error: " + rejected.toString();
        }
        let errorResp: ErrorResponse | undefined = rejected.Errors;
        if (errorResp == undefined) {
            return "Internal server error";
        }
        let errors: Errors[] | undefined = errorResp.errors;
        if (errors == undefined) {
            return "Errors not available";
        }
        let ret = "";
        for (const error of errors) {
            ret += error.type + ": " + error.details + ". ";
        }
        return ret;
    })
    .then((res: osc.ReadVmsResponse | string) => {
        if (typeof res == "string") {
            return res;
        }
        if (res.vms === undefined || res.vms.length == 0) {
            return "Listing suceeded but it seems you have no vm";
        }
        return res.vms;
    }, (err: any) => {
        return "error: " + err.toString();
    });
}

function vms2Html(vms: Array<osc.Vm>): HTMLDivElement {
    const result = document.createElement('div');

    const intro = document.createElement('p');
    intro.innerHTML = "You have "+ vms.length + " Virtual Machines:";
    result.appendChild(intro);

    const table = document.createElement('table');
    result.appendChild(table);

    const header = document.createElement('tr');
    table.appendChild(header);

    const idHeader = document.createElement('th');
    idHeader.innerHTML = "VmId";
    header.appendChild(idHeader);

    const stateHeader = document.createElement('th');
    stateHeader.innerHTML = "State";
    header.appendChild(stateHeader);

    const typeHeader = document.createElement('th');
    typeHeader.innerHTML = "VmType";
    header.appendChild(typeHeader);

    const perfHeader = document.createElement('th');
    perfHeader.innerHTML = "Performance";
    header.appendChild(perfHeader);

    const publicIpHeader = document.createElement('th');
    publicIpHeader.innerHTML = "PublicIp";
    header.appendChild(publicIpHeader);

    for (const vm of vms) {
        const vmRow = document.createElement('tr');
        table.appendChild(vmRow);

        const vmId = document.createElement('td');
        vmId.innerHTML = vm.vmId?.toString() ?? "Unknown";
        vmRow.appendChild(vmId);

        const state = document.createElement('td');
        state.innerHTML = vm.state?.toString() ?? "Unknown";
        vmRow.appendChild(state);

        const vmType = document.createElement('td');
        vmType.innerHTML = vm.vmType?.toString() ?? "Unknown";
        vmRow.appendChild(vmType);

        const performance = document.createElement('td');
        performance.innerHTML = vm.performance?.toString() ?? "Unknown";
        vmRow.appendChild(performance);

        const publicIp = document.createElement('td');
        publicIp.innerHTML = vm.publicIp?.toString() ?? "Unknown";
        vmRow.appendChild(publicIp);
    }
    return result;
}