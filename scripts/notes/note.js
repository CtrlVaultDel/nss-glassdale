// Selector
const noteLocation = document.querySelector(".notesContainer");

export const renderNotes = (noteCollection, criminalCollection) => {
    noteLocation.innerHTML = noteCollection.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        return `
            <section class="note">
                <div class="note__text"><b>Note: </b>${note.text}</div>
                <div class="note__author"><b>Author: </b>${note.author}</div>
                <div class="note__criminal"><b>Criminal: </b>${relatedCriminal.name}</div>
                <div class="note__date"><b>Date: </b>${new Date(note.timestamp).toLocaleDateString('en-US')}</div>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
    }).join("");
};