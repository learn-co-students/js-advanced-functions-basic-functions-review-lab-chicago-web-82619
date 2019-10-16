// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(special="*") {
  return function (name) {
    return `You are ${special}${name}${special}!`
  }
}

let Calculator = {
  add: function(x, y) {return x + y;},
  subtract: (x, y) => {return x - y},
  multiply: (x, y) => {return x * y},
  divide: (x, y) => {return x / y},
}

let actionApplyer = (integer, array) => {
  if (array.length === 0) {
    return integer;
  } else {
    array.map(func => {
      integer = func(integer)
    })
  }
  return integer
}
