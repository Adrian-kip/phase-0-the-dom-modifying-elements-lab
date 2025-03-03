// Step 1: Remove the <main> element with id 'main'
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Step 2: Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement("h1");
newHeader.id = "victory"; // Set the id to 'victory'

// Set the text content to "Adrian Kiptoo is the champion"
newHeader.textContent = "Adrian Kiptoo is the champion";

// Append the newHeader to the body
document.body.append(newHeader);
