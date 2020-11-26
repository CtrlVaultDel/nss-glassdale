import { getCriminals, useCriminals } from './criminalProvider.js';
import { criminalHTMLer } from './criminal.js';

export const criminalList = () => {
    const contentElement = document.querySelector(".criminalsContainer");
    getCriminals().then(() => {
        let criminals = useCriminals();
        contentElement.innerHTML = criminals.reduce(
            (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),
            ""
        )
    })
}

// Alternative way to do the same thing but just more compact
// export const criminalList = () => getCriminals()
//     .then(criminals => criminals
//         .reduce(
//             (accumulator, currentValue) => accumulator + criminalHTMLer(currentValue),
//             ""
//         )
//     )