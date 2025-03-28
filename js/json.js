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
  // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;
      // STEP 10d: Loop through the topFlavors object
  for (let i = 0; i < topFlavors.length; i++) {
        // STEP 10e: build HTML elements for the content
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let ul = document.createElement("ul");
        let calorieCount = document.createElement("p");

    // add the rating
    // add the season

    let ratingSeasonHtml = `<p><strong>Rating : </strong> ${jsonObj.topFlavors[i].rating}</p>
    <p><strong>Season : </strong> ${jsonObj.topFlavors[i].season}</p>
    <p><strong>Populate : </strong> ${jsonObj.topFlavors[i].populate}</p>

`;

let typeElement = document.createElement("p");
typeElement.innerHTML = <h3>Type : ${jsonObj.topFlavors[i].type}</h3>;

 // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
 h2.textContent = topFlavors[i]["name"];
 image.setAttribute("src", "images/" + topFlavors[i].image);

 calorieCount.textContent = "Calories count: " + topFlavors[i].calories;

// STEP 10g: Build a loop for the ingredients array in the JSON
 let ingredients = topFlavors[i]["ingredients"];
 for (let j = 0; j < ingredients.length; j++) {
   // add the ingredient to the UL
   let listItem = document.createElement("li");
   listItem.textContent = ingredients[j];
   ul.appendChild(listItem);
 }


    

    




