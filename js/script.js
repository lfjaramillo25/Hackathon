/*Like by Heart function*/
let heart = document.getElementsByClassName('heart-like');
let likeHeart = [];
function likeHeard(n) {
  if(likeHeart[n] == false || likeHeart[n] == undefined) {
    heart[n].className = "fas fa-heart red-head heart-like";
    likeHeart[n] = true;
    console.log("Muy bien ahora te gusta");
  } else if(likeHeart[n] == true) { 
    /*Unlike by Heart */  
    likeHeart[n] = false;
    heart[n].className = "far fa-heart red-head heart-like";
    console.log("Ya no te gusta?... tranquilo lo guardaremos por si cambias de opinion =D");
  }
}

/*Menu Fuction*/
let menuShow = document.getElementById("menu-shop");
let stateMenu = false;
/*Show the meny */
function menu() {
  if(stateMenu == false){
    console.log("Abracadabra! xD");
    menuShow.style.display = "block";
    stateMenu = true;
  } else {
    console.log("Me voy D:");
    menuShow.style.display = "none";
    stateMenu = false;
  }
}
/*select the options */
let options = document.getElementsByClassName("options");
let selectOption = document.getElementById('select-option');
console.log(options);
function SlOption(n) {
  switch(n){
    case n = 0:
      console.log("");
      selectOption.innerText = "Mejor puntaje";
    break;
    case n = 1:
      console.log("caso dos");
      selectOption.innerText = "Lo más comprado";
    break;
    case n = 2:
      console.log("caso 3");
      selectOption.innerText = "Tus favoritos";
    break;
  }
  options[n].className = "current options";
  for(let i = 0; i < options.length; i++){
    if( i !== n){
      options[i].className = "options";
    }
  }
  
}

