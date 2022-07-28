var num =5;
// pure Function

const pureFunction =(num1,num2)=>{
    return num1 +num2;
}

//always return same result given inputs

const result1 = pureFunction(4,num);
console.log(result1);

const result2 = pureFunction(num,4);
console.log(result2)