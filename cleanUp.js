// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
  // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName()

// I put the console log indented on a new line of code and moved the last curly to the third line.


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// I fixed indentation issues to make it more readable.
// added console.log before the function to read it in the log.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// I moved the last curly to the final line of code and finished the word function as func is not something that works. 
// Added space before first curly.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}

console.log(average(2, 5))
// I fixed indentation issues, extra empty lines of code, and made it more readable. Added a console.log for the function.