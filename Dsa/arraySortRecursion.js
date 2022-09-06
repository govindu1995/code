let isSorted = true;
let arr = [1,2,3,4,5];
let arrLen = arr.length-1;
function check(n){
    // peak
    peak = 0;
    //peak condition 
    if(n === 0){
        return;
    }
    // climb loop
    if (arr[n] <= arr[n-1]){
        //false
        isSorted = false;
    }
    check (n-1);
}
check(arrLen);
console.log('is Array Sorted',isSorted);