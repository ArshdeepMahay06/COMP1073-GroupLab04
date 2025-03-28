/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
 // Introducing JavaScript Object Notation (JSON): https://json.org/
  // STEP 4: Store the URL of a JSON file in a variable */
  const requestURL =
    "https://raw.githubusercontent.com/ArshdeepMahay06/COMP1073-GroupLab04/main/js/i-scream.json";
  // STEP 5: Use the new URL to create a new request object
  const request = new Request(requestURL);
  console.log(request);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object

    const response = await fetch(request);

  // STEP 7: Capture the returned Response object and covert to a JSON object using json()
  const iScream = await response.json();
    // STEP 8: Output the iScream JSON object to the console
    console.log(iScream);
  // STEP 9a: Invoke the populateHeader function here, then build it below
  populateHeader(iScream);

// STEP 10a: Invoke the showTopFlavors function here, then build it below
showTopFlavors(iScream);
}
populate();
// STEP 3b: Call the populate() function
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
  // Create the H1 element
  const headreH1 = document.createElement("h1");
  // Grab the company name from the JSON object and use it for the text node
  headreH1.textContent = jsonObj.companyName;
  // Inject the complete H1 element into the DOM, inside the HEADER
  header.appendChild(headreH1);
}
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    




