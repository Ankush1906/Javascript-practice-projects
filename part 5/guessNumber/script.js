const max = prompt("Enter the Max range value.");

let guess =prompt("guess your number");

let random = Math.floor(Math.random()*max) + 1;

while(true){

    if(guess == "quit"){
        console.log("you quit the game");
        break;
    }
    else if(guess == random ){
        console.log("whoooo! you guess the correct number i.e ",random);
        break;
    }else if(random > guess ){
        guess = prompt(" hint:  Number you enter is small,please try again");
    }else{
        guess = prompt("hint : Number you enter is large ,please try again");
    }
}