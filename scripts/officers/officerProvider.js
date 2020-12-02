let officers = []

// Returns a copy of the officers array
export const useOfficers = () => officers.slice();

// Fetches officer objects from the specified API, converts them to JSON and then copies the value to the local officers array
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        // In order for us to handle a fetch not happening instantaneously, we use .then to say "as soon as we have the data...then do this"
        // .then is an asynchronous action that gives us time to wait for one action while doing other actions after the specified code.
        // .then takes a function as its argument
        // This section transforms the JSON response (data) into JavaScript data object
        .then(response => response.json())

        // We then take the JS data and copy it into our local officers array.
        .then(parsedOfficers => officers = parsedOfficers);
};

// -----Basic methodology when fetching from an API-----
// Request
// Wait (.then)
// Transform
// Wait (.then)
// Utilize