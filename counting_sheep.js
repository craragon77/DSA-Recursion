const sheepCount = function (sheep){
    if(sheep.length === 0){
        return 'All of the sheep jumped over the fence!'
    }
    return sheepCount(sheep) - 1
}

let flock = [3, 2, 1];
console.log(sheepCount(flock))