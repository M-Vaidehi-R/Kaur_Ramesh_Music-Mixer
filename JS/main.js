(() => {

console.log ("music mixer :)")

//declaring variables

let audioEl = document.querySelector("audio");
const instruments= document.querySelectorAll(".instruments"),
dropZones= document.querySelectorAll(".drop-zone"),
Play=document.querySelector("#play-button"),
Pause=document.querySelector("#pause-button");


function loadTrack(trackref) {
    let currentTrack = `Music/${trackref}.mp3`;
    
    console.log("Playing", trackref);

    audioEl.src = currentTrack;
    audioEl.load();
    audioEl.play();
   
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
    let target= droppedInstrmnt.dataset.trackref;
    loadTrack(target);

//debugger;

} 

function playTrack(){audioEl.play(); }
function pauseTrack(){audioEl.pause(); }


//calling functions


instruments.forEach(piece => piece.addEventListener("dragstart", dragStarted));
instruments.forEach(thumb => thumb.addEventListener("click", loadTrack));


dropZones.forEach(zone => {
    zone.addEventListener("dragover", DragoverFunc);
    zone.addEventListener("drop", DropFunc);
})
Play.addEventListener("click", playTrack);
Pause.addEventListener("click",pauseTrack );


})();

