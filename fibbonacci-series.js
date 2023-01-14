function fibbonacci(num){ 
    var n1 =0;
    var n2 =1;
    var nextterm;

  for(i=0; i <= num; i++){
    console.log(n1);
    nextterm = n1 + n2 ;
     n1= n2;
     n2 = nextterm;

  }
  return (n1);
}
var num = prompt(`enter the number`);
var result = fibbonacci(num);

