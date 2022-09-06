// var arr =[1,9,2,8,3,7,4,6,5,33,10];

var arr = ['Apple', 'Cat', 'Ball','Elephant','Doll'];

/*var output = arr.sort((a,b)=>{ // Normal sort order
    return a-b;
});*/
/*temp = 0;
function sorting (arr){          // two Pointer approach
    for (i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if (arr[i]>arr[j]){
                temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
sorting(arr);
console.log(arr);*/

var output = arr.sort(); // lexical sort 
console.log(output);