function binarysearch(arr,value){
    let start =0;
    let end = arr.length;
    let mid;
      while(start <= end){
        mid =(start + end )/2;
        if(arr[mid]==value){
            return arr[mid];
        }else if( value > arr[mid]){
            start= mid +1;
        }else{
            end = mid-1;
        }
        return "not found";//????????
 
    }
      
 
    
 var arr = [2,3,4,5,6,7,8,9],
     value = 7;
}     
    var result = binarysearch(arr,value);
    console.log( result);
    