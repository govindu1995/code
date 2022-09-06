let find = 5;
let arr = [1,2,3,4,5,6];
let result = null;

function BinarySearch(l, r) {
    // peak
    let mid = Math.floor((l+r) / 2); 

    // peak condition
    if(arr[mid] === find) {
        result = mid;
        return;
    }

    if(find > arr[mid]) {
        // RHS
        return BinarySearch(mid + 1, r);
    }
    
    // LHS
    return BinarySearch(l, mid-1);
}

BinarySearch(0, arr.length - 1);
console.log(result);