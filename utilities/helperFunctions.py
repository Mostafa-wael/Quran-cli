import json
import requests
import subprocess


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
def runFromURL(url):
    subprocess.call(["mpv", url])
