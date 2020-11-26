let officers = []

export const useOfficers = () => officers.slice();

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        // Transform the data into JavaScript Object Notation
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}