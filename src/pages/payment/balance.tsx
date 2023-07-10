function Balance(deduct?:number){
    var t=45;
    var bal
    if(deduct){bal=t-deduct}
    else{
        bal=t;
    }
    return bal;
}
export default Balance;