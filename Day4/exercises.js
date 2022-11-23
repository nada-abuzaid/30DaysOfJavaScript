// Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age} years to drive`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 21;
let yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log("You are older than me");
} else {
  console.log("I am older than you");
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;

// using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// ternary operator.
a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt("Enter a number:");
if (num % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = prompt("Enter your score:");
switch (score) {
  case score >= 80 && score <= 100:
    console.log("A");
    break;
  case score >= 70 && score <= 89:
    console.log("B");
    break;
  case score >= 60 && score <= 69:
    console.log("C");
    break;
  case score >= 50 && score <= 59:
    console.log("D");
    break;
  case score >= 0 && score <= 49:
    console.log("F");
    break;
  default:
    console.log("Invalid score");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter a month:");
switch (month) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn");
    break;
  case "December":
  case "January":
  case "February":
    console.log("The season is Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("The season is Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("The season is Summer");
    break;
  default:
    console.log("Invalid month");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What is the day today?");
switch (day.toLowerCase()) {
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend`);
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${day} is a working day`);
    break;
  default:
    console.log("Invalid day");
}

// Exercises: Level 3

// 1. Write a program which tells the number of days in a month.
let monthDays = prompt("Enter a month:");
switch (monthDays.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthDays} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${monthDays} has 30 days`);
    break;
  case "february":
    console.log(`${monthDays} has 28 days`);
    break;
  default:
    console.log("Invalid month");
}

// Write a program which tells the number of days in a month, now consider leap year.
let monthDayss = prompt("Enter a month:");
switch (monthDayss.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthDayss} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${monthDayss} has 30 days`);

    break;
  case "february":
    console.log(`${monthDayss} has 29 days`);
    break;
  default:
    console.log("Invalid month");
}
