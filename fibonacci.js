//time to memoize!
let memo = [];

function fib (input){
    if(input == 0){
        return 0;
    }
    else if(input == 1){
        return 1;
    }else{
        memo[input - 2] = memo[input-2] == undefined ? fib(input - 2) : memo[input - 2];
        memo[input - 1] = memo[input-1] == undefined ? fib(input - 1) : memo[input - 1];

        return(memo[input-2] + memo[input-1]);
    }
}

console.log(fib(7));
