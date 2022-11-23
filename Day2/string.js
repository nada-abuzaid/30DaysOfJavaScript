let string = "JavasCript";

console.log(string.length); // 10
console.log(string.toUpperCase()); // JAVASCRIPT
console.log(string.toLowerCase()); // javascript
console.log(string.substr(4, 6)); // Script              || deprecated

// substring()
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

// split()
let stringg = "30 Days Of JavaScript";

console.log(stringg.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(stringg.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = "Asabeneh";

console.log(firstName.split()); // Change to an array - > ["Asabeneh"]
console.log(firstName.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// trim()
let firstNamee = " Asabeneh ";
console.log(firstNamee.trim()); // "Asabeneh"

let stringgg = "30 Days Of JavaScript";

// includes()
console.log(stringgg.includes("Days")); // true
console.log(stringgg.includes("days")); // false - it is case sensitive!

// CharAt()
// Takes index and it returns the value at that index
console.log(stringgg.charAt(0)); // 3

// charCodeAt()
// Takes index and it returns char code (ASCII number) of the value at that index
console.log(stringgg.charCodeAt(3)); // D ASCII number is 68

// indexOf()
// Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(stringgg.indexOf("D")); // 3
console.log(stringgg.indexOf("Days")); // 3
console.log(string.indexOf("days")); // -1

// lastIndexOf()
// Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
let stringIndex =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(stringIndex.lastIndexOf("love")); // 67
console.log(stringIndex.lastIndexOf("you")); // 63
console.log(stringIndex.lastIndexOf("JavaScript")); // 38

// concat()
let stringCon = "30";
console.log(stringCon.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

let country = "Fin";
console.log(country.concat("land")); // Finland

// startsWith()
let string1 = "Love is the best to in this world";

console.log(string1.startsWith("Love")); // true
console.log(string1.startsWith("love")); // false
console.log(string1.startsWith("world")); // false

// endsWith()
let string2 = "Love is the most powerful feeling in the world";

console.log(string2.endsWith("world")); // true
console.log(string2.endsWith("love")); // false
console.log(string2.endsWith("in the world")); // true

// match()
// Takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.
let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

let string3 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string3.match("love")); // ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

let pattern = /love/gi;
console.log(string.match(pattern)); // ["love", "love", "love"]

// repeat()
// Takes a number as argument and it returns the repeated version of the string.
let string4 = "love";
console.log(string4.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
