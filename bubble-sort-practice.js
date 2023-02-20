let arr = [8,1,3,7,2,4,9,6,5];
  for(i=0;arr[i]!=undefined; i++){
      for(j=0; j<i;j++){
          if(arr[i]<arr[j]){
              var x = arr[i]
              arr[i]=arr[j]
              arr[j]= x;
          }
      }
  }
 console.log(arr);