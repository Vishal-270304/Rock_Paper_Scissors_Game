let user = document.getElementById("change-image");
let computer = document.getElementById("changing-image");
const rock = "Images/image2.png";
const paper = "Images/image1.png";
const scissors = "Images/image3.png";
const imageArray = [rock,paper,scissors]; 
let random;
let index;
let header = document.getElementById("heading");
let buttons = document.querySelectorAll("button");
// let sound = document.getElementById("sound-img");

function image2Generation(){
     random = Math.floor(Math.random()*3);       
    }

for(i=0;i<buttons.length;i++){
buttons[i].addEventListener("click",(event)=>{

    image2Generation();

     index = event.target.className;
    user.setAttribute("src", imageArray[index]);
    computer.setAttribute("src",imageArray[random]);
    checkWinner();
});
}


function checkWinner(){

if(index == random){
    header.innerHTML = "It's a Draw";
    drawSound();
}

else if(index == 0 && random ==2 || index ==1 && random ==0 || index ==2 && random ==1){
    header.innerHTML = "You Win";
    winSound();
}

else{
    header.innerHTML = "You Lose";
    loseSound();
}

}


function drawSound(){
    let draw = new Audio("Sounds/Draw.wav");
    draw.play();
}

function winSound(){
    let win = new Audio("Sounds/Win.wav");
    win.play();
}

function loseSound(){
    let lose = new Audio("Sounds/wrong.mp3");
    lose.play();
}

// function removeSound(){

//     sound.addEventListener("click",(event)=>{
// console.log("I got clicked");
//         e.remove.drawSound();
//         e.remove.winSound();
//         e.remove.loseSound();

//     })

// }



// Cases Of your Win

// index = 0 and random = 2
// index = 1 and random = 0
// index = 2 and random = 1