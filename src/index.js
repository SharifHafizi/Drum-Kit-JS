document.addEventListener("keydown", (e) => {
  //console.log(e.keyCode); give us the code number of every key .
  let audio = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);
  if (!audio) return alert("hohooo! Wrong button");
  audio.play();
  audio.currentTime = 0; // to play sound without waiting for ending all time of sound .
  let keyPress = document.querySelector(`.drum[data-keyCode = "${e.keyCode}"]`);
  keyPress.classList.add("pressed");
  setTimeout(() => {
    keyPress.classList.remove("pressed");
  }, 200);
});

// This code which i commented is easy to understand but repetitive.

//document.addEventListener("click", (e) => {
//   let sound = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);
//   console.log(sound);
// });

// let btnAll = document.getElementsByClassName("drum");
// for (let i = 0; i < btnAll.length; i++) {
//   btnAll[i].addEventListener("click", myPlay);
// }
// let btnA = document.querySelector(".a").addEventListener("click", myPlay);
// function myPlay() {
//   btnA = new Audio("./sounds/clap.wav");
//   btnA.play();
// }
// let btnS = document.querySelector(".s").addEventListener("click", myPlay2);
// function myPlay2() {
//   btnS = new Audio("./sounds/hihat.wav");
//   btnS.play();
// }
// let btnD = document.querySelector(".d").addEventListener("click", myPlay3);
// function myPlay3() {
//   btnD = new Audio("./sounds/kick.wav");
//   btnD.play();
// }
// let btnF = document.querySelector(".f").addEventListener("click", myPlay4);
// function myPlay4() {
//   btnF = new Audio("./sounds/openhat.wav");
//   btnF.play();
// }
// it works fine,here i did in this method but its to much line of code, and i want to add Click on all but want to play diffrent sounds.
// i tried that way but get same sound from each button.

// I like the above code because its easy to understand :)
// but as you say its repetitive

// What you have below is very good attempt

// this is a very good idea, to store the sounds with an Audio element in an array:
let sounds = [
  new Audio("./sounds/clap.wav"),
  new Audio("./sounds/hihat.wav"),
  new Audio("./sounds/kick.wav"),
  new Audio("./sounds/openhat.wav"),
  new Audio("./sounds/ride.wav"),
  new Audio("./sounds/snare.wav"),
  new Audio("./sounds/tink.wav"),
  new Audio("./sounds/tom.wav"),
];

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let el = document.querySelector(".set");

// I see, so you have <div class="set"> that contains all the buttons
// And you select it with: let el = document.querySelector(".set");

// Then you correctly add an event listener to <div class="set">

el.addEventListener("click", function (e) {
  // Then you made an interesting attempt at looping through the sounds array
  // to then conditionally select the correct sound to play
  // i have commented out your code in the for loop, with a few comments
  // and i have made an alternative solution below lines 90
  for (let i = 0; i <= sounds.length; i++) {
    // in here you made a good attempt at trying to conditionally
    // play the correct sound
    // console.log(btn1) // this always shows: <BUTTON id="1" data-keycode="65" class="a drum">a</BUTTON>
    // console.log(btn2) // this always shows: <BUTTON id="2" data-keycode="83" class="s drum">s</BUTTON>
    // so the below if statements are always true
    // if (btn1) return sounds[0].play();
    // else if (btn2) return sounds[1].play();
  }
});

// here i'll try to redo what you did, but a littlebit differently
// I added id's to all other buttons the same way you did, id="1", id="2", id="3" and so on.

// i give the function (e) parameter a more descriptive name (event)
el.addEventListener("click", function (event) {
  // we can figure out what was clicked by console.logging event.target
  // https://www.w3schools.com/jsref/event_target.asp
  console.log(event.target);
  // each of our buttons has an id, we can get the id by writing: event.target.id
  // console.log(event.target.id)

  // so buttons have id numbers, and we have an array called sounds
  // since arrays can be access by their index number we can combine the two, like this:

  sounds[event.target.id - 1].play();
  // this works for the first 3 buttons, because the sounds array only contains the first 3 sounds
  // why did i write event.target.id - 1 ?
  // - because arrays are zero-index, this means they start from 0
  //   but the buttons start from id 1, hence i substract 1 from the id to get correct index in the array
});
