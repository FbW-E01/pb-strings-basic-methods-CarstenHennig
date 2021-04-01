// # Programming Basics: Basic String Methods

// ## These exercises are aimed at making you more familiar with string methods as well as string interpolation. 
// Print your results of each exercise to the console. Use the terminal to view your results. 

// **NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. 
// If you are not sure what we mean by that, try first running your script with multiple variables 
// of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let afternoon = "I can walk in the park all day!";
console.log(afternoon.slice(18, 22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let greetings = "Hello World!";
console.log(greetings.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
let newbornGreetings ="Hello Earthling!";
console.log(newbornGreetings.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let codeLanguages = "JavaScript";
console.log(codeLanguages.slice(3, 6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
let newFashion = "nice shoes";
console.log(newFashion.includes("l"));
console.log(newFashion.includes("n"));

// 6. Create a new string from a given string with the first character of the 
// given string added at the front and back, i.e., expected output: Bananas => BBananasB
let myFruits = "Bananas";
console.log(myFruits.substr(0, 1) + myFruits + myFruits.substr(0, 1));

// 7. Create a new string from a given string taking the last 
//3 characters of the string and add them to both the front and back of the new string. 
//The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
let crazyTasks = "Scritch";
console.log(crazyTasks.substr(4, 6) + crazyTasks + crazyTasks.substr(4, 6));

// 8. Create a new string from a given string by changing the position 
//of first and last characters. The string length must be greater than 
//or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
let letsDance = "BoogieWoogie";
console.log(letsDance.substring(11));

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.










