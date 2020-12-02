import { convictionSelect } from "./convictions/convictionSelection.js";
import { criminalList } from "./criminals/criminalList.js";

// Sends filter options based off convictions(crimes) to the DOM
convictionSelect();

// Sends the full list of criminals to the DOM
criminalList()