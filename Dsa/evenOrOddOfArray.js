var arr =[1,2,3,4,5,6,7,8];

var arr1 =[];
var arr2 =[];

function evenOROdd(arr){
    for (let i =0 ;i<=arr.length-1;i++){
        if (arr[i]%2===0){
            arr1.push(arr[i]);
        }
        else{
            arr2.push(arr[i]);
        }
    }
}
evenOROdd(arr);
console.log(arr1);
console.log(arr2);
