var arr = [1,4,5,3,2,10];
//selection sort
function selectionSort(arr){
    var minInd = 0;
    var minVal = 0;
    for(i = 0;i<arr.length;i++){
            minVal = arr[i];
            minInd = i;
        for (j =i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                minVal = Math.min(minVal,arr[j]);
                if(minVal === arr[j]){
                    minInd = j;
            }
        }
            
    }
        arr[minInd] =arr[i]
            arr[i] = minVal;
        
    }
    return arr;
}
   console.log(selectionSort(arr));