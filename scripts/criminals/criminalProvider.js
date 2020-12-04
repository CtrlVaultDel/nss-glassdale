// Will be filled when getCriminals() is called and copied by useCriminals()
let criminals = [];

// Returns a copy of the criminals array
export const useCriminals = () => criminals.slice();

// Fetches criminal objects from the specified API, converts them to JSON and then copies the value to the local criminals array
// When you use fetch, it returns an promise object which can use the property value of .then
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => criminals = parsedCriminals);
};