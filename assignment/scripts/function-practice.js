console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return  "Hello " + name + '!';
}
console.log( 'Test helloName - should say "Hello Matt!":', helloName("Matt"));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return total;
}
console.log( 'Test addNumbers - should say "13":', addNumbers(6,7));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let total = num1 * num2 * num3;
  return total
}
console.log( 'Test multiplyThree - should say 60:', multiplyThree(3,4,5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say "true":', isPositive(3) );
console.log( 'isPositive - should say "false":', isPositive(0) );
console.log( 'isPositive - should say "false":', isPositive(-3) );
console.log( 'isPositive - should say "true":', isPositive(1031) );
console.log( 'isPositive - should say "false":', isPositive(-999) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array == []){
    return undefined;
  }
  else {
    let item = array.pop();
    return item;
  }
}
console.log( 'Test getLast - Should say "undefined":', getLast([]));
console.log( 'Test getLast - Should say "dessert":', getLast(['vegetables', 'meat', 'dairy', 'dessert']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let item of array){
    if (item === value){
      return true;
    }
  }
  return false;
}
console.log( 'Test find - Should say "false":', find('bread', ['meat', 'dessert', 'pizza', 'wine', 'games']));
console.log( 'Test find - Should say "true":', find('bread', ['meat', 'dessert', 'pizza', 'wine', 'games', 'bread']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let x of string){
    if (x === letter){
      return true;
    }
  }
  return false;
}
console.log( 'isFirstLetter - should say "true":', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say "false":', isFirstLetter('z', 'apple') );
console.log( 'Test isFirstLetter - should say "false":', isFirstLetter('r', 'ninja') );
console.log( 'Test isFirstLetter - should say "true":', isFirstLetter('t', 'teleport') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let nums of array){
    sum += nums;
  }
  return sum;
}
console.log( 'Test sumAll - Should say "45":', sumAll([10, 10, 10, 8, 2, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function posNums( array ){
  let Nums = [];
  for (let posNum of array){
    if (posNum > 0){
      Nums.push(posNum);
    }
  }
  return Nums;
}
console.log( 'Test posNums - Should return "[]":', posNums([-2,-4,0,0,-54]));
console.log( 'Test posNums - Should return 1, 3, and 5:', posNums([-2, 1, -4, 0, 3, 5, 0, -54, -3]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//BASKETBALL POINTS - You are counting points for a basketball game, 
//given the amount of 2-pointers scored and 3-pointers scored, 
//find the final points for the team and return that value.
function bballPoints( num1, num2){
  return (num1*2)+(num2*3);
}
console.log( 'Test bballPoints - Should say "81":', bballPoints(12,19));
console.log( 'Test bballPoints - Should say "5":', bballPoints(1,1));
