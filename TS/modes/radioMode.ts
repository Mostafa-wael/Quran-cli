import fetch from "node-fetch";
import { showListIndex } from "../utilities/helperFunctions";
const url: string = "https://api.mp3quran.net/radios/radio_english.json";

// Get the available radios data
function getRadioData(): Promise<object> {
    return fetch(url)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    return res['radios'];
            })
}

async function getRadioNamesList(): Promise<string[]> {
    let data  = await getRadioData();
    // loop on json and extract the radio names
    let radios : string[] = [];
    for (let radio in data) {
        radios.push(radio['name']);
    }
    return radios;
}
// For testing purposes
// let items =  getRadioNamesList().then(res => {
//     console.log(res);});

function showAllRadios(){
    getRadioNamesList().then(res => {
       showListIndex(res, 'Radio Index', 'Name');
    }).catch(err => {
        console.log(err);
    });
}

showAllRadios();