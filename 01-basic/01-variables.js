// --------------------------------------------
// JAVASCRIPT BASICS – FULLY COMMENTED
// --------------------------------------------

// ------------------------------
// VARIABLES IN JAVASCRIPT
// ------------------------------

// const → constant value (cannot be reassigned)
const NAME = 'georgekutty jose';

// let → block-scoped, can be updated
let job = 'Software Engineer';

// var → old style, function-scoped (avoid using)
var experience = '2 years';


// ------------------------------
// ARRAYS IN JAVASCRIPT
// ------------------------------

// Basic array syntax:
const language = ['javascript', 'python', 'php'];

// Array created using constructor
const framework = new Array("Symfony", "Dart", "Pycharm");


// ------------------------------
// ADD ELEMENT USING push()
// ------------------------------

let numbers = [1, 2, 3];
numbers.push(4);  // adds 4 at the end of the array

console.log(numbers);
// OUTPUT: [1, 2, 3, 4]


// ------------------------------
// SPREAD OPERATOR (...)
// creates a new array & copies values
// ------------------------------

let arr = [1, 2];
let newArr = [...arr, 3, 4];  // expands arr and adds values

console.log(newArr);
// OUTPUT: [1, 2, 3, 4]


// ------------------------------
// IMPORTANT BUILT-IN ARRAY FUNCTIONS
// ------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// length → returns number of elements
let size = fruits.length; // OUTPUT: 4

// toString() → converts array to a comma-separated string
let myList = fruits.toString();
// OUTPUT: "Banana,Orange,Apple,Mango"


// ------------------------------
// ACCESSING ELEMENTS
// ------------------------------

// at(index) → modern method
let fruit1 = fruits.at(2);  // "Apple"

// bracket notation (same output)
let fruit2 = fruits[2];     // "Apple"


// ------------------------------
// join() → join all values with a custom separator
// ------------------------------

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits1.join(" * "));
// OUTPUT: Banana * Orange * Apple * Mango


// ------------------------------
// pop() → removes last element
// ------------------------------

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
// RESULTING ARRAY: ["Banana", "Orange", "Apple"]


// ------------------------------
// push() → adds an element at end
// ------------------------------

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let newLength = fruits3.push("Kiwi");

// fruits3: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
// newLength: 5


// ------------------------------
// delete → removes element but leaves an empty slot (NOT preferred)
// ------------------------------

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits4[0];

// RESULT: [empty, "Orange", "Apple", "Mango"]


// ------------------------------
// concat() → merges two arrays
// ------------------------------

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);
// OUTPUT: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
