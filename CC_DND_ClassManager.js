//On Page Load
const charClassSelect = document.getElementById("ClassSelect");
const charLevelSelect = document.getElementById("LevelSelect");
const classDesc = document.getElementById("ClassDescription");
var formsList = new Array();

LoadForms("./CharacterCreationResources/DND2024Creation.txt");

function LoadForms(formRef) {
  var fs = require("fs");
  var text = fs.readFileSync(formRef).toString('utf-8');
  formsList = text.split("|");
  SetSelects();
}

//Set Selects
function SetSelects() {
  console.log(formsList.length);
  console.log(formsList[0]);
  console.log(formsList[1]);
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
