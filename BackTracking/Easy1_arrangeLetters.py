def ArrangeLetter(str, permut = ""):
    if(len(str) == 0):
        print(permut)
        return
    
    for index, char in enumerate(str):
        newString = str[0:index] + str[index+1:]
        ArrangeLetter(newString, permut + char)


ArrangeLetter("abc", "")
    