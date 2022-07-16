# Quran-CLI

A simple command line interface for listening to Quran.
## Used API
[mp3quran](https://mp3quran.net/eng/api)
## Installation
- `npm install`
- Install **mpv** as it is required for playing the audio.
  - Debian based distributions
`sudo add-apt-repository ppa:mc3man/mpv-tests`
`sudo apt update && sudo apt install mpv`
  - Windows
[Follow This link](https://mpv.io/installation/#:~:text=master%20is%20recommended.-,Windows,-All%20binary%20packages)


## How to use
- To build the source code: `tsc`
- To show help: `node  quran-cli.js -h`
```

Quran-CLI

  Listen to the Quran from your terminal 

Options

  -v, --version string          Show version                           
  -d, --radio number            Specify the radio channel to listen to 
  -c, --reciterSurah number[]   Specify the reciter to listen to       
  -h, --help                    Prints this usage guide                

^_^

  Recall us in your doa'! 

```
- Run the radio: `python3 quran_cli.py -rd <radio index>`
- Select a reciter: `python3 quran_cli.py -rc <reciter index>`
- Select a sura: `python3 quran_cli.py -rc <reciter index> -s <sura index>`

## Documentation
- `pydoc -w quran_cli.py`
## TODO
1. Remove redundant code.
2. More functional programming.
3. More pretty output.
4. Better exit output.
5. Add more detailed instructions.
6. Add unit tests.
7. publish as npm package. 
8. Add ability to show the verses/tafseer, ...
9. Remember last reciter, radio, ...
10. Go to the next sura automatically.
11. Optimize CPU and data transfer.
12. Docker image if feasible.
13. Extract data from the xml.
14. Make a vs code extension.
15. Configure the pipelines.
16. close in case of errors