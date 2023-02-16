// What are possible ways to create objects in JS?
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
        return `This is ${this.name}. She is ${28}, currently a(n) ${occupation}. Right now she's feeling ${wellBeing}.`
    }
};

myConstructObject;
myCreateObect;
myLiteralObject.description;
myLiteralObject.description();


