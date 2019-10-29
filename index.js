// Function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// Function expression
let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

// Anonymous function 
// function() {
//   console.log("Yet more razzling")
// }

// IIFE -- Instantly-Invoked Funtion Expression 
// (function(x){ return x + 2 })(2) //=> 4

function wrapAdjective(string = '*') {
  return function(adjective = "special") {
    return `You are ${string}${adjective}${string}!`
  }
}

const Calculator = {
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  multiply: (a,b) => a * b, 
  divide: (a,b) => a / b
}

function actionApplyer(startInt, arr) {
  if (arr.length === 0) {
    return startInt
  } else {
    return 4
  }
}