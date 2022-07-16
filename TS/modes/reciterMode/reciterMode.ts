import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";

const url: string = "https://mp3quran.net/api/_english.php?";

// ###############################################################################
// # Reciters
// ###############################################################################

/**
 * 
 * @returns The available reciters data from the endpoint
 */
async function getReciters(): Promise<object> {
    const data = await fetch(url);
    const data_1 = await data.json();
    return data_1['reciters'];
}
/**
 * 
 * @returns The reciter names list
 */
async function getReciterNamesList(): Promise<string[]> {
    let data  = await getReciters();
    // loop on json and extract the reciter names
    let radios : string[] = [];
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}
/**
 * Show all the available reciters in a pretty table
 */
function showAllReciters(){
    getReciterNamesList()
    .then(res => {
       showListIndex(res, 'Reciter Index', 'Name');
    })
    .catch(err => {
        console.log(err);
    });
}
/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @returns The reciter names list
 */
async function getReciterName(reciterIndex: number) : Promise<string> {
    let data = await getReciters();
    return data[reciterIndex]['name'] ;
}

async function getReciterData(reciterIndex: number) : Promise<string> {
    let data = await getReciters();
    return data[reciterIndex];
}

// ###############################################################################
// # Suras
// ###############################################################################

/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @returns all the available suras for a specified reciter
 */
async function getAvailableSuras(reciterIndex: number) : Promise<string[]> {
   
    let reciterData = await getReciterData(reciterIndex);
    let availableSuras = reciterData['suras'].split(",");
    return availableSuras;

}
/**
 * Shows all the available suras for a specified reciter
 * @param reciterIndex The index of the reciter in the query data
 */
async function  showAvailableSuras(reciterIndex: number) {
    
    let availableSuras = await getAvailableSuras(reciterIndex);
    showListIndex(availableSuras, 'Surah Index', 'Name', true);
}
/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 * @returns The URL of the surah by the specified reciter
 */
async function getSurahURL(reciterIndex: number, surahIndex: number) : Promise<string> {
    let data = await getReciterData(reciterIndex);
    let url = data['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
    return url;
}
/**
 * Runs the specified surah by the specified reciter
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 */
async function runSurah(reciterIndex: number, surahIndex: number) {
    let reciterName = await getReciterName(reciterIndex);
    console.log(`Playing ${reciterName}`);
    runFromURL(await getSurahURL(reciterIndex, surahIndex))
}
