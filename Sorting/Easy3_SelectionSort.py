def SelectionSort(arr):
    n = len(arr)

    for i in range(0, n):
        smallestIdx = None
        for j in range(i, n):
            if(arr[j] < arr[i]):
                smallestIdx = j
        
        if(smallestIdx != None):
            arr[i], arr[smallestIdx] = arr[smallestIdx], arr[i]
    print(arr)

SelectionSort([7,4,2,6,5,1])
