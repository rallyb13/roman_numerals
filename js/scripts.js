var romanNumeral = function(number) {
  var letters = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C"};
  var numeral = "";

  // var nLength = number.length

  while (number > 0) {
    if (number === 9) {
      numeral = numeral + letters[1] + letters[10];
      number = number + 1 - 10;
    } else if (number < 9 && number >= 5) {
      numeral = numeral + letters[5];
      number = number - 5;
    } else if (number === 4) {
      numeral = numeral + letters[1] + letters[5];
      number = number +1 -5;
    } else if (number < 4) {
      numeral = numeral + letters[1];
      number = number - 1;
    }
  };

  return numeral;
};
//
//     1   2   3     4
// ---------------------
// a - 1  10   100   1000
// b - 5  50   500
// c - 10 100  1000
//
// 1 - 4
//
// n = x * 10^1
