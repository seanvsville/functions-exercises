// 1: Build your own concatentation
// Combine 2 words into 1
function combineWords(word1, word2) {
  return(word1 + word2);
}

// combineWords('dog', 'house');

// 2: Repeat a phrase
// Repeat a phrase x amount of times
function repeatPhrase(phrase, n) {
  for (var i = 0; i < n; i++)
    console.log(phrase);
}

// repeatPhrase("Hello", 5);

// 3: Build your own Power function
// Return number to the y power
function toTheNthPower(number, power) {
var result = 1;
for (i = 0; i < power; i++)
result *= number;
return result;
}

// toTheNthPower(4,5);

// 4: Area of a circle: π r2
// Find area of a circle
function areaOfACircle(radius) {
  var pie = Math.PI;
  return(pie*(radius*radius));
}

// areaOfACircle(2);

// 5: Pythagorean Theorem: a2 + b2 = c2
// Find C using Pythagorean Theorem
function pythagoreanTheorem(a, b) {
  return Math.sqrt((a*a + b*b));
}
// pythagoreanTheorem(3, 4);

// 6. Is X Evenly Divisible by Y ?
// Determine whether X divided by Y has a remainder for true value return
function isXEvenlyDivisibleByY(x, y) {
  if (x % y === 0) {
    return true;
  }
}

// isXEvenlyDivisibleByY(4, 6);

// 7: Vowel Count:
// Find the number of vowels in given word and return value of sum of vowels from given word
function countVowels(word) {
  result = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
      result ++;
    }
    return result;
  }
}

//countVowels("stealing");

// 8: print a simple triangle with asterisks (ASCII Art!!!)
// Example: printTriangle(5)
// Result:
// *
// **
// ***
// ****
// *****

function rightTriangle(num){
  if (num < 1) {
      return;
  }
  var row = "";

// for each row, insert "*" and add one "*" to var row each loop
  for (var i = 0; i < num; i++) {
    row += "*";
    console.log(row);
  }
}

// rightTriangle(9);

// 9: Stretch Challenge: Can you alter the printTriangle function to crate a Pyramid?
// Example:

// printPyramid(10)
//           *
//          * *
//         * * *
//        * * * *
//       * * * * *
//      * * * * * *
//     * * * * * * *
//    * * * * * * * *
//   * * * * * * * * *
//  * * * * * * * * * *
// Warning: This is a surprisingly tricky interview-level exercise.

// loop through once to create rows

//*
function drawTriangle(num) {
    if (number < 1) {
        return;
    }

// loop through once and add empty row via empty string, iterating by +1 each time
    for (var i = 1; i <= num; i++) {
        var row = '';

// starting at the inputted number less one, degradate by 1 and add empty spaces with each row having one less space
        for (var j = num -i; j > 0; j--) {
            row += ' ';
        }

// loop through and add "asterisk with space" string to fill out pyramid
        for (var k = 0; k < i; k++) {
            row += '* ';
        }

// console.log row
        console.log(row);

    }

}

// drawTriangle(5);
