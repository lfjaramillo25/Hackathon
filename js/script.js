
/*Like by Heart */
var heart = document.getElementsByClassName('heart-like');
var likeHeart = [];
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


