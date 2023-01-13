function bubble(arr){
    var len = arr.length;
   for(var i=1;i<len; i++){
      for(var j =0; j<i;j++){
           if(arr[i]< arr[j]){
             var x = arr[i];
             arr[i]= arr[j];
             arr[j]= x;
         
           }
        }
    }
     return arr;
}
var arr = [34,36,35,33];
result = bubble(arr);
console.log(arr);