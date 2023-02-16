/* ------------------------ [ CREATING OBJECTS ] ------------------------ */

/*
// Object constructor (not recommended)
var myConstructObject = new Object("Chloe", 28, "student", "hopeless");

// Use the Create method. It creates a new object by passing the prototype object as a parameter
var myCreateObect = Object.create(null);

// Object literal
// The literaly properties can be of ANY data type
var myLiteralObject = {
    name: "Chloe",
    age: 28,
    occupation: "student",
    wellBeing: "down, but not out",
    description: function() {
        return `This is ${this.name}. She is ${this.age}, currently a(n) ${this.occupation}. Right now she's feeling ${this.wellBeing}.`
    }
};


console.log(myConstructObject);                 // [String: 'Chloe]
console.log(myCreateObect);                     // [Object: null prototype] {}
console.log(myLiteralObject.description);       // [Function: description]
console.log(myLiteralObject.description());     // This is Chloe. She is 28, currently a(n) student. Right now she's feeling down, but not out.

*/

/* ------------------------ [ PROTOTYPE CHAINING ] ------------------------ */

// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

// boss -> employee -> person -> object.prototype ->

/*
const boss = {
    experience: 10,
    __proto__: {
        species: "employee",
        speciality: "tech",
        wage: 100000,
        __proto__: {
            genus: "person",
            isHuman: true,
            isAlive: false,
        },
    },
};
// stringify the whole object otherwise it outputs object Object
console.log("Only outputs the value specific to boss, which is experience: " + JSON.stringify(boss));
console.log(`Boss's experience: ${boss.experience}`);
console.log(`But...is the boss alive? ${boss.isAlive}`);

// stringify the whole object otherwise it outputs object Object. Lists the employee proto
console.log(`The proto? ${JSON.stringify(boss.__proto__)}`);

console.log(`Boss's species: ${boss.species}`);
console.log(`Boss's specialty: ${boss.speciality}`);
console.log(`Boss's wage: ${boss.wage}`);

// stringify the whole object otherwise it outputs object Object. Lists the person proto

console.log(`The proto of the proto? ${JSON.stringify(boss.__proto__.__proto__)}`);

console.log(`The proto? ${JSON.stringify(boss.__proto__)}`);
console.log(`Boss's genus: ${boss.genus}`);
console.log(`Is the boss human? ${boss.isHuman}`);
console.log(`But...is the boss alive? ${boss.isAlive}`);
*/


/* ------------------------ [ CALL APPLY BIND ] ------------------------ */

/*
var employee1 = { firstName: "Gary", lastName: "Bradley" };
var employee2 = { firstName: "Patrick", lastName: "Whalen" };

function invite(greeting1, greeting2) {
  console.log(
    // this refers to the global scope. It allows us to call a value within an object instead of creating multiple variables.
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

// Call: The call() method invokes a function with a given this value and arguments provided one by one
invite.call(employee1, "Hello", "How are you?"); // Hello Gary Bradley, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Patrick Whalen, How are you?

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
invite.apply(employee1, ["Hello", "How are you?"]); // Hello Gary Bradley, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Patrick Whalen, How are you?

// bind: returns a new function, allowing you to pass any number of arguments
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello Gary Bradley, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Patrick Whalen, How are you?

*/

/* ------------------------ [ COMMON JSON PROPERTIES ] ------------------------ */

/*
const myJson = '{"mode": "studying", "isHelpful": true}';
const myObj = JSON.parse(myJson);
console.log(myObj.mode);
console.log(myObj.isHelpful);

const myPlan = {
    school: "coding practice",
    extracurr: ["paint", "draw", "write", "study Russian"],
    future: ["get job by May 2023", "look into grad school"]
}

console.log(`This is myPlan object, not stringified: ${myPlan}`);
console.log(`This is myPlan object, but stringified: ${JSON.stringify(myPlan)}`);
*/


