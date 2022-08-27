var result = [];
var arr = [14,33,27,10,35,19,42,44];

function mergeSort(arr, left, right) {
    var middle = Math.floor((left + right) / 2);

    if(left >= right) return;
    
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    var sortedArr = merge(left, middle, right)

    for(let i=left, j=0; i<=right; i++, j++) {
        arr[i] = sortedArr[j];
    }

    result = sortedArr;
}

function merge(left, middle, right) {
    var i = 0;
    var j = 0;
    var a1 = arr.slice(left, middle + 1);
    var a2 = arr.slice(middle + 1, right + 1);
    var result = [];
    
    while(i < a1.length || j < a2.length) {
        if(a1[i] < a2[j] || a2[j] === undefined) {
            result.push(a1[i]);
            i++;
        } else if(a2[j] < a1[i] || a1[i] === undefined) {
            result.push(a2[j]);
            j++;
        }
    }
    return result;
}

mergeSort(arr, 0, arr.length - 1);
console.log(result);