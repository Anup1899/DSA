def reverseArray(arr, i,j):
    if(i >= j):
        return arr

    temp = arr[i]
    arr[i]= arr[j]
    arr[j] = temp
    # print(temp, arr) 
    return reverseArray(arr, i+1, j-1)

arr = [1,2,3,4]
print(
    reverseArray(arr, 0, len(arr)-1)
)