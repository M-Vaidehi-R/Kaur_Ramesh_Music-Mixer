(() => {

console.log ("music mixer :)")

//declaring variables

let instruments= document.querySelectorAll(".instruments"),
dropZones= document.querySelectorAll(".drop-zone");


//declaring functions  -no complete draggable option applied, just the consoles :)
function dragStarted() {
    console.log("Dragged ", this.alt);
}

function DragoverFunc() {
    console.log("element dragged over me :(" );
}

function DropFunc() {
    console.log ("an instrument is dropped in the circle");
}


//calling functions

instruments.forEach(piece => piece.addEventListener("dragstart", dragStarted));

dropZones.forEach (zone => {
    zone.addEventListener("dragover", DragoverFunc);
    zone.addEventListener("drop", DropFunc);
})


})()

