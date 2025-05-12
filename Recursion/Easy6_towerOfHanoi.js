// function TowerOfHanoi(n, source, helper, destination){

//     if(n===1){
//         console.log(`Transfer disk ${n} ${source} to ${destination}`);
//         return;
//     }
    
//     TowerOfHanoi(n-1, source, destination, helper);
//     console.log(`Transfer disk ${n} ${source} to ${destination}`);

//     TowerOfHanoi(n-1, helper, source ,destination)


// }


// function TowerOfHanoi(n, source, helper, destination){

//     if(n===1){
//         console.log(`Transfer ${n} form ${source} to ${destination}`);
//         return;
//     }

//     TowerOfHanoi(n-1, source, destination ,helper);
//     console.log(`Transfer ${n} form ${source} to ${destination}`);
//     TowerOfHanoi(n-1, helper, source,destination);
// }

function TowerOfHanoi(n, s, m ,d){
    if(n==1){
        console.log(`Move 1st disk from ${s} to ${d}`);
        return;
    }

    TowerOfHanoi(n-1, s, d, m);

    console.log(`Move ${n}th disk from ${s} to ${d}`);
    
    TowerOfHanoi(n-1, m, s, d);
}

TowerOfHanoi(3, "S", "M", "D");