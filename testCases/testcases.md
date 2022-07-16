| Test Case 001   | Successful Radio Mode Run                                                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Expected Output | - The program should run on `---Amazing short Recitations---` channel                                                                             |
| Acctual Output  | - The program should run on `---Amazing short Recitations---` channel                                                                             |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -d 0` in terminal   |
| Test Result     | - Passed                                                                                                                                                  |
<br>
<br>
<br>
<br>

| Test Case 002   | Kill The Process Without Exceptions                                                                                                                |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - The program should exit without exception and all generated processes should be killed                                                            |
| Acctual Output  | - The program should exit without exception  and all generated processes should be killed                                                            |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -d 0` in terminal<br />4. Wait until the radio works <br />5. press `CTRL + C` to kill the process |
| Test Result     | - Passed                                                                                                                                                    |
<br>
<br>
<br>
<br>

| Test Case 003   | Run Radio Mode With -1                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - The program should not run and display a warning message informing the user the valid radio range                                                |
| Acctual Output  | - The program doesn't run ar all                                                                                                                                                 |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -d -1` in terminal   |
| Test Result     | - Fail                                                                                                                                                    |
<br>
<br>
<br>
<br>

| Test Case 004   | Run Radio Mode With 148                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | - The program should not run and display a warning message informing the user the valid radio range                                                |
| Acctual Output  | - The program should not run and display a warning message informing the user the valid radio range                                                |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -d -1` in terminal   |
| Test Result     | - Pass                                                                                                                                                   |
<br>
<br>
<br>
<br>

| Test Case 005   | Run Radio Mode With  147                                                                                                                            |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | The program should run on `Zaki Daghistani` channel                                                                                                 |
| Acctual Output  | The program should run on `Zaki Daghistani` channel                                                                                                 |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -d 148` in terminal   |
| Test Result     | -Pass                                                                                                                                                     |
<br>
<br>
<br>
<br>

| Test Case 006   | Check Version                                                                                                                            |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | The correct version should be displayed in the terminal(currently should be V1.0.0)                                                                                                 |
| Acctual Output  | **"V1.0.0"** is displayed in the terminal                                                                                                 |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -v` in terminal   |
| Test Result     | -Pass                                                                                                                                                     |
<br>
<br>
<br>
<br>

| Test Case 006   | Display the usage guide                                                                                                                            |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Output | The usage guide menu that contains all possible flags and descrition for each should be displayed in the terminal                                                                                                 |
| Acctual Output  | the usage guide is displayed                                                                                                 |
| Step            | 1.  Open the project directory<br />2.  Open a terminal in the project directory <br />3.  Run command `node quran-cli.js -h` in terminal   |
| Test Result     | -Pass                                                                                                                                                     |


