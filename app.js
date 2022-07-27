function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(3, 5));

function hoursIntoSeconds(hours) {
  return hours * 60 * 60;
}

console.log(hoursIntoSeconds(2));

function hoursIntoSeconds(hours) {
  let minutes = hours * 60;
  let seconds = minutes * 60;
  return seconds;
}

console.log(hoursIntoSeconds(2));

function calcPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calcPerimeter(10, 20));

function calcTriangleArea(base, height) {
  return (1 / 2) * base * height;
}

console.log(calcTriangleArea(3, 2));

function appendFrontend (string){
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'));

function sumGreaterThan100 (num1, num2){
    return ((num1 + num2) >= 100) // the operator > already returns a boolean, so no need to use if statements
}
console.log(sumGreaterThan100 (60,40))

function lessThanOrEqualToZero(num){
    return (num <= 0);
}

console.log (lessThanOrEqualToZero(1));


function oppositeBoolean (bool){
    return !bool; //! in front of bool makes it the opposite

}
console.log(oppositeBoolean (false))




function isNotZero (num){
    if (num !== 0){
        return true
    }
    return false

}

console.log (isNotZero(0))

function isNotZero (num){
    return num !== 0
}


console.log (isNotZero(0))


//Q10 Given two numbers, return their remainder when divided by each other

function calcRemainder(num1,num2){
    return (num1 % num2)
}

console.log (calcRemainder(9,8))

// Q11. Given a number, return true if the number is odd

function isOdd (num){
    return (num % 2 !== 0)

}

console.log(isOdd(5))

// Q12. If a number is even, return 1 otherwise return -1

function booleanInteger (num){
    if (num % 2 === 0)
    {
    return 1;
    }
    return -1;
    
}
console.log(booleanInteger(4))


function booleanInteger (num){
   return num % 2 === 0 ? 1 : -1 //Use of Ternary Operator (the question mark and colon)

    
}
console.log(booleanInteger(5))

// Q13. Check if a user is logged in AND subscribed 

function isLoggedInAndSubscribed (loggedIn, subscribed){
    if (loggedIn === 'Logged_In' && subscribed === 'Subscribed'){
        return true
    }
        return false
}

console.log(isLoggedInAndSubscribed('Logged_In', 'Subscribed'))

function isLoggedInAndSubscribed (loggedIn, subscribed){
  return (loggedIn === 'Logged_In' && subscribed === 'Subscribed')
  //true && true = true (that's why you can remove the if statement)
 
}

console.log(isLoggedInAndSubscribed('Logged_In', 'Subscribed'))

// Q14. Check if a user is logged in OR subcribed

function isLoggedInOrSubscribed (loggedIn, subscribed){
    if (loggedIn === 'Logged_In' || subscribed === 'Subscribed'){
        return true
    }
    return false
}

console.log(isLoggedInOrSubscribed('Logged_In', 'Unsubcribed'))


function isLoggedInOrSubscribed (loggedIn, subscribed){
    return (loggedIn === 'Logged_In' || subscribed === 'Subscribed')
 
}

console.log(isLoggedInOrSubscribed('Logged_Out', 'Unsubcribed'))