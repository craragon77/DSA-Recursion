const powerCalculator = function(base, exp) {
    if(exp < 0){
      return 'exp must be positive';
    }
    if (exp === 0) {
      return 1;
    } else {
      return base * powerCalculator(base, exp-1);
    }
  }
  
  let base = 10;
  let exp = -3;
  
  powerCalculator(base, exp)