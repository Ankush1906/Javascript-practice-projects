let url = "https://official-joke-api.appspot.com/random_joke";
let btn = document.querySelector('.btn');
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector(".btn2");

btn.addEventListener("click",async()=>{
    let joke = await getJoke();
    let setup = joke.setup;
    let punchline = joke.punchline; 
    let p = document.querySelector("#result");
    p.innerHTML = `${setup} <br> ${punchline}`;
})

async function getJoke(){
    try{
    let res = await axios.get(url);
    return res.data ;
    }catch(e){
    console.log("error - ",e);
    }
}

let img = document.querySelector("#img");

  btn2.addEventListener("click",async ()=>{

     let link =  await getImages();
      img.setAttribute("src",link);
  })

 
async function getImages(){

    try{
        let image = await axios.get(url2);
            return image.data.message ;
    }catch(e){
    console.log("No image found ");
    }
}
