const triangle = function(nth){
    if(nth.length === 1){
        return nth
    }
    return triangle((nth * (nth + 1))/2)
}