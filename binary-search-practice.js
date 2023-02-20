let arr = [10,20,30,40,50,60,70.80]
let value = 60;
  let start =0;
  let end = arr.length;
  let mid;
  
  while(start < end){
      mid = (start + end)/2;
      if(arr[mid]==value){
          return 1;
          
      }else if(value > arr[mid]){
          start = mid +1;
      }else {
          end = mid -1;
      }
      return -1;
  }