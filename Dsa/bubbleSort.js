var arr =[1,4,5,3,2,10];
function bubbleSort(){
    temp = 0;
    // foolish looping 
    for (let i = 0;i < arr.length;i++){
        for (let j = 1;j <arr.length;j++){
            if (arr[j] > arr[j+1]){
                //swalgo
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));