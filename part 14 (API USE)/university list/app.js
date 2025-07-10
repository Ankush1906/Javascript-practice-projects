let url = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
      let state = document.querySelector("#input").value;
      console.log(state);
      let colleges = await getCollege();
      let stateColg =  colleges.filter((college)=>{
         return college["state-province"]?.toLowerCase() == state.toLowerCase();
      });
      console.log(stateColg);
      show(stateColg);
})

function show(stateColg){
     list.innerText = " ";
    for(colgs of stateColg){
      let list = document.querySelector("#list");
      let li = document.createElement("li");
      li.innerText = colgs.name ;
      list.appendChild(li);
    }
}


async function getCollege(){
try{
    let res =  await axios.get(url);
return res.data;
}catch(e){

    console.log("NO DATA FOUND")
}
}