
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var paths = ["./images/dice3.png","./images/dice1.png","./images/dice2.png",
"./images/dice3.png","./images/dice4.png","./images/dice5.png",
"./images/dice6.png"]
document.querySelector("#p1").textContent = x;
document.querySelector("#p2").textContent = y;
document.querySelector(".img1").setAttribute("src",paths[randomNumber1]);
document.querySelector(".img2").setAttribute("src",paths[randomNumber2]);
