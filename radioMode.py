from modules import getResponse, runFromURL
from prettytable import PrettyTable
import subprocess

###############################################################################
# Radio
###############################################################################
def getRadioData():
    apiEndpoint = 'https://api.mp3quran.net/radios/radio_english.json'
    data = getResponse(apiEndpoint)
    return data['radios']

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
def getRadioName(radioIndex):
    data = getRadioData()
    return data[radioIndex]['name']
def getRadioURL(radioIndex):
    data = getRadioData()
    return data[radioIndex]['radio_url']

def runRadio(radioIndex):
    runFromURL(getRadioURL(radioIndex))


def radioMode():
    showAllRadios()
    radioIndex =  int(input("Select Radio: "))
    print("Radio Name: ", getRadioName(radioIndex))
    runRadio(radioIndex)