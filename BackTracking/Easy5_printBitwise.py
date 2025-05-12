def PrintBitwise(n, arr = None):
    if(arr == None):
        arr = [None] * n
    
    if(n <1):
        print(arr)
        return
    else:
        arr[n-1] = 0
        PrintBitwise(n-1, arr)
        arr[n-1] = 1
        PrintBitwise(n-1, arr)


PrintBitwise(3)