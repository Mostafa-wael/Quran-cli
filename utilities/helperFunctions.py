import json
import requests
import subprocess
from prettytable import PrettyTable


headersList = {
    "Accept": "*/*",
}
payload = ""

###############################################################################
# API
###############################################################################


def getResponse(apiEndpoint: str) -> dict:
    """ Query the api data from the passed endpoint.

    Args:
        apiEndpoint (str): The endpoint to query.

    Returns:
        dict: the json data.
    """
    response = requests.request(
        "GET", apiEndpoint, data=payload,  headers=headersList)
    json_response = json.loads(response.text)
    return json_response


def runFromURL(url: str):
    """ Runs the passed url in the default browser

    Args:
        url (str): The URL to run using mpv.
    """
    subprocess.call(["mpv", url])


def showListIndex(arr: list, header1: str, header2: str):
    """Show a list in a pretty table and show index for its elements.

    Args:
        arr (list): The list to be shown
        header1 (str): Header of col 1
        header2 (str): Header of col 2
    """
    t = PrettyTable([header1, header2])
    for index, element in enumerate(arr):
        t.add_row([index, element])
    print(t)
