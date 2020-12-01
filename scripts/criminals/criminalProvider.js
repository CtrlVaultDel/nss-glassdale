let criminals = [];

// Returns a copy of the criminals array
export const useCriminals = () => criminals.slice();

// Fetches criminal objects from the specified API, converts them to JSON and then copies the value to the local criminals array
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => criminals = parsedCriminals)
};