import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";
const url: string = "https://mp3quran.net/api/_english.php?";

// ###############################################################################
// # Reciters
// ###############################################################################

function getReciterData(): Promise<object> {
    return fetch(url)
            // the JSON body is taken from the response
            .then(data => data.json())
            .then(data => {
                    return data['reciters'];
            })
}
async function getReciterNamesList(): Promise<string[]> {
    let data  = await getReciterData();
    // loop on json and extract the reciter names
    let radios : string[] = [];
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}
// function showAllReciters(){
//     getReciterNamesList()
//     .then(res => {
//        showListIndex(res, 'Reciter Index', 'Name');
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }
async function getReciterName(reciterIndex: number) : Promise<string> {
    let data = await getReciterData();
    return data[reciterIndex]['name'] ;
}

// ###############################################################################
// # Suras
// ###############################################################################
async function getSurahURL(reciterIndex: number, surahIndex: number) : Promise<string> {
    let data = await getReciterData();
    let url = data[reciterIndex]['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
    return url;
}
async function runSura(reciterIndex: number, surahIndex: number) {
    let reciterName = await getReciterName(reciterIndex);
    console.log(`Playing ${reciterName}`);
    runFromURL(await getSurahURL(reciterIndex, surahIndex))
}

runSura(1, 112);