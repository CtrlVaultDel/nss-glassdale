// Selectors
const eventHub = document.querySelector(".container");
const topFilters = document.querySelector(".mainFilters");
const alibiListing = document.querySelector(".alibisContainer");
const criminalListing = document.querySelector(".criminalsContainer");
const witnessListing = document.querySelector(".witnessesContainer");
const seeWitnessesBtn = document.getElementById("seeWitnesses-btn");
const seeCriminalsBtn = document.getElementById("seeCriminals-btn");

eventHub.addEventListener("click", event => {
    console.log(event.target.id)
    if(event.target.id === "seeWitnesses-btn"){
        // Hide these elements
        topFilters.classList.add("hide");
        alibiListing.classList.add("hide");
        seeWitnessesBtn.classList.add("hide");
        criminalListing.classList.add("hide");

        // Show these elements
        seeCriminalsBtn.classList.remove("hide");
        witnessListing.classList.remove("hide");
    }
    else if (event.target.id === "seeCriminals-btn"){
        // Show these elements
        topFilters.classList.remove("hide");
        alibiListing.classList.remove("hide");
        seeWitnessesBtn.classList.remove("hide");
        criminalListing.classList.remove("hide");

        // Hide these elements
        seeCriminalsBtn.classList.add("hide");
        witnessListing.classList.add("hide");
    }
})