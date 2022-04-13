(() => {

console.log ("music mixer :)")

//declaring variables

let audioEl = document.querySelector("audio");
const instruments= document.querySelectorAll(".instruments"),
dropZones= document.querySelectorAll(".drop-zone"),
Play=document.querySelector("#play-button"),
Pause=document.querySelector("#pause-button"),
VolumeUp = document.querySelector("#volumeUp"),
VolumeDown = document.querySelector("#volumeDown");


function loadTrack(event) {
    let droppedInstrmntId = event.dataTransfer.getData("text/plain");
    let droppedInstrmnt = document.getElementById(droppedInstrmntId);

    let trackref=droppedInstrmnt.dataset.trackref;
    //let currentTrack = `Music/${trackref}.mp3`;
    let Audio = document.querySelector(`audio[data-trackref="${trackref}"]`);

    Audio.classList.add("playing");
    console.log(Audio.classList, Audio);
    console.log("Playing", trackref);

    //audioEl.src = currentTrack;
    //audioEl.currentTime=0;
    //audioEl.load();
    //audioEl.play();
    Audio.currentTime=0;
    Audio.play();
    Audio.volume= 0.5;

   
}
function restartAudio(){
    currentTrack = document.querySelectorAll(".playing");
    console.log("restarting");
    currentTrack.forEach(track => track.currentTime =0);
} 

 function dragStarted(event) {
    console.log("Dragged", this.alt);

    /*	// use the setData method of the drag event to store a reference to the current element
event.dataTransfer.setData("currentItem", event.target.id);*/
   // event.dataTransfer.setData("currentItem", event.target.id);
   event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.dropEffect = "move";

}


function DragoverFunc(event) {
    event.preventDefault();
    console.log("element dragged over me" );
    event.dataTransfer.dropEffect = "move";
}


function DropFunc(event) {
    event.preventDefault();
  

    if(this.childElementCount > 0) {
        return;
    }


    //let droppedInstrmnt = event.dataTransfer.getData("currentItem");
    let droppedInstrmntId = event.dataTransfer.getData("text/plain");
    let droppedInstrmnt = document.getElementById(droppedInstrmntId);
    console.log ("dropped");
    this.appendChild(droppedInstrmnt);
    //let target= droppedInstrmnt.dataset.trackref;
    //loadTrack(target);

//debugger;

} 

function playTrack(){
    let PlayAudio = document.querySelectorAll(".playing");
    console.log("playing Track");
    PlayAudio.forEach(PA => PA.play());
    }

function pauseTrack(){
   
    let pauseAudio = document.querySelectorAll(".playing");
    console.log("pausing Track", pauseAudio.length);
    pauseAudio.forEach(track => track.pause());
 }

 function volumeDown() {
    let vDn = document.querySelectorAll(".playing");
    vDn.forEach(VDW => VDW.volume=.25);
 }

 function volumeUp() {
     let vUp = document.querySelectorAll(".playing");
     vUp.forEach(VUP => VUP.volume=0.75);
 }

//calling functions


instruments.forEach(piece => piece.addEventListener("dragstart", dragStarted));
instruments.forEach(thumb => thumb.addEventListener("click", loadTrack));


dropZones.forEach(zone => {
    zone.addEventListener("dragover", DragoverFunc);
    zone.addEventListener("drop", DropFunc);
    zone.addEventListener("drop", restartAudio);
})
Play.addEventListener("click", playTrack);
Pause.addEventListener("click",pauseTrack );
window.addEventListener("drop", loadTrack );
VolumeUp.addEventListener("click", volumeUp);
VolumeDown.addEventListener("click", volumeDown);

})();

