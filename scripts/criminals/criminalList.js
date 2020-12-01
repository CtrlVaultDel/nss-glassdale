import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminalHTMLer } from './criminal.js';

export const criminalList = () => {
    // Target the specified DOM element with a class of ".criminalsContainer"
    const contentElement = document.querySelector(".criminalsContainer");

    // Call the getCriminals function and attach another callback function to it that calls 
    // useCriminals in order to save the criminals array to a local variable. After that, use
    // reduce on the array along with criminalHTMLer to convert the entire array to a string that
    // will be added to the DOM.
    getCriminals().then(() => {
        // As soon as getCriminals has fully ran, continue with the following code
        let criminals = useCriminals();
        contentElement.innerHTML = criminals.reduce(
            (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),""
        )
    })
};

// Alternative way to do the same thing but just more compact. May not be as readable
// export const criminalList = () => getCriminals()
//     .then(criminals => criminals
//         .reduce(
//             (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),
//             ""
//         )
//     )