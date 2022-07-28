// // closure
// function counter(){
//     let count = 0;
//     return function (value){
//         count += value;
//         console.log(count);
//     }
// }
// const counterCell = counter();
// counterCell(1);
// counterCell(2);
// counterCell(3);

// for (var i=0; i < 4;i++){
//     setTimeout(function (){
//         console.log(i);
//     },i*1000);
// }

for (let i=0; i < 4;i++){
    setTimeout(function (){
        console.log(i);
    },i*1000);
}