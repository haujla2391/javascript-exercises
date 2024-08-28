const sumAll = function(lower, higher) {
    if (!Number.isInteger(lower) || !Number.isInteger(higher)) return "ERROR";
    if (lower < 0 || higher < 0) return "ERROR";
    if (lower > higher) {
      const temp = lower;
      lower = higher;
      higher = temp;
    }

    let result = 0
    for(let i = lower; i <= higher; ++i){
        result += i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
