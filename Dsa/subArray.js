const arr = [1,2,3,4];

let output =[];

for (let i = 0;i < arr.length;i++){
    for (let j =i;j<arr.length;j++){
        for (let k =i;k<=j;k++){
            output = output +arr[k] + " ";
        }
    }
}
console.log(output);