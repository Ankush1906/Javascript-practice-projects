
let IsOk = confirm("press ok to roll the dice");

while(IsOk){
       let random = Math.floor(Math.random()*6) + 1;
        console.log(random);
        IsOk = confirm("press Ok to roll again and cancel to STOP");
}