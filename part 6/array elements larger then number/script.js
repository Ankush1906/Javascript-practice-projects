

function Largerelements(arr,num){
            
        let finalarr = [];
    for(let i = 0 ; i<arr.length ; i++){
                 
        if(arr[i]>num){
            finalarr.push(arr[i]);
        }
        }
                
        return finalarr.sort();
                  
}

let test = [1,6,2,5,3,4,9,7,8];
Largerelements(test,4);

