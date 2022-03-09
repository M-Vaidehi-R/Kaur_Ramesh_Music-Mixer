(() => {

console.log ("music mixer :)")

//declaring variables

let audioEl = document.querySelector("audio");
const instruments= document.querySelectorAll(".instruments"),
dropZones= document.querySelectorAll(".drop-zone");



function loadTrack() {
    let currentTrack = `Music/${this.dataset.trackref}.mp3`;
    
    console.log("Playing", this.dataset.trackref);

    audioEl.src = currentTrack;
    playTrack();
}

function playTrack(){
    audioEl.play();
 }




//calling functions

instruments.forEach(thumb => thumb.addEventListener("click", loadTrack));
instruments.forEach(piece => piece.addEventListener("dragstart", dragStarted));

dropZones.forEach (zone => {
    zone.addEventListener("dragover", DragoverFunc);
    zone.addEventListener("drop", DropFunc);
})


})()

