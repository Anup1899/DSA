// HashSet is a data structure where Insertion/Deletion/Searching has Time Complexity of O(1)
//Set is a data structure which allows unique unorderd values

const mySet = new Set();

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(4)
mySet.add(4)

console.log(mySet);
console.log("Size ", mySet.size);

console.log(mySet.has(3));
console.log(mySet.has(7));

console.log(mySet.delete(2));
console.log(mySet.delete(2));

console.log([...mySet]);

//Iterator
for(let value of mySet){
    console.log(value);
}


const mySet2 = new Set("Aniket")
console.log(mySet2);
