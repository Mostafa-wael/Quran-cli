import argparse


def getParser() -> argparse.ArgumentParser:
    """Generates the parser used to parse the command line arguments.

    Returns:
        argparse.ArgumentParser: The parser used to parse the command line arguments.
    """
    parser = argparse.ArgumentParser(prog="quran_cli",
                                     description='Listen to the Quran from your terminal',
                                     epilog='Recall us in your doa\'!',
                                     allow_abbrev=True,
                                     add_help=True,
                                     fromfile_prefix_chars='@')
    # options
    parser.add_argument('-v', action='version', version='%(prog)s 1.0',
                        help='show version')
    parser.add_argument("-i", '--interactive', action='store_true', dest="interactive",
                        help="Run the script in an interactive mode")
    # arguments
    parser.add_argument("-rd", '--radio', action='store', type=int, default='-1', dest='radioIndex', choices=range(0, 148), metavar='[0-147]',
                        help="Specify the radio channel to listen to")
    parser.add_argument("-rc", '--reciter', action='store', type=int, default='-1', dest='reciterIndex', choices=range(0, 247), metavar='[0-246]',
                        help="Specify the reciter to listen to")
    parser.add_argument("-s", '--sura', action='store', type=int, default='-1', dest='suraIndex', choices=range(1, 115), metavar='[1-114]',
                        help="Specify the sura to listen to")
    return parser
