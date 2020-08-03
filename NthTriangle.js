const triangle = function(theNumber){
    if(theNumber <= 0){
      return 'number must be greater than 1'
    } else if (theNumber === 1) {
      return theNumber
    } else{
      let next = theNumber - 1;
      let formula = theNumber* (theNumber+ 1) / 2;
      theNumber + triangle(next)
      console.log(theNumber, formula)
    }
  }
  
  triangle(15)