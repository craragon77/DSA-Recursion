function reverseString(str) {
    if (str === "") // exit condition
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");