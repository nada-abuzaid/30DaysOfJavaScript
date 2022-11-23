// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Nada";
let lastName = "Abuzaid";
let country = "Palestine";
let city = "Gaza";
let age = 21;
let isMarried = false;
let year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

// 4. Boolean value is either true or false.
// 4-1 Write three JavaScript statement which provide truthy value.
console.log(3 > 2);
console.log("M");
console.log(7);

// 4-2 Write three JavaScript statement which provide falsy value.
console.log(3 < 2);
console.log("");
console.log(0);

// Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// Find out the numbers of seconds elapsed from January 1, 1970 to now
console.log(date.getTime());

// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a");
let b = prompt("Enter side b");
let c = prompt("Enter side c");
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length");
let width = prompt("Enter width");
let areaRe = length * width;
let perimeterRe = 2 * (length + width);
console.log(`The area of the rectangle is ${areaRe}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius");
let areaCi = 3.14 * radius * radius;
console.log(`The area of the circle is ${areaCi}`);


