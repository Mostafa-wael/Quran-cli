from selectedReciterMode import selectedReciterMode
from radioMode import radioMode


if __name__ == '__main__':
    mode = input("Choose Mode: (1)Selected Reciter, (2) Radio Mode: ")
    if mode == '1':
        selectedReciterMode()
    elif mode == '2':
        radioMode()
   