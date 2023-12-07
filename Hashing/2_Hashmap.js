// Hashmaps is a data structure where Insertion/Deletion/Searching has Time Complexity of O(1)
// When we want to store data with key value pairs. We will use Hasmaps

const hashMap = {}

hashMap["India"] = "Delhi"
hashMap["China"] = "Beijing"
hashMap["Pakistan"] = "Lahore"
hashMap["Thailand"] = "Bangkok"


//Searching

console.log(
    hashMap.hasOwnProperty("India")
);

console.log(
    hashMap.hasOwnProperty("USA")
);

console.log(hashMap?.India);
console.log(hashMap?.USA  === undefined);

console.log("India" in  hashMap);

delete hashMap.Pakistan

console.log(hashMap);

