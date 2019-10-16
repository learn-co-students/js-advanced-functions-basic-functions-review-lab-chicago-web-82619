// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(style = "*") {
  return function (str) {
    return `You are ${style}${str}${style}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3
  },
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function() {
    return 10/5
  }
}

function actionApplyer(int, arr) {
  if(arr.length < 1) return int
  let result = arr[2](arr[1](arr[0](int)))
  return result
}