/* ------------------------ [ ARRAY PRACTICE ] ------------------------ */
/*
var myArray = [];

// PUSH
myArray.push("this", "is", "my", "practice", "array", ",", "duh");
console.log(myArray);

// SPLICE(start index, howManyToRemove, newItemA, newItemB, ..., newItemN)
const mySpliceArray1 = myArray.splice(2,1); //  ['this', 'is', 'practice', 'array', ',', 'duh' ]
// returns the word that was removed
console.log(`remove 'my': ${mySpliceArray1}`);
console.log(`report the array: ${myArray}`);
console.log(`report the array, but in array format: ${JSON.stringify(myArray)}`);

// removes the word 'practice' and adds words 'a', and 'new' to the array
const mySpliceArray2 = myArray.splice(2,1,"a", "new");
// returns the word that was removed
console.log(`remove 'practice': ${mySpliceArray2}`);
console.log(`report the array: ${JSON.stringify(myArray)}`);

*/
/*
//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));

console.log("----the consequences-----");
console.log(`This is who I am after SPLICE!: ${array}`);
console.log(`I am unchanged by SLICE!: ${array2}`);

*/

/*
// CONCAT => arr1.concat(arr2, arr3);

const arr1 = ["first"];
const arr2 = ["second"];
const arr3 = ["third"];

const finalArr = arr1.concat(arr2, arr3);
console.log(finalArr)
*/

// FILTER

// function that .filter() will use in the following code to return ages > 18
/*
let canVote = (age) => {
    console.log(age)
    return age >= 18;
}
const arrayAge = [18, 20, 88, 54, 3, 19, 17];
// imposes a filter on the arrayAge array
// Filters all items that meet the canVote requirement (>=18) and stores in the filterAgeAray
var filterAgeArray = arrayAge.filter(canVote);

console.log(`These are acceptable voting ages: ${JSON.stringify(filterAgeArray)}`);

// compares ages of those <18 
let minors = (age) => {
    console.log(age < 18);
    return age < 18;
}
// finds the first item that meets the requirements in minors function (<18)
var findFirstMinor = arrayAge.find(minors);
console.log(`This is the age of the first person in our arrayAge under the age of 18: ${JSON.stringify(findFirstMinor)}`);
// findIndex finds the element that meets the requirement
var findFirstMinorIndex = arrayAge.findIndex(minors);
console.log(`This is the index of the first person in our arrayAge under the age of 18: ${JSON.stringify(findFirstMinorIndex)}`);


// FOR EACH DOES NOT RETURN A NEW ARRAY!!!!!
var newAgeArray = [];
var nextCensusAges = arrayAge.forEach((age) => {
    // console.log(age);
    newAgeArray.push(age+10);
    return -1;
});
console.log(typeof newAgeArray);
console.log(`These are the ages of the group in the next census: ${newAgeArray}`);

// MAP RETURNS A NEW ARRAY
var myMapAgeArray = [];
var mapCensusAges = arrayAge.map((age) => {
    return age+10;
});
console.log(`These are the ages of the group in the next census using MAP: ${mapCensusAges}`);
*/

/*
// POP removes last element
// returns the element removed
var popArray = [1, 3, 5, 7, 8];
console.log(popArray.pop());
console.log(popArray);

// sorts in alphabetical and numerical order
// reverses alphabetical and numerical order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());
*/


/* ------------------------ [ COMPARE OBJECT TO MAP] ------------------------ */


/* ------------------------ [ LAMDA AKA ARROW FUNCTIONS] ------------------------ */


/* ------------------------ [ FIRST ORDER FUNCTIONS] ------------------------ */


/* ------------------------ [ HIGHER ORDER FUNCTIONS] ------------------------ */


/* ------------------------ [ UNARY FUNCTIONS] ------------------------ */


/* ------------------------ [ CURRYING FUNCTIONS] ------------------------ */


/* ------------------------ [ KEYWORD: LET ] ------------------------ */


/* ------------------------ [ LET VS VAR: WHEN AND WHY] ------------------------ */


/* ------------------------ [ SWITCHBLOCK ] ------------------------ */





