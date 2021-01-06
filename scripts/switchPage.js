// Selectors
const eventHub = document.querySelector(".container");
const topFilters = document.querySelector(".mainFilters");
const alibiListing = document.querySelector(".alibisContainer");
const criminalListing = document.querySelector(".criminalsContainer");
const witnessListing = document.querySelector(".witnessesContainer");
const facilityListing = document.querySelector(".facilityContainer");
const seeWitnessesBtn = document.getElementById("seeWitnesses-btn");
const seeCriminalsBtn = document.getElementById("seeCriminals-btn");
const seeFacilitiesBtn = document.getElementById("seeFacilities-btn");

// This is responsible for switching between states:
// 1) Witnesses & Notes
// 2) Criminals & Notes
eventHub.addEventListener("click", event => {

    // See Witnesses Page
    if(event.target.id === "seeWitnesses-btn"){
        // Show these elements
        seeCriminalsBtn.classList.remove("hide");
        seeFacilitiesBtn.classList.remove("hide");
        witnessListing.classList.remove("hide");
        
        // Hide these elements
        seeWitnessesBtn.classList.add("hide");
        topFilters.classList.add("hide");
        alibiListing.classList.add("hide");
        criminalListing.classList.add("hide");
        facilityListing.classList.add("hide");
    }

    // See Criminals Page (Default)
    else if (event.target.id === "seeCriminals-btn"){
        // Show these elements
        topFilters.classList.remove("hide");
        alibiListing.classList.remove("hide");
        seeWitnessesBtn.classList.remove("hide");
        criminalListing.classList.remove("hide");
        seeFacilitiesBtn.classList.remove("hide");

        // Hide these elements
        seeCriminalsBtn.classList.add("hide");
        witnessListing.classList.add("hide");
        facilityListing.classList.add("hide");
    }

    // See Facilities Page
    else if (event.target.id === "seeFacilities-btn"){
        // Show these elements
        seeCriminalsBtn.classList.remove("hide");
        seeWitnessesBtn.classList.remove("hide");
        facilityListing.classList.remove("hide");

        // Hide these elements
        topFilters.classList.add("hide");
        alibiListing.classList.add("hide");
        seeFacilitiesBtn.classList.add("hide");
        witnessListing.classList.add("hide");
        criminalListing.classList.add("hide");
    }
});