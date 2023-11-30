/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


function doubleInteger(i) {
    return i *= i;
}

function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0
    } else {
      return n * m
    }
  }

/* В JS нельязя перемножить строку на число.*/
function repeatStr (n, s) {
    return s.repeat(n);
}