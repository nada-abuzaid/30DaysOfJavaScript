// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let str = text.replace(/[^a-zA-Z ]/g, "");
let textArray = str.split(" ");
console.log(textArray.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// remove 'Honey' if you are allergic to honey
if (shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

// modify Tea to 'Green Tea'
if (shoppingCart.includes("Tea")) {
  shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
}

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3

// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages[0]); // Min
console.log(ages[ages.length - 1]); // Max

// Find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(ages.length / 2);
const median =
  ages.length % 2 !== 0 ? ages[middle] : (ages[middle - 1] + ages[middle]) / 2;
console.log(median);

// Find the average age(all items divided by number of items)
const sum = ages.reduce((a, b) => a + b, 0);
const average = sum / ages.length;
console.log(average);

// Find the range of the ages(max minus min)
const range = ages[ages.length - 1] - ages[0];
console.log(range);

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Compare the value of (min - average) and (max - average), use abs() method
const min = ages[0];
const max = ages[ages.length - 1];
const minAvg = Math.abs(min - average);
const maxAvg = Math.abs(max - average);
console.log(minAvg, maxAvg);

// Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10);
console.log(firstTen);

// 2. Find the middle country(ies) in the countries array
const middlee = Math.floor(countries.length / 2);
const middleCountry = countries[middlee];
console.log(middleCountry);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 === 0) {
  const firstHalf = countries.slice(0, middlee);
  const secondHalf = countries.slice(middlee);
  console.log(firstHalf, secondHalf);
} else {
  const firstHalf = countries.slice(0, middlee + 1);
  const secondHalf = countries.slice(middlee + 1);
  console.log(firstHalf, secondHalf);
}
