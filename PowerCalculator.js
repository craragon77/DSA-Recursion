const powerCalculator = function (base, exp){
    if (exp > 0){
        return console.log('exponent must be greater than or equal to one')
    }
    //is this even a regressive algorithm?
    else{
        console.log(powerCalculator(base ^ exp))
    }
}