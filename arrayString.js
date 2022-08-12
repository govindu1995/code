const number = ['b','c','f','a','y','e'];
const vowels = ['a','e','i','o','u'];
const arr =[];

number.forEach (item => {
  vowels.forEach (element => {
    if(item==element){
    arr.push(item);
  }
  })
})
console.log(arr);