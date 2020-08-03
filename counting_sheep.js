const sheepCount = function (sheep){
    if(sheep === 0){
        console.log('All of the sheep jumped over the fence!')
    }
    else {
        console.log(`${sheep}: Another sheep jumps over the fence`);
        //would call it again until its zero
        sheepCount(sheep - 1);
    }
};

let flock = 3;
sheepCount(flock)