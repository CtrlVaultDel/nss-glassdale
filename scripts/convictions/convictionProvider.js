// The convictionProvider component will fetch those crimes an export a useConvictions() method for other components to import.

let convictions = [];

export const useConvictions = () => convictions.slice();

// BUG FOR SOME REASON THIS WILL NOT PULL THE ENTIRE ARRAY.
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => convictions = parsedConvictions
        )
};