// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// This is a built in method being called on the string "Hello World". The method turns all the letters in the string to lowercase.
// No arguments are passed to the method.

"Hello World".includes("Hello");
// This is a built in method asking if "Hello" is included in the String. The return value will be true.

"Hello World".endsWith("Hello");
// This is a built in method being called upon for the String "Hello World". It's asking if the String ends with "Hello".
// The return value will be false.


"Hello World".endsWith("rld");
// This is a built in method being called upon for the String "Hello World". It's asking if the String ends with "rld".
// The return value will be true.




// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var city = "Lilliwaup"
var state = "Washington"

// The length method is called on the city variable, which returns the length of the string.
// The length method returns a value which will be the character length of the string including spaces.
// In this example the return value will be 9, because Lilliwaup is 9 characters long.
// The console.log() statement prints the return value of the length() method (9) to the console.
console.log(city.length)

// The endsWith() method is called on the state variable, which stores the string object "Washington"
// The endsWith() method returns the value true if the data in the city variable ends with the argument passed in.
// In this example, the return value is true, because "Washington" does end with "ton".
// The console.log() statement prints the return value of the endWith() method (true) to the console.
console.log(state.endsWith("ton"))


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var westCoast = ["Washington", "Oregon", "California"]
var waNeighbors = ["Oregon", "Idaho", "Canada"]


// The toString() method is called on the westCoast array, which converts and stores the array as a string separated by commas.
// The toString() method returns a string that pulls the elements of the array and makes it one single string.
// In this example, the return string object is "Washington,Oregon,California".
// The console.log() statement prints the converted string of the toString() stated above method to the console.
console.log(westCoast.toString())


// The pop() method is called on the waNeighbors array, which stores the string object "Canada"
// The pop() method returns a string object that takes the final element of the array.
// In this example, the return string object is "Canada" because that is the final element in the array.
// The console.log() statement prints the string object "Canada" to the console.
console.log(waNeighbors.pop())