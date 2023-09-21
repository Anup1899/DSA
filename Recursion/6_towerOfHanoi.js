// function TowerOfHanoi(n, source, helper, destination){

//     if(n===1){
//         console.log(`Transfer disk ${n} ${source} to ${destination}`);
//         return;
//     }
    
//     TowerOfHanoi(n-1, source, destination, helper);
//     console.log(`Transfer disk ${n} ${source} to ${destination}`);

//     TowerOfHanoi(n-1, helper, source ,destination)


// }


function TowerOfHanoi(n, source, helper, destination){

    if(n===1){
        console.log(`Transfer ${n} form ${source} to ${destination}`);
        return;
    }

    TowerOfHanoi(n-1, source, destination ,helper);
    console.log(`Transfer ${n} form ${source} to ${destination}`);
    TowerOfHanoi(n-1, helper, source,destination);
}


TowerOfHanoi(3, "S", "H", "D");