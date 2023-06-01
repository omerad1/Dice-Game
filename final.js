
setTimeout(function() {
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = x+" is the WINNER !";

  }
  else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = y +" is the WINNER !";
  }
  else{
        document.querySelector("h1").textContent = "Draw !" ;
  }

}, 1500);
setTimeout(function(){
    document.querySelector("h1").textContent = "Refresh me to play again :)";
    if(randomNumber1>randomNumber2){
    document.querySelector(".img1").setAttribute("src","./images/kilua.jpg");
    document.querySelector(".img2").setAttribute("src","./images/gon.jpeg");
  }
  else{
    document.querySelector(".img2").setAttribute("src","./images/kilua.jpg");
    document.querySelector(".img1").setAttribute("src","./images/gon.jpeg");

  }
},2200);
