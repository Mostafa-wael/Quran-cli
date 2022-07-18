import fetch from "node-fetch";
import { showListIndex, runFromURL, raiseError } from "../../utilities/helperFunctions";

const url: string = "https://api.mp3quran.net/radios/radio_english.json";

/**
 * 
 * @returns The available radios data from the endpoint
 */
function getData(): Promise<object> {
    try {
        return fetch(url)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                return res['radios'];
            })
    }
    catch (err) {
        console.log("No available Internet connection");
        process.exit(1); // close the program
    }
}
/**
 * 
 * @returns The radio names list
 */
async function getRadioNamesList(): Promise<string[]> {
    let data = await getData();
    // loop on json and extract the radio names
    let radios: string[] = [];
    for (let i =0 ; i< (<any>data).length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}
/**
 * 
 * @param radioIndex The index of the radio in the query data
 * @returns The specified radio data from the endpoint
 */
async function getSpecificRadioData(radioIndex: number): Promise<object> {
    let data = await getData();
    return data[radioIndex];
}
/**
 * Show all the available radios in a pretty table
 */
export function showAllRadios() {
    getRadioNamesList().then(res => {
        showListIndex(res, 'Radio Index', 'Name');
    }).catch(err => {
        raiseError("SHOW_ALL_RADIOS", "Error while showing all the radios");
    });
}
/**
 * Runs the specified radio
 * @param radioIndex The index of the radio in the query data
 */
export async function runRadio(radioIndex: number) {
    try {
        let data = await getSpecificRadioData(radioIndex);
        let radioName = await data['name'];
        console.log(`Radio Channel: ${radioName}`);
        runFromURL(await data['radio_url']);
    }
    catch (err) {
        let list = await getRadioNamesList();
        let errMsg = "Please, enter an index from 0 to " + (list.length - 1) + "\nYou can list all the radio channels using the '-n' option.";
        raiseError("INVALID_VALUE", errMsg);
    }
}


