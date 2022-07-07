import json
from matplotlib.style import available
import requests
from prettytable import PrettyTable
import xml.etree.ElementTree as ET
import subprocess
import sys

language = 'ar'
API_URL = 'https://mp3quran.net/api/_english.php?language={}'.format(language)
headersList = {
 "Accept": "*/*",
}
payload = ""

###############################################################################
# API
###############################################################################
def getResponse(apiEndpoint):
    response = requests.request("GET", apiEndpoint, data=payload,  headers=headersList)
    json_response = json.loads(response.text)
    return json_response

def getData():
    data = getResponse(API_URL)
    return data['reciters']

###############################################################################
# Reciters
###############################################################################
def getRecitersList():
    data = getData()
    reciters = [ element['name'] for element in data ]  
    return reciters

def getReciterData(index):
    data = getData()
    return data[index]

def showAllReciters():
    reciters = getRecitersList()
    t = PrettyTable(['Reciter Index', 'Name'])
    i=0
    for reciter in reciters:
        t.add_row([i, reciter])
        i+=1
    print(t)
###############################################################################
# Suras
###############################################################################
def getSurasDictionary():
    root = ET.parse('./data/quran-data.xml').getroot() # at Quran
    suras = root[0]
    surasDictionary = {}
    for sura in suras:
        index = sura.get('index')
        name = sura.get('tname')
        surasDictionary[int(index)] = str(name)
    return surasDictionary

def showAllSuras():
    suras = getSurasDictionary()
    t = PrettyTable(['Sura Index', 'Name'])
    for suraIndex in suras:
        t.add_row([suraIndex, suras[suraIndex]])
    print(t)

def showAvailableSuras(reciterIndex):
    reciterData = getReciterData(reciterIndex)
    suras = getSurasDictionary()
    availableSuras = list(reciterData['suras'].split(","))
    t = PrettyTable(['Sura Index', 'Name'])
    for suraIndex in availableSuras:
        t.add_row([suraIndex, suras[int(suraIndex)]])
    print(t)


def getSura(sura):
    # apiEndpoint = 'https://mp3quran.net/api/_english.php?language=ar&surah={}'.format(sura)
    # response = requests.request("GET", apiEndpoint, data=payload,  headers=headersList)
    # json_response = json.loads(response.text)
    # return json_response
    pass

###############################################################################
# Radio
###############################################################################
def getRadioData():
    apiEndpoint = 'https://api.mp3quran.net/radios/radio_english.json'
    response = requests.request("GET", apiEndpoint, data=payload,  headers=headersList)
    json_response = json.loads(response.text)
    return json_response['radios']

def getRadiosList():
    data = getRadioData()
    radios = [ element['name'] for element in data ]  
    return radios

def showAllRadios():
    radios = getRadiosList()
    t = PrettyTable(['Radio Index', 'Name'])
    i = 0
    for radio in radios:
        t.add_row([i, radio])
        i+=1
    print(t)
def getRadioURL(radioIndex):
    data = getRadioData()
    return data[radioIndex]['radio_url']

def runRadio(radioIndex):
    subprocess.call(["mpv", getRadioURL(radioIndex)])



if __name__ == '__main__':
    # print('All Reciters')
    # showAllReciters()
    # reciterIndex = 200 #int(input("Select Reciter: "))
    # reciterData = getReciterData(reciterIndex)
    # print("Reciter Name:", reciterData['name'])
    # print('All Available Suras')
    # showAvailableSuras(reciterIndex)
    # suraIndex = 71 #int(input("Select Sura: "))
    # print("Sura Name:", getSurasDictionary()[suraIndex])
    # print(getSura(suraIndex))
    ################################################################
    showAllRadios()
    radioIndex = 0 #int(input("Select Radio: "))
    runRadio(radioIndex)
