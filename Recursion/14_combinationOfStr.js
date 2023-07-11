const keyPad = [".", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwz", "yz"]

function Combination(str, combination="", idx=0){

    if(idx === str.length){
        console.log(combination);
        return;
    }
    const num = Number(str.charAt(idx));
    const mappingStr = keyPad[num];

    for(let i=0; i< mappingStr.length; i++){
        Combination(str, combination+ mappingStr[i], idx+1);
    }
}

Combination("23");