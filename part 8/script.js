// every method------------------------
// let arr = [10,20,9,40];

// let ans = arr.every((el)=>{

// return el%10 == 0;

// });

// //reduce method

// let arr1 = [10,20,5,40];

// let minAns = arr1.reduce((min,el)=>{

//     if(min<el){
//         return min ;
//     }else {
//          return el ; 
//     }
// });

// console.log(minAns);



//QQs1.Square and sum the array elements using the arrow function and then find the average of the array. 

// let arr = [1,2,3,4,5];

// let Square = arr.map((el)=>{
//    return el*el ;
// });

// let sum = arr.reduce((acc,el)=>{

//     return acc+= el ;
// });


// let avg = sum/arr.length;


//Q2. Create a new array using the map function whose each element is equal to the element + 5;

// let arr = [1,2,3,4,5];

// let newArr = arr.map((el)=>{
//     return el+5;
// });

 
//Q3.Create a new array whose elements are in upper case of words present in the original array.
 
// let lowercase = ["ankush","sonu,saiman"];

// let uppercase = lowercase.map((el)=>{

//      return el.toUpperCase();
// });

//Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled

const double= (arr,...Args)=>{
    
     return [...arr,...Args];
}

//Qs5.Write a function called mergeObjects that accepts     two objects and returns a new object which contains all the keys and values of the first object and second object.


let obj1 = {
  
 a : "ankush",
 b : "balaghat"    
};

let obj2 = {

     c : "saiman" ,
     d : "new"
}

let mergeObjects = (a , b)=>{
     return {...a,...b};
}
