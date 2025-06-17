def merge(arr, start, mid, end):
    temp_arr = []

    i = start
    j = mid+1    
    while(i<= mid and j <= end):
        if(arr[i]<=arr[j]):
            temp_arr.append(arr[i])
            i += 1
        elif(arr[j] <= arr[i]):
            temp_arr.append(arr[j])
            j += 1
    
    while(i<= mid):
            temp_arr.append(arr[i])
            i += 1

    while(j<=end):
        temp_arr.append(arr[j])
        j += 1    

    # Merging the array
    for i in range(0, len(temp_arr)):
         arr[start + i] = temp_arr[i]


def mergeSort(arr, start, end):
    if(start >= end): 
        return

    mid = int(start + (end-start)/2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid+1, end)

    merge(arr, start, mid, end)

    return arr


arr1 = [7,4,2,3,6,1,5]
# print( int(0 + (7-0)/2))
sortedArr = mergeSort(arr1, 0, len(arr1)-1)
print(sortedArr)