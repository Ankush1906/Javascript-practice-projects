function LongestCountry(arr){
   
  let count = 0 ;
  let idx ;
  for(let i = 0 ; i<arr.length ; i++ ){
           
         if(arr[i].length > count){
            
             count = arr[i].length ;
             idx = i ;
         }
      
  }

  return arr[idx];
}
let country=["Australia","Germany","UnitedStatesofAmerica"];

LongestCountry(country);
