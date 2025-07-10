
function sum(n){

      finalSum = 0 ;
    for(let i = 1 ; i<=n ; i++){
         
        finalSum += i;
    }
    return finalSum;
}

console.log(sum(5));


//----------------------

let str = ["hi","hello","bye","!"];

function concat(str){

    let result = "";
    for(let i = 0 ; i<str.length ; i++){
          
        result += str[i];
    }

    return result;
}

console.log(concat(str));
