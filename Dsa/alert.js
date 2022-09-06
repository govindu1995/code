const readline = require('readline');

const r1 = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});
r1.question("what is your name ",function(answer){
    console.log(`oh so your name is ${answer}`);
    // console.log("Closing the interface");
    r1.close();
})