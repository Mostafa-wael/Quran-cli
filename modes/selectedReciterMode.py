from utilities.helperFunctions import getResponse, runFromURL
from prettytable import PrettyTable
import xml.etree.ElementTree as ET

###############################################################################
# Reciters
###############################################################################
def getReciters():
    apiEndpoint = 'https://mp3quran.net/api/_english.php?'
    data = getResponse(apiEndpoint)
    return data['reciters']


def getOneReciterData(index):
    data = getReciters()
    return data[index]

def getRecitersList():
    data = getReciters()
    reciters = [ element['name'] for element in data ]  
    return reciters

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
    reciterData = getOneReciterData(reciterIndex)
    suras = getSurasDictionary()
    availableSuras = list(reciterData['suras'].split(","))
    t = PrettyTable(['Sura Index', 'Name'])
    for suraIndex in availableSuras:
        t.add_row([suraIndex, suras[int(suraIndex)]])
    print(t)


def getSuraURL(reciterIndex, suraIndex):
    reciterData = getOneReciterData(reciterIndex)
    serverURL = reciterData['Server']+'/'+str("{:03d}".format(suraIndex))+'.mp3'
    return serverURL

def runSura(reciterIndex, suraIndex):
    runFromURL(getSuraURL(reciterIndex, suraIndex))

def selectedReciterMode(reciterIndex=-1, suraIndex=-1):
    if reciterIndex == -1:
        print('All Reciters')
        showAllReciters()
        reciterIndex = int(input("Select Reciter: "))
    
    reciterData = getOneReciterData(reciterIndex)
    print("Reciter Name: ", reciterData['name'])
    if suraIndex == -1:
        print('All Available Suras')
        showAvailableSuras(reciterIndex)
        suraIndex = int(input("Select Sura: "))
    print("Sura Name: ", getSurasDictionary()[suraIndex])
    runSura(reciterIndex, suraIndex)
