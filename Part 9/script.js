//Q1
let input = document.createElement("input");
document.querySelector('body').append(input);
input.placeholder = "username";

//Q2.
let btn = document.createElement('button');
btn.innerText="click me";
document.querySelector('body').append(btn);
btn.id = "btn";


//Q3.
document.querySelector('#btn').classList.add("btn");

//Q4.
let h1 = document.createElement('h1');
h1.innerText = "DOM practice";
let body = document.querySelector('body');
body.prepend(h1);
h1.classList.add('heading');

//Q5.

let para = document.createElement('p');

para.innerHTML = "Apna college <b>Delta</b> practice ";

body.append(para);