def QuickSort(arr, start, end):
    if start >= end: 
        return arr

    pivotIndex = Partition(arr, start, end)

    QuickSort(arr, start, pivotIndex - 1)
    QuickSort(arr, pivotIndex + 1, end)

    return arr


def Partition(arr, start, end):
    pivotIdx = start - 1
    pivot = arr[end]

    for i in range(start, end):
        if(arr[i] <= pivot):
            pivotIdx += 1
            # Swap
            arr[i], arr[pivotIdx] = arr[pivotIdx], arr[i]


    pivotIdx += 1 # This is pivot Index
    # Swap pivot with pivot index
    arr[pivotIdx], arr[end] = arr[end], arr[pivotIdx]

    return pivotIdx


arr = [5,2,6,4,1,3]

sorted = QuickSort(arr, 0, len(arr)-1)
print(sorted)