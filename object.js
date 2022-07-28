const mohit ={
    name :'mohit',
    occupation:'Leet FE',
    age : 28,
    salary:{
        primary:{
            income :5000
        },
        secondary:300000
    }
}

const {salary:{primary:{income}}} = mohit; //destructuring

console.log(income)