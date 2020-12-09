// Will be filled when getCriminals() is called and copied by useCriminals()
let witnesses = [];

// Returns a copy of the criminals array
export const useWitnesses = () => witnesses.slice();

// Fetches criminal objects from the specified API, converts them to JSON and then copies the value to the local criminals array
// When you use fetch, it returns an promise object which can use the property value of .then
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedWitnesses => witnesses = parsedWitnesses);
};