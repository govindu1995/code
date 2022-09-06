const arr1 =[1,2,3,3,4,5,6];
const arr2 =[3,3,5];
const output =[];

for (let i = 0;i<arr1.length;i++){
    for (let j =0 ;j< arr2.length;j++){
        if(arr2[j] === arr1[i]){
            output.push(arr2[j]);
        }
    }
}
console.log(output)