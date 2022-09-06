function transpose(arr){
    for(let i = 0;i < arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            let temp =arr[i][j];
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
        }
        return arr;
    }
    //return arr;
}
var output = transpose([[1,2,3],[4,5,6],[7,8,9]]);
console.log(output);