// Exercises: Level 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// 2. Iterate 0 to n using for loop
const n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 3. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######

let pattern = "";
for (let i = 0; i < 6; i++) {
  pattern += "#";
  console.log(pattern);
}

// 4. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
  let isPrime = true;
  if (i === 0 || i === 1) {
    isPrime = false;
    continue;
  }

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of all numbers: ${sum}`);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvens = 0;
let sumOfOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvens += i;
  } else {
    sumOfOdds += i;
  }
}
console.log(`Sum of all evens: ${sumOfEvens}`);
console.log(`Sum of all odds: ${sumOfOdds}`);

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log([sumOfEvens, sumOfOdds]);

// 11. Develop a small script which generate array of 5 random numbers
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 11));
}

console.log(randomNumbers);

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomNumbers = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}

// 13. Develop a small script which generate a six characters random id: 5j2khz
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
for (let i = 0; i < 6; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(result);

// Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:  fe3jo1gl124g,   xkqci4utda1lmbelpkm03rba
function generateRandomId(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

console.log(generateRandomId(10));

// 2. Write a script which generates a random hexadecimal number.
let hexaCharacters = "0123456789abcdef";
let resultt = "#";
for (let i = 0; i < 6; i++) {
  resultt += hexaCharacters.charAt(Math.floor(Math.random() * 16));
}

console.log(resultt);

// 3. Write a script which generates a random rgb color number.
let rgbCharacters = "0123456789";
let rgbResult = "rgb(";
for (let i = 0; i < 3; i++) {
  rgbResult += rgbCharacters.charAt(Math.floor(Math.random() * 10));
  if (i < 2) {
    rgbResult += ", ";
  }
}

rgbResult += ")";
console.log(rgbResult);
