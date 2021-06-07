let left = document.getElementById("left")
let right = document.getElementById("right")
let dist = 0;
let slider = document.getElementsByClassName("slider")[0];
let commentLeft = document.getElementById("commentLeft");
let commentRight = document.getElementById("commentRight");
let pairs = document.getElementsByClassName("pair");
let callButton = document.getElementById("callButton");
let modal= document.getElementsByClassName("modal")[0];
right.onclick =function(){
  console.log(dist);
  dist = dist + 100;
  dist = dist % (slider.children.length * 100)
  slider.style.transform = "translateX(-" + dist + "%)";
}
left.onclick = function () {
  dist = dist - 100;
  if (dist < 0) {
    dist = (slider.children.length - 1) * 100;
  }
  slider.style.transform = "translateX(-" + dist + "%)";
}
commentRight.onclick = function () {
  let activePair = document.getElementsByClassName("activePair")[0];
  let nextPair;
  if (activePair.nextElementSibling.classList[0] == "pair") {
    nextPair = activePair.nextElementSibling;
  }
  else {
    nextPair = pairs[0];
  }
  activePair.classList.remove("activePair");
  setTimeout(function () {
    nextPair.classList.add("activePair");
  }, 400);
}
commentLeft.onclick = function () {
  let activePair = document.getElementsByClassName("activePair")[0];
  let prevPair;
  if (activePair.previousElementSibling) {
    prevPair = activePair.previousElementSibling;
  }
  else {
    prevPair = pairs[pairs.length - 1];
  }
  activePair.classList.remove("activePair");
  setTimeout(function () {
    prevPair.classList.add("activePair")
  }, 400);
}
callButton.onclick = function() {
 modal.style.transform="translateY(0) scale(1)";
}
modal.onclick=function() {
 modal.style.transform="translateY(100%) scale(0)";
}
modal.children[0].onclick = function(event){
 event.stopPropagation();
}