// Imports
import { getNotes, useNotes } from "./noteProvider.js";
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";
import { noteHTMLer } from "./note.js";

// Selectors
const eventHub = document.querySelector(".container");
const checkBox = document.querySelector(".noteFormContainer");
const noteLocation = document.querySelector(".notesContainer");

let notes = [];
let criminals = [];

const render = (noteCollection, criminalCollection) => {
    noteLocation.innerHTML = noteCollection.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        return `
            <section class="note">
                <div class="note__text"><b>Note: </b>${note.text}</div>
                <div class="note__author"><b>Author: </b>${note.author}</div>
                <div class="note__criminal"><b>Criminal: </b>${relatedCriminal.name}</div>
                <div class="note__date"><b>Date: </b>${new Date(note.timestamp).toLocaleDateString('en-US')}</div>
            </section>
        `
    })
}

// Displays the notes on the DOM (if the display notes box is checked)
export const noteList = () => {
    getNotes()
        .then(getCriminals()
        .then(() => {
            notes = useNotes();
            criminals = useCriminals();

            render(notes, criminals);
    }))
}

// Listen to see if the notes are updated and push them to the DOM when they are
eventHub.addEventListener("noteStateChanged", () => noteList());

// Listen for a "change" event in the checkbox
checkBox.addEventListener("change", event => {
    // Check that the event id is the checkbox
    if(event.target.id === "note--checkbox"){
        const notesContainer = document.querySelector(".notesContainer");
        // If the checkbox is checked, display the notes
        if (event.target.checked === true){
            notesContainer.style.display = "flex";
        }
        // If the checkbox is NOT checked, hide the notes
        else{
            notesContainer.style.display = "none";
        };
    };
});