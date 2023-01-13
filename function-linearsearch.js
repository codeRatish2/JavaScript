function linearsearch(arr,key){
    for(var i=0; arr[i]!= undefined;i++){
       if(arr[i]==key){
         return 1;
     }else{
        return -1;
    } 
  }
 } 
 var arr =[10,30,40,50,60,70,],
 key = 50;

 var result = linearsearch(arr,key);
 console.log(result);