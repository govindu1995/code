//impure Function
let matureNum =0;
const impureFunction =(num)=>{
    return (matureNum += num);
};

//returns different ressult given same inputs 

const result1 = impureFunction(5);
//5
console.log(result1);

//10 
const result2 = impureFunction(5);
console.log('matureNum',matureNum)