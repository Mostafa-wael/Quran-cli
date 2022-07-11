from modes.selectedReciterMode import selectedReciterMode
from modes.radioMode import radioMode
from utilities.parser import getParser


parser = getParser()
args = parser.parse_args()
interactiveMode = args.interactive
radioIndex = int(args.radioIndex)
reciterIndex = int(args.reciterIndex)
suraIndex = int(args.suraIndex)


if __name__ == '__main__':
    if interactiveMode:
        mode = input("Choose Mode: (1)Selected Reciter, (2) Radio Mode: ")
        if mode == '1':
            selectedReciterMode()
        elif mode == '2':
            radioMode()
    else:
        if radioIndex >= 0:
            radioMode(radioIndex)
        elif reciterIndex >= 0:
            if suraIndex == -1:
                selectedReciterMode(reciterIndex)
            else:
                selectedReciterMode(reciterIndex, suraIndex)
        elif suraIndex > 0:  # the user has specified a sura without a reciter
            parser.error('Cannot use sura(-s) without a reciter(-rc)')
