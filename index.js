/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

const { numberTypeAnnotation, classExpression } = require("@babel/types");

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 18;
console.log(votingAge);


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let var1 = 1;
let var2 = 'cat';
if (var2 === 'cat') {
  var1 = 0;
}
console.log(var1);


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
var str = '1999';
var num = Number(str);
console.log('The variable num has a value of', num, 'and is a', typeof num);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
  return a*b;
}
let num1 = 2;
let num2 = 4;
console.log(multiply(num1, num2));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

function dogYears(age){
  return age*7;
}
let age = 5;
console.log(dogYears(age));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
  /*add your code here*/

  if (age >= 1){ /* Equal or older than 1 year */

    if (weight > 15){ /* Heavier than 15 lbs */
      return weight * 0.02;
    } else if (weight > 11) { /* Heavier than 11 lbs */
      return weight * 0.03;
    } else if (weight > 6){ /* Heavier than 6 lbs */
      return weight * 0.04;
    } else { /* Up to 5lbs */
      return weight * 0.05;
    }

  } else if (age >= 0.583){ /* Equal or older than 7 mo*/
    return weight * 0.04;
  } else if (age > 0.33){ /*Older than 4 mo*/
    return weight * 0.05;
  } else if (age > 0.16) {
    return weight * 0.10;
  }
  
}

// Test Cases
// console.log('Case 1:', hungryDog(4,1));
// console.log('Case 2:', hungryDog(7,1));
// console.log('Case 3:', hungryDog(14,1));
// console.log('Case 4:', hungryDog(16,1));
// console.log('Case 5:', hungryDog(20,0.2));
// console.log('Case 6:', hungryDog(16,0.33));
// console.log('Case 7:', hungryDog(4,0.583));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function computerChoice (){
  let num = Math.round ( (Math.random()*(3 - 1)) + 1);
  if (num === 1){
    return 'rock';
  } else if (num === 2){
    return 'paper';
  } else {
    return 'scissors'
  }
}

function game(user, computer){
  
  //  - win should return "you win!"
  //  - lose should return "you lose!"
  //  - tie should return "it's a tie"
  if (user === computer) {
    return 'it\'s a tie';
  } 
  
  if (user === 'rock' && computer === 'scissors' ){
    return 'you win!';
  }

  if (user === 'rock' && computer === 'paper' ){
    return 'you lose!';
  }

  if (user === 'paper' && computer === 'rock' ){
    return 'you win!';
  }
  if (user === 'paper' && computer === 'scissors' ){
    return 'you lose!';
  }

 if (user === 'scissors' && computer === 'paper' ){
    return 'you win!';
  }
  if (user === 'scissors' && computer === 'rock' ){
    return 'you lose!';
  }
  
}

// Test Cases

// console.log(game('scissors',computerChoice())); // Random Comp Choice

// console.log(game('rock','rock')); // tie
// console.log(game('rock','scissors')); // win
// console.log(game('rock','paper')); // lose

// console.log(game('paper','paper'));
// console.log(game('paper','rock'));
// console.log(game('paper','scissors'));

// console.log(game('scissors','scissors'));
// console.log(game('scissors','paper'));
// console.log(game('scissors','rock'));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(km){
  /*add your code here*/
  return km * 0.621371;
}
console.log(miles(10));

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(cm){
  // return cm * 0.0328084
  return cm / 30.48;
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(start){
  /*add your code here*/
  let resultStr = start + ' bottles of soda on the wall, '+ start + ' bottles of soda, take one down pass it around ' + (start-1) + ' bottles of soda on the wall';
  return resultStr;
}

// Test Case
// console.log(annoyingSong(10));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

function grade(grade){
  if (grade >=90) { 
    return 'you got an A';
  } else if (grade >=80) { 
    return 'you got a B';
  } else if (grade >=70) { 
    return 'you got a C';
  } else if (grade >=60) { 
    return 'you got a D';
  } else { 
    return 'you got an F';
  }
}

// Test Cases
// console.log(grade (90));
// console.log(grade (80));
// console.log(grade (70));
// console.log(grade (60));
// console.log(grade (50));



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
