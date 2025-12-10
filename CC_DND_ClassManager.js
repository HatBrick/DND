//On Page Load
const charClassSelect = document.getElementById("ClassSelect");
const charLevelSelect = document.getElementById("LevelSelect");
const classDesc = document.getElementById("ClassDescription");

LoadForms("./CharacterCreationResources/DND2024Creation.txt");

function LoadForms(formRef) {
//Grab Appropriate Rule List
fetch('./CharacterCreationResources/DND2024Creation.txt') 
  .then(response => { return response.text(); })
  .then(textData => { 
    SplitForms(textData.split("|"));
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching the text file:', error);
  });
}

function SplitForms(formsList) {
  for(let i = 0; i < formsList.length; i++) {
    CreateCharacterForms(formsList[i].split(", "));
  }
}

function CreateCharacterForms(arr) {
  if(arr[0] == "Select") { CreateSelect(arr); }
  const charClassSelect = document.getElementById("ClassSelect");
}

function CreateSelect(arr) {
  let select = document.createElement("select");
  select.className = "CharacterForm";
  select.id = arr[1];
  for (let i = 2; i < arr.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arr[i]);
    option.text = arr[i];
    select.appendChild(option);
  }
  document.body.appendChild(select);
}
