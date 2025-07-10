// let square = (n)=>{
    
//     return n*n ; 
// }


//   let id =  setInterval(()=>{

//         console.log("Hello world");
//     },2000);

//    let id2 =  setTimeout(()=>{
          
//     clearInterval(id);

//    },10000)

//----------------------------------------------------

let arrayAverage = (arr)=>{
       
    let total = 0 ;
    for(let i = 0 ; i< arr.length ; i++){
              
        total += arr[i];

    }

    return avg/(arr.length-1);
}