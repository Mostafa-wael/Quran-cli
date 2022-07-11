import argparse



def getParser():
    parser = argparse.ArgumentParser(prog="quran_cli",
                                    description='Listen to the Quran from your terminal',
                                    epilog='Recall us in your doa\'!',
                                    allow_abbrev=True,
                                    add_help=True)
    groupRadioAndReciter = parser.add_mutually_exclusive_group(required=True) # args of this group can't exist at the same time

    parser.add_argument('-v', action='version', version='%(prog)s 1.0',
                        help='show version')    
    parser.add_argument("-i",'--interactive', action='store_true', dest="interactive",
                        help="Run the script in an interactive mode")
    groupRadioAndReciter.add_argument("-rd",'--radio', action='store',type=int, default='-1', dest='radioIndex',
                        help="Specify the radio channel to listen to")
    groupRadioAndReciter.add_argument("-rc",'--reciter', action='store',type=int, default='-1', dest='reciterIndex',
                        help="Specify the reciter to listen to")
    parser.add_argument("-s",'--sura', action='store',type=int, default='-1', dest='suraIndex',
                        help="Specify the sura to listen to")
    return parser
