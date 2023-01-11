let str = "abcba";
let len = str.length;
let palindrome = false;

for(let i = 0; str[i] != undefined;i++){
    for( let j =len; j > i;j-- ){
        if(str[i]==str[j]){ 
          palindrome = true;
        } 
    }
}
console.log(palindrome);