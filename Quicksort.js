// algo for partition / placement 
function placement(left, right) {
    for(j=left, i=left; i<right; i++) {
        if(arr[i] <= arr[right]) {
            swalgo(arr, i, j);
            j++;
        }
    }
    swalgo(arr, j, right);

    return j;
}

// division algo 
function division(arr, left, right) {
    if(left < right) {
        var positionOfPivot = placement(left, right);
        
        division(arr, left, positionOfPivot-1);
        division(arr, positionOfPivot+1, right);
    }
}

// swalgo 
function swalgo(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Quick Sort 

var arr = [8,4,3,6,2,8,1,7];

division(arr, 0, arr.length-1);
console.log(arr);