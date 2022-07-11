# Quran-CLI

A simple command line interface for listening to Quran.
## Used API
[mp3quran](https://mp3quran.net/eng/api)
## Installation
- `pip3 install -r requirements.txt`
- Install **mpv** as it is required for playing the audio.
#### Debian based distributions
`sudo add-apt-repository ppa:mc3man/mpv-tests`
`sudo apt update && sudo apt install mpv`
#### Windows
[Follow This link](https://mpv.io/installation/#:~:text=master%20is%20recommended.-,Windows,-All%20binary%20packages)


## How to use
- To show help: `python3 quran_cli.py -h`
```
Listen to the Quran from your terminal

optional arguments:
  -h, --help            show this help message and exit
  -v                    show version
  -i, --interactive     Run the script in an interactive mode
  -rd RADIOINDEX, --radio RADIOINDEX
                        Specify the radio channel to listen to
  -rc RECITERINDEX, --reciter RECITERINDEX
                        Specify the reciter to listen to
  -s SURAINDEX, --sura SURAINDEX
                        Specify the sura to listen to

Recall us in your doa'!
```
- Run the radio: `python3 quran_cli.py -rd <radio index>`
- Select a reciter: `python3 quran_cli.py -rc <reciter index>`
- Select a sura: `python3 quran_cli.py -rc <reciter index> -s <sura index>`

## TODO
1. Remove redundant code.
2. More functional programming.
3. More pretty output.
4. Add more detailed instructions.
5. Add unit tests.
6. publish on pipy.org.   (InProgress)
7. Add ability to show the verses/tafseer, ...
8. Remember last reciter, radio, ...
9.  Go to the next sura automatically.
10. Optimize CPU and data transfer.