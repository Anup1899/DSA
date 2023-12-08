//HashMap
// Time Complexity O(1)
    // put() ----> O(lambda) lambda = (n / N)
    // get()
    // containsKey()
    // remove()
    // size()
    // keySet()

// We will have an array of length N
// Each index in an array is called Bucket
// Each bucket in an array will contain Linked List
// Perfectly balanced array means all the buckets will have same number of node in the linked list
    // n ---> Total number of Nodes
    // N ---> Length of the array
    // n/N = lambda
    // lambda < k ---> k is the threshold value
    // if lambda > k ---> This means we need to increase the number of buckets that is the length of the array

// Increasing the number of buckets is called Rehashing
// Rehashing means changing the Hashmap

// While hashing we have function called hash function which takes key and returns the bucketIndex.
// BucketIndex will always remain same if the Size of the HashMap does not change
// After Rehashing the size of the HashMap changes the Bucket Index will also change
// So Hash function will return the different button index

// Why Rehashing?
// Rehashing is important because we need to optimize the time complexity of put() method which will increase if lambda value is greater than the K (Threshold Value)


//Working with hash function is storing data in the array at particular index
// Hash Function takes String and return the same index all the time
// Which helps to find the data stored in the array at particular index
// After Rehashing the length of the array changes so the index of array returned for a given string also changes, but remains constant until the length of the array does not change


// The Idea of hashing is converting data into an encrypted format
// Every Time we give the same input it will return the same output


function simpleHashing(str, len){

    let total = 0
    for(let i = 0; i< str.length; i++){
        total += str.charCodeAt(i) 
    }

    const hashedValue = total % len
    console.log(hashedValue);
}

simpleHashing("Anup", 12)
simpleHashing("Gunjan", 12)
simpleHashing("Ajksfdsfjfsfsdnfj", 12)


// There is an issue with the simple hasing 
    // Not of constant time
    // Depends upon the length of the string
    // Could have been little more random

// For better hashing we introduce
    // Constant time --> By restricting the function to the maximum loop constraints
    // By introducing Prime Number into the operation ---> Introducing prime number leads to the mostly unique solutions and minimize the number of colossions

function betterHashing(str, len){
    let total = 0;
    const PrimeNumber = 41;
    for(let i=0; i< Math.min(str.length, 100); i++){
        total += total * PrimeNumber + str.charCodeAt(i);
        
    }

    console.log(total% len);
}


betterHashing("Anup", 13)
betterHashing("Gunjan", 13)
betterHashing("dfssfsf", 13)


//Collision in Hashing
// We fix it by linear programming, Separate Chaining
// Linear Programming is like storing data in a single array, if the collision occurs then the search for the next consecutive empty space in an array
// Separate Chaining --> Data is stores in each index in the object, if the collission occurs a new entry is created in the object
