// Exercise: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// Declare an empty array
let emptyArray = [];

// Declare an array with more than 5 number of elements
let moreThanFive = [1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log(moreThanFive.length);

// Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0]);
console.log(moreThanFive[moreThanFive.length / 2]);
console.log(moreThanFive[moreThanFive.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "string", true, null, undefined, 2];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentence = "";
for (let i = 0; i < itCompanies.length; i++) {
    if (i == itCompanies.length - 1) {
        sentence += "and " + itCompanies[i] + " are big IT companies.";
    } else {
        sentence += itCompanies[i] + ", ";
    }
}
console.log(sentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = prompt("Enter a company name:");
if (itCompanies.includes(company)) {
    console.log(company);
} else {
    console.log("Company is not found");
}

// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] == "o") {
            count++;
        }
    }
    if (count > 1) {
        console.log(itCompanies[i]);
    }
}

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(itCompanies.length / 2 - 1, 2));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));