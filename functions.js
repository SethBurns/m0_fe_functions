// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    var welcome = "Welcome to VSCode."
    return welcome
}
// Calling it once
greeting()
// Calling it twice... did I misunderstand this?
greeting()

console.log(greeting())


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    var greeting = `Hello there, ${name}!`
    return greeting
}

customGreeting("Seth")
customGreeting("George")

console.log(customGreeting("Seth"))

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fname, mname, lname) {
    var gp = `Hello there, ${fname} ${mname} ${lname}!`
    return gp
}
greetPerson("Seth", "Robert", "Burns")
greetPerson("Elise", "Renee", "Jones")

console.log(greetPerson("Seth", "Robert", "Burns"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    var sq = num * num
    return `The square of ${num} is ${sq}`
}
 square(4)
 square(5)

 console.log(square(5))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(quantity, item) {
    if (quantity >=4) {
        return `${item} is stocked`
    } else if ( quantity > 0 && quantity < 4) {
        return `${item} - running LOW`
    } else {
        return `${item} - OUT of stock!`
    }
}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

console.log(checkStock(4, "Coffee"))
console.log(checkStock(3, "Tortillas"))
console.log(checkStock(0, "Cheese"))
console.log(checkStock(1, "Salsa"))