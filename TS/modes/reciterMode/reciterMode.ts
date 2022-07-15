import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";

const url: string = "https://mp3quran.net/api/_english.php?";

// ###############################################################################
// # Reciters
// ###############################################################################

function getReciters(): Promise<object> {
    return fetch(url)
            // the JSON body is taken from the response
            .then(data => data.json())
            .then(data => {
                    return data['reciters'];
            })
}
async function getReciterNamesList(): Promise<string[]> {
    let data  = await getReciters();
    // loop on json and extract the reciter names
    let radios : string[] = [];
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}
function showAllReciters(){
    getReciterNamesList()
    .then(res => {
       showListIndex(res, 'Reciter Index', 'Name');
    })
    .catch(err => {
        console.log(err);
    });
}
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

/*
    Get all the available suras of the reciter in a pretty table
    
*/
async function getAvailableSuras(reciterIndex: number) : Promise<string[]> {
   
    let reciterData = await getReciterData(reciterIndex);
    let availableSuras = reciterData['suras'].split(",");
    return availableSuras;

}
/*
    Show all the available suras of the reciter in a pretty table
    
*/
async function  showAvailableSuras(reciterIndex: number) {
    
    let availableSuras = await getAvailableSuras(reciterIndex);
    showListIndex(availableSuras, 'Surah Index', 'Name');
}

async function getSurahURL(reciterIndex: number, surahIndex: number) : Promise<string> {
    let data = await getReciterData(reciterIndex);
    let url = data[reciterIndex]['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
    return url;
}
async function runSurah(reciterIndex: number, surahIndex: number) {
    let reciterName = await getReciterName(reciterIndex);
    console.log(`Playing ${reciterName}`);
    runFromURL(await getSurahURL(reciterIndex, surahIndex))
}
