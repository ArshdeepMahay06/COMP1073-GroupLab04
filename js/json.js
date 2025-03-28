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


