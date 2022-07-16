import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";
import { surasDictionary } from "../../utilities/data";


const url: string = "https://mp3quran.net/api/_english.php?";

// ###############################################################################
// # Reciters
// ###############################################################################

/**
 * 
 * @returns The available reciters data from the endpoint
 */
async function getData(): Promise<object> {
    const data = await fetch(url);
    const data_1 = await data.json();
    return data_1['reciters'];
}
/**
 * 
 * @returns The reciter names list
 */
async function getReciterNamesList(): Promise<string[]> {
    let data  = await getData();
    // loop on json and extract the reciter names
    let reciters : string[] = [];
    for(let d of <any>data) {
        reciters.push(d['Name']);
    }  
    return reciters;
}
/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @returns The reciter data from the endpoint
 */
async function getSpecificReciterData(reciterIndex: number) : Promise<string> {
    let data = await getData();
    return data[reciterIndex];
}
/**
 * Show all the available reciters in a pretty table
 */
export function showAllReciters(){
    getReciterNamesList()
    .then(res => {
       showListIndex(res, 'Reciter Index', 'Name');
    })
    .catch(err => {
        console.log(err);
    });
}

// ###############################################################################
// # Suras
// ###############################################################################

/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @returns all the available suras for a specified reciter
 */
export async function getReciterAvailableSuras(reciterIndex: number) : Promise<string[]> {
   
    let reciterData = await getSpecificReciterData(reciterIndex);
    let availableSuras = reciterData['suras'].split(",");
    return availableSuras;

}
/**
 * 
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 * @returns The URL of the surah by the specified reciter
 */
 async function getSurahURL(reciterIndex: number, surahIndex: number) : Promise<string> {
    let data = await getSpecificReciterData(reciterIndex);
    let url = data['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
    return url;
}
/**
 * Shows all the available suras for a specified reciter
 * @param reciterIndex The index of the reciter in the query data
 */
export async function  showReciterAvailableSuras(reciterIndex: number) {
    
    let availableSuras = await getReciterAvailableSuras(reciterIndex);
    showListIndex(availableSuras, 'Surah Index', 'Name', true);
}
/**
 * Runs the specified surah by the specified reciter
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 */
export async function runSurah(reciterIndex: number, surahIndex: number) {
    let reciterData = await getSpecificReciterData(reciterIndex);
    let reciterName = await reciterData['name'];
    console.log(`Reciter: ${reciterName}, Surah: ${surasDictionary[surahIndex]}`);
    runFromURL(await getSurahURL(reciterIndex, surahIndex))
}
