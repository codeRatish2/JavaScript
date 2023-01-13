function palindrome(str){
let len = str.length;
  for (var i=0; i < len/2; i++){
      if(str[i]!= str[len-i-1]){ 
         alert("it,s not palindrome");
      }
   }  
      alert("it,s palindrome");
}
let str = prompt(`enter a string or number`);
let result = palindrome(str);
console.log(result);