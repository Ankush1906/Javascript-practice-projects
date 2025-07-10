
let heading = document.querySelector('h1');
let inp = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit",()=>{
    event.preventDefault();
    let username = inp.value;
      heading.innerText = username;
});