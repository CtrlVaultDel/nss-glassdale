// Imports
import { witnessHTMLer } from "./witness.js";
import { getWitnesses, useWitnesses } from './witnessProvider.js';

// Selectors
const contentElement = document.querySelector(".witnessesContainer");

// Will be filled after calling the criminalList() function
let witnesses = [];

// To be used to initialize the witnesses on the DOM (Will be hidden initially)
export const witnessList = () => {
    getWitnesses().then(() => {
        witnesses = useWitnesses();
        contentElement.innerHTML = witnesses.reduce(
            (accumulator, currentValue) => accumulator + witnessHTMLer(currentValue),""
        )
    });
};