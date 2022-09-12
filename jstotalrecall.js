//I. Variables & Datatypes

//A. Q+A
/* 
1. How do we assign a value to a variable?

    declare a variable: let or const, name the variable then use = operator, a value after that

2. How do we change the value of a variable?

    at the bottom of the code, add another line with same variable name and new value -> variableName = newValue (let is not needed, you cannot change const)

3. How do we assign an existing variable to a new variable?

    declare a new variable and make it = to existing variable

4. Remind me, what are declare, assign, and define?

    declare =  creating a variable
    assign = assigning a value to a variable
    define = process of declaration, initialization, assignment. Assigning a value to the variable reserves memory space = define  

5. What is pseudocoding and why should you do it?

    Pseudocoding is a description of how the program will work in non-programming language.
    

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

    90% solve/ 10% code

*/

//B.Strings
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let firstVariable = "Hello World"

firstVariable = 123

let secondVariable = firstVariable

secondVariable = "Good Morning"

console.log(firstVariable); //prints 123

let yourName = 'Christine'

console.log(`Hello, my name is ${yourName}`)

//C.Booleans
//print all answer as true
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//D.The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animals anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = 'cow'
if (animal ==='cow'){
    console.log('mooooo')
} else{
    console.log("Hey! You're not a cow.");
}

//E.Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 12
if (age >= 16){
    console.log("Here are the keys!")
} else if (age < 16){
    console.log("Sorry, you're too young.");
}

//II.Loops
//A.The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 10; i <= 400; i++){
    console.log(i)
}

for (let i = 12; i < 4000; i+=3){
    console.log(i)
}

//B.Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i,"<-- is an even number")
    } else{
        console.log(i);
    }
}

//C.Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i++){
    if (i % 5 == 0 && i % 3 == 0){
        console.log(`I found a ${i}. High five! Three is a crowd`)
    }
    else if (i % 5 == 0){
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`);
    } else {
        console.log(i);
    }
}

//D.Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0
for (let i = 1; i <= 10; i++){
    bank_account += i
}
console.log(bank_account)

let bank_account_bonus = 0
for (let i = 1; i <= 100; i++){
    (bank_account_bonus += i * 2)
}
console.log(bank_account_bonus);

//III. Arrays & Control flow
//A.Talk about it
/*
1. What are the things in an array called?

    an element

2. Do Arrays guarantee those things will be in order?

    no, not ordered

3. What real-life thing could you model with an array?

    grocery list, sign-up sheet, ingredients

*/

//B.Easy Does it

const quotes = ['Merry Christmas','Happy New Year','Trick or Treat']

//C.Accessing elements
const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array?
//Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

randomThings[0]

randomThings.splice(2,1,"World") //(index, # of things to edit, whats being pushed)

console.log(randomThings);

//D.Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

ourClass[2]

ourClass.splice(4, 1, "Octocat")

ourClass.push("Cloud City")

console.log(ourClass);

//E.Mix It Up
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.push("Aegon", "Who")

myArray.shift(5)

myArray.unshift("Bob Marley")

myArray.pop('Who')

const reversed = myArray.reverse()

console.log(myArray);

//F.Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

let num = 100

if (num < 100){
    console.log("little number");
} else {
    console.log("big number");
}

//G.Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let num1 = 7

if (num1 < 5){
    console.log("little number")
} else if (num1 > 10){
    console.log("big number")
} else {
    console.log("monkey");
}

//H.What's in Your Closet?
//given code: 
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

kristynsCloset.splice(6, 0, "raybans")

kristynsCloset.splice(5, 1, "stained knit hat")

console.log(kristynsCloset);

thomsCloset[0][0]
thomsCloset[1][0]
thomsCloset[2][0]


console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][0]}!`);

thomsCloset[1].splice(2, 1, 'Footie Pajamas')
console.log(thomsCloset);

//IV. Functions
//A. printGreeting
const printGreeting = (name) => `Hello there, ${name}!`

console.log(printGreeting("Slimer"))

//B.printCool
const printCool = (name) => `${name} is cool`

console.log(printCool("Captain Reynolds"));

//C.calculateCube
const calculateCube = (num) => num * num * num

console.log(calculateCube(5));

//D.isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(char){
    if(char == 'a','e','i','o','u'){
        return true
    } else{
        return false
    }
}

console.log(isVowel('a'));

//E.getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (str1, str2) => [str1.length, str2.length]

console.log(getTwoLengths('Hank','Hippopopalous'));

//F.getMultipleLengths
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const array = []

const getMultipleLengths = (str) => {
    for (i = 0; i < str.length; i++){
        array.push(str[i].length)
    }
    return array
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(num1,num2,num3){
//     return Math.max(num1, num2, num3)
// }
//solve without math.max

function maxOfThree(num1,num2,num3){
    if (num1 == num2 == num3){
        return num1 || num2 || num3
    }else if (num1 > num2 && num1 > num3){
        return num1
    }else if (num2 > num1 && num2 > num3){
        return num2
    }else if (num3 > num1 && num3 > num2){
        return num3
    }
}
console.log(maxOfThree(6, 9, 1));

//H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


function printLongestWord(arr){
    let longest = ''
    for (i = 0; i < arr.length; i++){
        if (arr[i].length > longest.length){
            longest = arr[i]
        }
    }
return longest
}


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//Objects
//A.Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
    name: 'Christina',
    email: 'chris@gmail.com',
    age: 25,
    purchased: []
}

//B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the email value to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = 'newchris@gmail.com'
user.age++

//C.Adding keys and values
//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = 'USA'

//D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates","peace of mind","Merino jodhpurs")

console.log(user.purchased[2])

//E. Object-within-object
// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: "Ash",
    age: 20,
    location: "Texas",
    purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55

user.friend.purchased.push("The One Ring", "A latte")

console.log(user.friend.purchased[1]);

//F. Loops
//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

//G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with useras the argument.

function updateUser(){
    user.age++
    user.name = user.name.toUpperCase()
}

updateUser();
console.log(user);

const oldAndLoud = person =>{
    person.age++
    person.name = person.name.toUpperCase()
}
oldAndLoud(user)
oldAndLoud(user.friend)
console.log(user)
console.log(user.friend);

//Cat Combinator
//1. Mama Cat

const cat1 = {
    name: 'Lin',
    breed: 'American Short Hair',
    age: 2
}
console.log(cat1.age, cat1.breed);

//2. Papa Cat
const cat2 = {
    name: 'Bobby',
    breed: 'Russian Blue',
    age: 3
}

//3. Combine Cats!

// const combineCats = (cat1, cat2) => {
//     console.log(cat1, cat2);
// }
// combineCats(cat1, cat2)

// combineCats({
//     name: 'Lin',
//     breed: 'American Short Hair',
//     age: 2
// }, {
//     name: 'Bobby',
//     breed: 'Russian Blue',
//     age: 3
// })

const combineCats = (cat1, cat2) => {
    return{
    name: cat1.name + cat2.name,
    age: 1,
    breed: `${cat1.breed}-${cat2.breed}`
}
}
console.log(combineCats(cat1, cat2))

//4. Cat brain bender
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
