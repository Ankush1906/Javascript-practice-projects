
function saveToDb(data){
    return new Promise((resolve,reject)=>{

        let internetSpeeed = Math.floor(Math.random()*10)+1;
        if(internetSpeeed>4){
            resolve("sucess : data was saved");
        }else{
            reject("failure : weak connection");
        }
    })
}

saveToDb("hello world").then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return saveToDb("helloworld2");
}).then((result)=>{
     console.log("data2 saved");
     console.log(result);
     return saveToDb("ankush");
}).then((result)=>{
    console.log("data3 saved");
}).catch((error)=>{
    console.log(error);
    console.log("promise rejected");
})