// Array:To create an array.
const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// fill: Fill all the array elements with a static value
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// concat:To concatenate two arrays.
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// Length:To know the size of the array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5 is the size of the array

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const numberss = [1, 2, 3, 4, 5];
console.log(numberss.indexOf(5)); // 4

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const numbersx = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbersx.lastIndexOf(2)); // 7

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbersI = [1, 2, 3, 4, 5];
console.log(numbersI.includes(5)); // true

// Array.isArray:To check if the data type is an array
const numbersA = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersA)); // true

// toString:Converts array to string
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.toString()); // 1,2,3,4,5

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); // AsabenehMathiasEliasBrook
console.log(names.join(" ")); // Asabeneh Mathias Elias Brook
console.log(names.join(", ")); // Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); // Asabeneh # Mathias # Elias # Brook

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.slice()); // it copies all  item
console.log(numbers4.slice(0)); // it copies all  item
console.log(numbers4.slice(0, numbers4.length)); // it copies all  item
console.log(numbers4.slice(1, 4)); // [2,3,4] // it doesn't include the ending position

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers5 = [1, 2, 3, 4, 5];
numbers5.splice();
console.log(numbers5); // remove all items
numbers5.splice(0, 1);
console.log(numbers5); // remove the first item

const numbers6 = [1, 2, 3, 4, 5, 6];
numbers6.splice(3, 3, 7, 8, 9);
console.log(numbers6.splice(3, 3, 7, 8, 9)); // [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
const array = ["item1", "item2", "item3"];
array.push("new item");
console.log(array); // ['item1', 'item2','item3','new item']

// pop: Removing item in the end.
const numbersP = [1, 2, 3, 4, 5];
numbersP.pop(); // remove one item from the end
console.log(numbersP); // [1,2,3,4]

// shift: Removing one array element in the beginning of the array.
const numbers8 = [1, 2, 3, 4, 5];
numbers8.shift(); // remove one item from the beginning
console.log(numbers8); // [2,3,4,5]

// unshift: Adding array element in the beginning of the array.
numbers8.unshift(0); // -> add one item from the beginning
console.log(numbers8); // -> [0,1,2,3,4,5]

// reverse: reverse the order of an array.
numbers8.reverse(); // reverse array order
console.log(numbers8); // [5, 4, 3, 2, 1]

numbers8.reverse();
console.log(numbers8); // [1, 2, 3, 4, 5]

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
