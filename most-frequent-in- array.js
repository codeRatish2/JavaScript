var arr = [ 4,2,3,2,3,4,5,2,2,4,3];
var mf = 1;
var m =0;
var mostfrequent;

  for(var i = 0; i < arr.length; i++){
    for(var j = i; j <arr.length;j++){
        if(arr[i] == arr[j])
            m++;
        if(mf < m){
            mf = m;
            mostfrequent = arr[i];
        }
    }
     m=0;

  } 
 console.log(mostfrequent +"(" + mf + "times)");