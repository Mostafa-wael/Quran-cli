# Quran-CLI
A simple command line interface for listening to Quran.

<div align="center">
  
[![GitHub contributors](https://img.shields.io/github/contributors/Mostafa-wael/Quran-cli)](https://img.shields.io/github/contributors/Mostafa-wael/Quran-cli)
[![GitHub issues](https://img.shields.io/github/issues/Mostafa-wael/Quran-cli)](https://github.com/Mostafa-wael/Quran-cli/issues)
[![GitHub forks](https://img.shields.io/github/forks/Mostafa-wael/Quran-cli)](https://github.com/Mostafa-wael/Quran-cli/network)
[![GitHub stars](https://img.shields.io/github/stars/Mostafa-wael/Quran-cli)](https://github.com/Mostafa-wael/Quran-cli/stargazers)
[![GitHub license](https://img.shields.io/github/license/Mostafa-wael/Quran-cli)](https://github.com/Mostafa-wael/Quran-cli/blob/master/LICENSE)
<img src="https://img.shields.io/github/languages/top/Mostafa-wael/Quran-cli"> 

  
</div>

## Demo
https://user-images.githubusercontent.com/56788883/181006153-f1d41833-fc60-43e0-9547-5b9660c1c07a.mp4

## Used API
- We are using the [mp3quran](https://mp3quran.net/eng/api) api.
## Dependencies
- Install **mpv** as it is required for playing the audio.
  - Debian based distributions
`sudo add-apt-repository ppa:mc3man/mpv-tests`
`sudo apt update && sudo apt install mpv`
  - [Update] For Ubuntu 22.04
`sudo apt install mpv`
  - Windows
[Follow This link](https://mpv.io/installation/#:~:text=master%20is%20recommended.-,Windows,-All%20binary%20packages)


## How to use
- To use without installing the package: `npx @quran-cli/q-cli [options]`
- Or install it globally: `sudo npm install  @quran-cli/q-cli -g` and use it as `q-cli [options]`
- To show the version: `q-cli -v`
- To show help: `q-cli -h`
```
Quran-CLI

  Listen to the Quran from your terminal 
  While listening press P to toggle between pause and resume                    
  Press q to exit  

Options

  -n, --showRadios              Shows all available radio channels                                            
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
- Show all available radio channels: `q-cli -n`
- Play specific radio: `q-cli -d <radio index>`
- Show all available reciters: `q-cli -r`
- Play specific surah by a specific reciter: `q-cli -c <reciter index>  <surah index>`
- Show all available suras by a specific reciter : `q-cli -c <reciter index>`
- Show all suras in the Quran: `q-cli -s`

## Suggestions
- Try: `q-cli -d 0`

## How to build locally
- Install typescript using: `npm install -g typescript` if you do not have typescript globally
- Install dependencies: `npm install`
- Build the source files: `npm run build`
- Run the index: `node bin/index.js [options]`
