// Your code here
const saturdayFun = (string="roller-skate") => {
    return `This Saturday, I want to ${string}!`;
}

const mondayWork = (string="go to the office") => {
    return `This Monday, I will ${string}.`
}

const wrapAdjective = (thing="*") => {
    return (string="special") => {
        return `You are ${thing}${string}${thing}!`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

  const actionApplyer = (index, array) => {
      if (array.length === 0){
          return index
      }
      else {
         array.forEach(element => {
             index = element(index);
         });;
         return index;
      }
  }

let encouragingPromptFunction = wrapAdjective("!!!")
wrapAdjective("%")("a dedicated programmer")
