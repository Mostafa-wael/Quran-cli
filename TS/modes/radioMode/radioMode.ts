import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";
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
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}

function showAllRadios(){
    getRadioNamesList().then(res => {
       showListIndex(res, 'Radio Index', 'Name');
    }).catch(err => {
        console.log(err);
    });
}
/*
    Get radio name from its index

    Args:
        radioIndex (int): The index of the radio in the query data

    Returns:
        str: The radio name
    
*/
async function getRadioName(radioIndex: number) : Promise<string> {
    let data = await getRadioData();
    return data[radioIndex]['name'] ;
}

/*
    Get radio URL from its index

    Args:
        radioIndex (int): The index of the radio in the query data

    Returns:
        str: The radio URL
*/

async function getRadioURL(radioIndex: number) : Promise<string> {
    let data = await getRadioData()
    return data[radioIndex]['radio_url']
}
/*
    Run the radio specified

    Args:
        radioIndex (int): The index of the radio in the query data

*/

async function runRadio(radioIndex: number) {
    let radioName = await getRadioName(radioIndex);
    console.log(`Playing ${radioName}`);
    runFromURL(await getRadioURL(radioIndex))
}

runRadio(0);