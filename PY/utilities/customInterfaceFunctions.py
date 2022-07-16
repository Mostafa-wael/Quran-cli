def getInt(userMsg:str, choices:list, outOfRangeMsg = "Integer out of range", badIntMsg="Invalid Integer") -> int:
    try:
        userData = int(input(userMsg))
    except ValueError:
        print(badIntMsg)
    ###
    try:
        if choices != None and userData not in choices:
            raise ValueError(outOfRangeMsg)
    except ValueError as e:
        print(e)
    return userData
