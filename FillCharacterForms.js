LoadForms("./CharacterCreationResources/DND2024Creation.txt");
const formArrays = new Array();

function LoadForms(formRef) {
//Grab Appropriate Rule List
fetch(formRef) 
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
    CreateDesc(arr[1]);
    CreateSelect(arr); 
  }
  if(arr[0] == "Level") {
    CreateSelect(arr);
  }
  formArrays.push(arr);
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

  if(arr[0] == "LevelClass")
    select.addEventListener("change", (event) => { UpdateClassAbilitiesDesc(); });
  else if (arr[0] == "Level")
    select.addEventListener("change", (event) => { UpdateClassAbilitiesDesc(); });
  else
    select.addEventListener("change", (event) => { UpdateDesc(event.target.selectedIndex+2, select.id) });
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

function UpdateClassAbilitiesDesc() {
  descObj = document.querySelector("p#Class");
  descObj.innerText = "";
  arrToUse = document.querySelector("select#Class").selectedIndex;
  index = document.querySelector("select#Level").selectedIndex;
  
  console.log(arrToUse);
  console.log(index);
  let arr = new Array();
  let counter = 0;
  for(let i = 0; i < formArrays.length; i++) {
    console.log(formArrays[i]);
    if(formArrays[i][0] == "ClassAbilitiesDesc") {
      if(counter == arrToUse) { arr = formArrays[i]; break; } 
      else { counter++; }
    }
  }

  for(let i = 1; i < index; i++) {
    descObj.innerText += arr[i+2] + "\n\n";
  }
}
