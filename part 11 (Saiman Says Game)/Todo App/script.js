let inp = document.querySelector("input");

let ul = document.querySelector("ul");
let li = document.querySelector("li");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{

    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.append(item);
    inp.value = "";

    let delBtn = document.createElement('button');
    delBtn.classList.add("delete");
    delBtn.innerText = "delete";
    item.appendChild(delBtn);
})

 ul.addEventListener("click", function(event){
   
    if(event.target.nodeName == "BUTTON"){   
      event.target.parentElement.remove();
    }
  
});