LoadForms("./CharacterCreationResources/DND2024Creation.txt");
const formArrays = new Array();

function LoadForms(formRef) {
//Grab Appropriate Rule List
fetch('./CharacterCreationResources/DND2024Creation.txt') 
  .then(response => { return response.text(); })
  .then(textData => { 
    SplitForms(textData.split("\n"));
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching the text file:', error);
  });
}

function SplitForms(formsList) {
  for(let i = 0; i < formsList.length-1; i++) {
    CreateCharacterForms(formsList[i].split(", "));
  }
}

function CreateCharacterForms(arr) {
  if(arr[0] == "Select" || arr[0] == "LevelClass") {
    let descObject = CreateDesc(arr[1]);
    CreateSelect(arr, descObject); 
  }
  if(arr[0] == "Level") {
    let descObject = document.querySelectorAll("p#Class");
    CreateSelect(arr, descObject);
  }
  formArrays.push(arr);
}

function CreateSelect(arr, descObject) {
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

  if(arr[0] == "LevelClass")
    select.addEventListener("change", (event) => { UpdateClassAbilitiesDesc(event.target.selectedIndex+2, 
                                                                            document.querySelectorAll("select#Level"), descObject) });
  else if (arr[0] == "Level")
    select.addEventListener("change", (event) => { UpdateClassAbilitiesDesc(document.querySelectorAll("select#LevelClass"), 
                                                                            event.target.selectedIndex+2, descObject) });
  else
    select.addEventListener("change", (event) => { UpdateDesc(event.target.selectedIndex+2, descObject) });
}

function CreateDesc(id) {
  let desc = document.createElement("p");
  desc.className = "CharacterForm";
  desc.id = id;
  document.body.appendChild(desc);
}

function UpdateDesc(place, id) {
  for(let i = 0; i < formArrays.length; i++) {
    if(formArrays[i][1] == id && formArrays[i][0] == "Desc") {
      document.getElementsByClassName("CharacterForm")[i].innerText = formArrays[i][place];
    }
  }
}

function UpdateClassAbilitiesDesc(arrToUse, index, descObj) {
  descObj.innerText = "";
  let arr = new Array();
  let counter = 0;
  for(let i = 0; i < formArrays.length; i++) {
    if(formArrays[i][0] == "ClassAbilitiesDesc") {
      if(counter == arrToUse) { arr = formArrays[i]; } 
      else { counter++; }
    }
  }

  for(let i = 0; i < index; i++) {
    descObj.innerText += arr[i+2] + "\n\n";
  }
}
