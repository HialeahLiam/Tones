
let currentNoteHovered;
let noteOutput;
console.log("app running")
function initializeEventHandlers() {
    const staffMembers = document.getElementsByClassName('staff-member');
    for (let member of staffMembers) {
        member.onmouseover = handleStaffMemberHover;
    }
}

function init() {
    // let element = document.getElementById('F');
    // element.onpointerover = eventHandler(e);
    noteOutput = document.querySelector('.hovered-note');
    initializeEventHandlers();
}



function handleStaffMemberHover(e) {
    currentNoteHovered = e.target.id;
    noteOutput.textContent = e.target.id;
    playNote(e.target.id);
}

//plays audio sample when a note is hovered. The id of the .staff-member
//div must match the name of the audio file.
function playNote(note) {
    let audio = document.getElementById(`${note}audio`);
    audio.load();
    audio.play();
    
}