
//Q1.Try out the  following events in EventListener on yourown:-
// mouseout-keypress-Scroll-load
let heading = document.querySelector("h1");
heading.addEventListener("mouseout",function(){
    heading.style.backgroundColor = "yellow"
})
let inp = document.querySelector("input");
inp.addEventListener('keypress',()=>{
     console.log("key is presssed")});
document.addEventListener('scroll',()=>{
    console.log("scroll hogya kya");
});

// window.addEventListener('load',()=>{
//     alert("page load hogya");
// })

//Qs2.Create a button on the page using JavaScript.Add an eventlistener to the button that changes the button’s color to green when it is clicked.

 let btn = document.createElement("button");
 btn.innerText = "click me";
 let body = document.querySelector("body");
 body.append(btn);
 btn.addEventListener('click',()=>{       
 btn.style.backgroundColor = "green";
});