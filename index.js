function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

let actionApplyer = function(start, ray) {
    let a = start
    for (let i = 0; i < ray.length; i++ ){
        a = ray[i](a)
    }
    return a
}
