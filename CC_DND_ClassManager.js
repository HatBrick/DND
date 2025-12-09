//On Page Load
const charClassSelect = document.getElementById("ClassSelect");
const charLevelSelect = document.getElementById("LevelSelect");
const classDesc = document.getElementById("ClassDescription");
SetSelects();

fetch('test.txt') // Replace with the actual path to your text file
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response body as plain text
    return response.text(); 
  })
  .then(textData => {
    // textData now contains the content of your text file as a string
    console.log(textData); 
    // You can then manipulate or display this text data as needed
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching the text file:', error);
  });

//Set Selects
function SetSelects() {
  //Set Class Selects
  var classOptions = ["--Select Your Class--", "Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
  for (let i=0; i < classOptions.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", classOptions[i]);
    option.text = classOptions[i];
    charClassSelect.appendChild(option);
  }
  //Set Level Selects
  var levelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  for (let i=0; i < levelOptions.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", levelOptions[i]);
    option.text = levelOptions[i];
    charLevelSelect.appendChild(option);
  }
}

function UpdateDescription() {
  
}
