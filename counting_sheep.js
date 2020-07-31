const sheepCount = function (sheep){
    if(sheep.length === 0){
        return 'All of the sheep jumped over the fence!'
    }
    return (
        console.log('Another sheep jumps over the fense'),
        console.log(sheepCount(sheep.length) - sheep[1])
    )
}

let flock = [3, 2, 1];
console.log(sheepCount(flock))