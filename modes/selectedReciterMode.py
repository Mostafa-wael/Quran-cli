from utilities.helperFunctions import getResponse, runFromURL, showListIndex
from prettytable import PrettyTable
import xml.etree.ElementTree as ET

###############################################################################
# Reciters
###############################################################################


def getReciters() -> dict:
    """Get the available reciters data

    Returns:
        dict: The available reciters data
    """
    apiEndpoint = 'https://mp3quran.net/api/_english.php?'
    data = getResponse(apiEndpoint)
    return data['reciters']


def getSelectedReciterData(index: int) -> dict:
    """Get the data of the selected radio

    Args:
        index (int): The index of the reciter in the query data

    Returns:
        dict: The data of the selected reciter
    """
    data = getReciters()
    return data[index]


def getRecitersList():
    """Get a list of the available reciters' names.

    Returns:
        list: List of available reciters' names
    """
    data = getReciters()
    reciters = [element['name'] for element in data]
    return reciters


def showAllReciters():
    """Show all the available reciters in a pretty table
    """
    reciters = getRecitersList()
    showListIndex(reciters, 'Reciter Index', 'Name')

###############################################################################
# Suras
###############################################################################


def getSurasDictionary() -> dict:
    """Generate a dictionary of all suras and their indices from the Mosh'af.

    Returns:
        dict: all suras' names and their indices from the Mosh'af
    """
    # read the data from the xml file of the quran.
    root = ET.parse('./data/quran-data.xml').getroot()  # at Quran
    suras = root[0]
    surasDictionary = {}
    for sura in suras:
        index = sura.get('index')
        name = sura.get('tname')
        surasDictionary[int(index)] = str(name)
    return surasDictionary


def showAvailableSuras(reciterIndex: int):
    """Show all the available suras of the reciter in a pretty table
    """
    reciterData = getSelectedReciterData(reciterIndex)
    suras = getSurasDictionary()
    availableSuras = list(reciterData['suras'].split(","))
    # TODO: The print logic need to be decoupled from this function
    t = PrettyTable(['Sura Index', 'Name'])
    for suraIndex in availableSuras:
        t.add_row([suraIndex, suras[int(suraIndex)]])
    print(t)


def getSuraURL(reciterIndex: int, suraIndex: int) -> dict:
    """Get sura URL from its index

    Args:
        reciterIndex (int): The index of the reciter in the query data
        suraIndex (int): The index of the sura in the Mus'haf.

    Returns:
        str: The sura URL
    """
    reciterData = getSelectedReciterData(reciterIndex)
    serverURL = reciterData['Server']+'/' + \
        str("{:03d}".format(suraIndex))+'.mp3'
    return serverURL


def runSura(reciterIndex: int, suraIndex: int):
    """Run the sura specified by the specified reciters

    Args:
        reciterIndex (int): The index of the reciter in the query data
        suraIndex (int): The index of the sura in the Mus'haf.
    """
    runFromURL(getSuraURL(reciterIndex, suraIndex))


def selectedReciterMode(reciterIndex=-1, suraIndex=-1):
    """The whole scenario of the selected reciter mode.
    If no reciter were selected i.e. reciterIndex = -1, show all the reciter and allow the user to select one. Then, run it.
    The same for the sura.

    Args:
        reciterIndex (int, optional): The index of the reciter in the query data. Defaults to -1.
        suraIndex (int, optional): The index of the sura in the Mus'haf. Defaults to -1.
    """

    ## get the reciter index
    if reciterIndex == -1:
        print('All Reciters')
        showAllReciters()
        reciterIndex = int(input("Select Reciter: "))

    ## Show/get the reciter data
    reciterData = getSelectedReciterData(reciterIndex)
    print("Reciter Name: ", reciterData['name'])
    ###
    ###
    ## get the reciter index
    if suraIndex == -1:
        print('All Available Suras')
        showAvailableSuras(reciterIndex)
        suraIndex = int(input("Select Sura: "))
    
    ## Show/get the sura data
    print("Sura Name: ", getSurasDictionary()[suraIndex])
    runSura(reciterIndex, suraIndex)
