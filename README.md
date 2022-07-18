# Quran-CLI

A simple command line interface for listening to Quran.
## Used API
[mp3quran](https://mp3quran.net/eng/api)
## Installation
- run `npm install -g typescript` if you do not have typescript globally
- `npm install`
- Install **mpv** as it is required for playing the audio.
  - Debian based distributions
`sudo add-apt-repository ppa:mc3man/mpv-tests`
`sudo apt update && sudo apt install mpv`
  - Windows
[Follow This link](https://mpv.io/installation/#:~:text=master%20is%20recommended.-,Windows,-All%20binary%20packages)


## How to use
- To build the source code: `tsc`
- To show the version: `quran-cli -v`
- To show help: `node  quran-cli.js -h`
```
Quran-CLI

  Listen to the Quran from your terminal 

Options

  -n, --showRadio               Shows all available radio channels                                            
  -d, --radio number            Play specific radio                                                           
  -c, --reciterSurah number[]   lay specific surah by a specific reciter.                                     
                                If no surah specified, it will shows the available suras for the specified    
                                reciter.                                                                      
  -r, --showReciters            Shows all available reciters                                                  
  -s, --showSuras               Show all suras in the Quran                                                   
  -v, --version                 Shows the current version                                                     
  -h, --help                    Prints this usage guide                                                       

^_^

  Recall us in your doa'! 
```
- Show all available radios channels: `node  quran-cli.js -n`
- Play specific radio: `node quran-cli.js -d <radio index>`
- Show all available reciters: `node  quran-cli.js -r`
- Play specific surah by a specific reciter: `node  quran-cli.js -c <reciter index>  <surah index>`
- Show all available suras by a specific reciter : `node  quran-cli.js -c <reciter index>`
- Show all suras in the Quran: `node  quran-cli.js -s`

## Documentation
- 'sudo npm install -g jsdoc'
- 'jsdoc -d documentation *.js modes/**/*.js utilities/*.js'

  
## TODO
1. More pretty output.
2. Add more detailed instructions.
3. Add unit tests.
4. publish as npm package. 
5. Add ability to show the verses/tafseer, ...
6. Reciter playlist mode.
7. Optimize CPU and data transfer.
8. Docker image if feasible.
9. Make a vs code extension.
10. Configure the pipelines.
11. Documentation doesn't include sub-folders.
