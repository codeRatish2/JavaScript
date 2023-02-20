const number = parseInt("please enter number");
let n1 = 0;
let n2 = 1;
let nextterm;

for(i=0;i<=number;i++){
    console.log(n1);
    
    nextterm = n1+n2;
    n1 = n2;
    n2 = nextterm;


}
