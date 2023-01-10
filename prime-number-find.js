var num = 11;
var  IsPrimeNumber = true;

for(var i = 2; i <num; i++){
    if(num % i ==0){
        IsPrimeNumber = false;
    }    
  }
    if (IsPrimeNumber == true){
        console.log(`${num } This is prime number`);
    }else {
        console.log(`${num } This is not prime number`);
    }
