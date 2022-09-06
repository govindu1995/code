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

var arr = [7,4,3,6,2,8,1,9];

division(arr, 0, arr.length-1);
console.log(arr);


// // division 
// function division(arr, left, right, k) {
//     if(left >= right) return;
                                     
//     var P = placement(arr, left, right);

//     // left sub array 
//     division(arr, left, P-1)

//     // right sub array 
//     division(arr, P+1, right)
// }

// // placement of pivot 
// function placement(arr, left, right) {
//     var i=left, j=left, pivot = right;

//     for(i=left; i<right; i++) {
//         if(arr[i] <= arr[pivot]) {
//             swalgo(arr, i, j);
//             j++;
//         }
//     }
//     // final / pivot swap
//     swalgo(arr, j, pivot);
//     return j;
// }

// // swapping algorithm
// function swalgo(arr, i, j) {
//     if(arr[i] === arr[j]) return;
    
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// var arr = [7,3,8,10,5,4,2,9];
// division(arr, 0, arr.length-1, 2);
// console.log(arr);