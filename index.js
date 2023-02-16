/* ------------------------ [ CREATING OBJECTS ] ------------------------ */

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


/* ------------------------ [ PROTOTYPE CHAINING ] ------------------------ */

// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

// boss -> employee -> person -> object.prototype ->

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

