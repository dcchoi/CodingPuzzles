//time to memoize!
let memo = [];

function fib (input){
    if(input < 0) {
        throw "No negatives!";
        return;
    }

    if(input == 0 || input == 1){
        return input;
    }

    //We have already solved this input return solution
    if(memo[input] != undefined){
        return memo[input];
    }

    //Haven't solved yet, solve
    let memoResult = fib(input-2) + fib(input-1)

    //Store solution
    memo[input] == memoResult

    return memoResult;
}

console.log(fib(0));
