let convictions = [];

// Returns a copy of the convictions array
export const useConvictions = () => convictions.slice();

// Returns an array of all crimes from the glassdale API
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedConvictions => convictions = parsedConvictions);
};