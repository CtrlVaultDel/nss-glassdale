// Imports
import { alibiHTMLer } from "./alibi.js";

// Selectors
const eventHub = document.querySelector("container");
const alibiElement = document.querySelector("alibisContainer");

// ------- LISTEN FOR ALIBI BUTTON (START) -------
eventHub.addEventListener("alibisSelected", event =>{
    const criminalChosen = event.detail.criminalName;
    const alibiList = event.detail.theAlibisChosen;
    alibiElement = alibiHTMLer(criminalChosen, alibiList);
});
// -------- LISTEN FOR ALIBI BUTTON (END) --------