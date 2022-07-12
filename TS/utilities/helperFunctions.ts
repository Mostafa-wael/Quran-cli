import PrettyTable from "prettytable"


export function showListIndex(arr: string[], header1: string, header2: string) {
    let pt = new PrettyTable();
    pt.header(header1, header2);
    for (let i = 0; i < arr.length; i++) {
        pt.row(arr[i][header1], arr[i][header2]);
    }
    console.log(pt.toString());
}