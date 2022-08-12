const number = ['a', 'b', 'c', 'd', 'e', 'f'];
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

// for(let i = 0 ;i <= number.length -1;i++){
//   for (let j = 0 ;j <= vowels.length;j++){
//     if(vowels[j] === number[i]){
//       arr.push(vowels[i]);
//     }
//   }
// }
// console.log(arr);