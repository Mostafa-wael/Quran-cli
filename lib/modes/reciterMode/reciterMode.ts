import fetch from "node-fetch";
import { showListIndex, runFromURL, raiseError, print } from "../../utilities/helperFunctions";
import { surasDictionary } from "../../utilities/data";


const url: string = "https://mp3quran.net/api/_english.php?";

// ###############################################################################
// # Reciters
// ###############################################################################

/**
 * Fetches the data from the endpoint and returns it
 * @returns The available reciters data from the endpoint
 */
async function getData(): Promise<object> {
    try {
        //TODO: cache the data and fetch it only once
        print("Fetching data...", "cyan");
        const data = await fetch(url);
        const dataJson = await data.json();
        return dataJson['reciters'];
    }
    catch (err) {
        print("No available Internet connection", "red");
        process.exit(1); // close the program
    }
}
/**
 * Get a list of the available reciters' names
 * @returns The reciter names list
 */
async function getReciterNamesList(): Promise<string[]> {
    let data = await getData();
    // loop on json and extract the reciter names
    let reciters: string[] = [];
    for (let i =0 ; i< (<any>data).length; i++) {
        reciters.push(data[i]['name']);
    }
    return reciters;
}
/**
 * Get the data of the specified reciter
 * @param reciterIndex The index of the reciter in the query data
 * @returns The reciter data from the endpoint
 */
async function getSpecificReciterData(reciterIndex: number): Promise<string> {
    let data = await getData();
    return data[reciterIndex];
}
/**
 * Show all the available reciters in a pretty table
 */
export function showAllReciters() {
    getReciterNamesList()
        .then(res => {
            showListIndex(res, 'Reciter Index', 'Name');
        })
        .catch(err => {
            raiseError("SHOW_ALL_RECITERS", "Error while showing all the reciters");
        });
}

// ###############################################################################
// # Suras
// ###############################################################################

/**
 * Get all the available suras for the specified reciter
 * @param reciterIndex The index of the reciter in the query data
 * @returns all the available suras for a specified reciter
 */
export async function getReciterAvailableSuras(reciterIndex: number): Promise<string[]> {

    let reciterData = await getSpecificReciterData(reciterIndex);
    let availableSuras = reciterData['suras'].split(",");
    return availableSuras;

}
/**
 * Get the URL of the specified sura and reciter
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 * @returns The URL of the surah by the specified reciter
 */
async function getSurahURL(reciterIndex: number, surahIndex: number): Promise<string> {
    let data = await getSpecificReciterData(reciterIndex);
    let url = data['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
    return url;
}
/**
 * Shows all the available suras for a specified reciter
 * @param reciterIndex The index of the reciter in the query data
 */
export async function showReciterAvailableSuras(reciterIndex: number) {

    try {
        let availableSuras = await getReciterAvailableSuras(reciterIndex);
        showListIndex(availableSuras, 'Surah Index', 'Name', true);
    }
    catch (err) {
        raiseError("INVALID_VALUE", "Reciter not available, you can list the available reciters using the '-r' option.");
    }
}
/**
 * Runs the specified surah by the specified reciter
 * @param reciterIndex The index of the reciter in the query data
 * @param surahIndex The index of the surah in the query data
 */
export async function runSurah(reciterIndex: number, surahIndex: number) {
    try {
        let reciterData = await getSpecificReciterData(reciterIndex);
        let reciterName = await reciterData['name'];
        if(surahIndex > reciterData['suras'].split(",").length) {
            throw new Error("Surah not available, you can check the available suras for the specified reciter by passing the reciter index only to the '-c' option.");
            // raiseError("INVALID_VALUE", "Surah not available, you can check the available suras for the specified reciter by passing the reciter index only to the '-c' option.");
        }
        print(`Reciter: ${reciterName}, Surah: ${surasDictionary[surahIndex]}`, "green");
        runFromURL(await getSurahURL(reciterIndex, surahIndex));
    }
    catch (err) {
        if (surasDictionary[surahIndex] === undefined)
        {
            raiseError("INVALID_VALUE", "Surah not available, you can check the available suras for the specified reciter by passing the reciter index only to the '-c' option.");
        }
        else // invalid reciter index
        {
            raiseError("INVALID_VALUE", "Reciter not available, you can list the available reciters using the '-r' option.");
        }
    }
}

