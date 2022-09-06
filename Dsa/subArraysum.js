let array = [1,2,3,4,5,6];
let check=array.length;
let  small =6;
function subarray(array,check,small){
    let add = 0;
    for (i =0;i<check;i++){
        add =array[i];
        for(j =i +1;j<=check;j++){
            add += array[j];
            if(add == small){
                console.log(`add of the array i ${i} and j is ${j}`);
                return;
            }
        }
    }
}
subarray(array,check,small);