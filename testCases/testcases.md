| Test Case 001   | Successful Radio Mode Run                                                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Expected Output | - The program should run on `---Amazing short Recitations---` channel                                                                             |
| Acctual Output  | -                                                                                                                                                 |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `python3 quran_cli.py -rd 0` in terminal   |
| Test Result     |                                                                                                                                                   |
<br>
<br>
<br>
<br>

| Test Case 002   | Kill The Process Without Exceptions                                                                                                                |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - he program should exit without exception and all generated processes should be killed                                                            |
| Acctual Output  | -                                                                                                                                                  |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `python3 quran_cli.py -rd 0` in terminal<br />4. Wait until the radio works <br />5. press `CTRL + C` to kill the process |
| Test Result     |                                                                                                                                                    |
<br>
<br>
<br>
<br>

| Test Case 003   | Run Radio Mode With -1                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - The program should not run and display a warning message informing the user the valid radio range                                                |
| Acctual Output  | -                                                                                                                                                  |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `python3 quran_cli.py -rd -1` in terminal   |
| Test Result     |                                                                                                                                                    |
<br>
<br>
<br>
<br>

| Test Case 004   | Run Radio Mode With 148                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - The program should not run and display a warning message informing the user the valid radio range                                                |
| Acctual Output  | -                                                                                                                                                  |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `python3 quran_cli.py -rd -1` in terminal   |
| Test Result     |                                                                                                                                                    |
<br>
<br>
<br>
<br>

| Test Case 005   | Run Radio Mode With  147                                                                                                                            |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | The program should run on `Zaki Daghistani` channel                                                                                                 |
| Acctual Output  | -                                                                                                                                                   |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `python3 quran_cli.py -rd 148` in terminal   |
| Test Result     |                                                                                                                                                     |


