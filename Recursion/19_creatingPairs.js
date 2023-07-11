// People can be invited in single or in pairs

function InvitePeople(n){
    if(n <=1) return 1;

    //Invite Single 
    const  singleWay = InvitePeople(n-1);

    //const pair ways 
    const pairWays = (n-1) * InvitePeople(n-2);

    return singleWay + pairWays;
}

console.log(
    InvitePeople(4)
);