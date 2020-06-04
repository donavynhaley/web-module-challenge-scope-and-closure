// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 contains a nested function and counter 2 dosen't but both have the count variable outside the function that adds to it.
 * 2. Which of the two uses a closure? How can you tell?
 * CounterMaker is is useing closure because the count variable is inside the function and cannot be refrenced outside of it.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * If you did not want the count variable to be global thhan counter 1 would be preferable. Counter 2 would be better if you needed to refrence that variable globally(As in later in the code)
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
  let pointsScored = Math.floor(Math.random() * 3);
  return pointsScored;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(innings, numOfInnings){
  let score = {
    'Home': 0,
    'Away': 0,
  };
  for(i=0; i < numOfInnings; i++){
    score["Home"] += innings();
    score["Away"] += innings();
  }
  return score;
}
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(randomNumber, numberOfInnings) {
  let score = {
    'Home': 0,
    'Away': 0,
  };
  for(i=0; i < numberOfInnings; i++){
    score["Home"] += randomNumber();
    score["Away"] += randomNumber();
    console.log(`${i+1} inning: ${score["Home"]} - ${score["Away"]}`)
  }
  console.log(`Final Score: ${score["Home"]} - ${score["Away"]}`)

}
scoreboard(inning, 9);