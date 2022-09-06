function fib(n){
    // peak
    let peak = 0;
    // peak condition
    if(n === peak){
        debugger;
        return[0,1];
    }
    debugger;
    // recursive call 
    let result = fib(n-1);
    debugger;
    // slide loop 
    result.push(result[n]+result[n-1]);
    return result;
}