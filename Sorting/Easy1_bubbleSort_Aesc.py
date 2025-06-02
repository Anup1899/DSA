# Bubble Sort --> O(n^2)
def bubbleSort(arr):
    n = len(arr)

    for i in range(0, n-1):
        print(i)
        for j in range(0, n-1-i):
            if(arr[j]> arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j] # Swapping

    print(arr)

bubbleSort([7,4,2,6,5,1])
