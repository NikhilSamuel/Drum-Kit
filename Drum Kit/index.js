var no_of_drums = document.querySelectorAll(".drum").length ;

for(var i = 0; i < no_of_drums; i++){

  //Tracking click events

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonValue = this.innerHTML ;
    makeSound(buttonValue);
    buttonAnimation(buttonValue);

  })
}

//Tracking KeyPress Events

document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

})

function makeSound(key) { //function to make sound based on events

  switch (key) {
    case "w":
      var audioo = new Audio("sounds/tom-1.mp3");
      audioo.play();
      break;

    case "a":
      var audioo = new Audio("sounds/tom-2.mp3");
      audioo.play();
      break;

    case "s":
      var audioo = new Audio("sounds/tom-3.mp3");
      audioo.play();
      break;

    case "d":
      var audioo = new Audio("sounds/tom-4.mp3");
      audioo.play();
      break;

    case "j":
      var audioo = new Audio("sounds/crash.mp3");
      audioo.play();
      break;

    case "k":
      var audioo = new Audio("sounds/kick-bass.mp3");
      audioo.play();
      break;

    case "l":
      var audioo = new Audio("sounds/snare.mp3");
      audioo.play();
      break;

    default:
    alert("Press the right key")

  }
}

function buttonAnimation(currentKey) { //function to show animations based on events

  var activeButton = document.querySelector("." + currentKey) ;
  activeButton.classList.add("pressed");

  setTimeout(function() { //setting a time interval for the button animations
    activeButton.classList.remove("pressed");
  }, 100)
}
