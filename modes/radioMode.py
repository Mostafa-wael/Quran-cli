from utilities.helperFunctions import getResponse, runFromURL, showListIndex

###############################################################################
# Radio
###############################################################################


def getRadioData() -> dict:
    """ Get the available radios data

    Returns:
        dict: The available radios data
    """
    apiEndpoint = 'https://api.mp3quran.net/radios/radio_english.json'
    data = getResponse(apiEndpoint)
    return data['radios']


def getRadioNamesList() -> list:
    """Get a list of the available radios' names.

    Returns:
        list: List of available radios' names
    """
    data = getRadioData()
    radios = [element['name'] for element in data]
    return radios


def showAllRadios():
    """Show all the available radios in a pretty table
    """
    radios = getRadioNamesList()
    showListIndex(radios, 'Radio Index', 'Name')


def getRadioName(radioIndex: int) -> str:
    """Get radio name from its index

    Args:
        radioIndex (int): The index of the radio in the query data

    Returns:
        str: The radio name
    """
    data = getRadioData()
    return data[radioIndex]['name']


def getRadioURL(radioIndex: int) -> str:
    """Get radio URL from its index

    Args:
        radioIndex (int): The index of the radio in the query data

    Returns:
        str: The radio URL
    """
    data = getRadioData()
    return data[radioIndex]['radio_url']


def runRadio(radioIndex: int):
    """Run the radio specified

    Args:
        radioIndex (int): The index of the radio in the query data
    """
    runFromURL(getRadioURL(radioIndex))


def radioMode(radioIndex=-1):
    """The whole scenario of the radio mode.
    If no radio were selected i.e. radioIndex = -1, show all the radios and allow the user to select one. Then, run it.

    Args:
        radioIndex (int, optional): The index of the radio in the query data. Defaults to -1.
    """
    # get the radio index
    if radioIndex == -1:
        showAllRadios()
        radioIndex = int(input("Select Radio: "))
    ## Show/get the radio data
    print("Radio Name: ", getRadioName(radioIndex))
    runRadio(radioIndex)
