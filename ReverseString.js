const reverseString = function(array){
    if (array.length === 1){
        return console.log(array)
    }

    return console.log(reverseString(array).reverse())
}