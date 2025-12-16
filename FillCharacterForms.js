LoadForms("./CharacterCreationResources/DND2024Creation.txt");
const formArrays = new Array();

function LoadForms(formRef) {
//Grab Appropriate Rule List
fetch(formRef) 
  .then(response => { return response.text(); })
  .then(textData => { 
    SplitForms(textData.split("#"));
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching the text file:', error);
  });
}

function SplitForms(formsList) {
  for(let i = 0; i < formsList.length-1; i++) {
    CreateCharacterForms(formsList[i].split("$"));
  }
}

function CreateCharacterForms(arr) {
  if(arr[0] == "Select") {
    let newRow = document.getElementById("content").appendChild(document.createElement("TR"));
    let th = newRow.appendChild(document.createElement("TH"));
    CreateSelect(arr, th); 
    if(arr[1] != "LevelClass") {
      let td = newRow.appendChild(document.createElement("TD"));
      CreateDesc(arr[1], td);
    }
  }
  formArrays.push(arr);
}

function CreateSelect(arr, parent) {
  let select = document.createElement("select");
  select.className = "CharacterForm";
  select.id = arr[1];
  for (let i = 2; i < arr.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arr[i]);
    option.text = arr[i];
    select.appendChild(option);
  }
  parent.appendChild(select);
  
  if(arr[1] == "Level")
    select.addEventListener("change", (event) => { UpdateAbilityDesc(select.id, document.querySelector("select#LevelClass").value, true) });
  else if (arr[1] == "LevelClass")
    select.addEventListener("change", (event) => { UpdateAbilityDesc("Level", event.target.value, true) });
  else
    select.addEventListener("change", (event) => { UpdateAbilityDesc(select.id) });
}

function CreateDesc(id, parent) {
  let desc = document.createElement("p");
  desc.className = "CharacterForm";
  desc.id = id;
  parent.appendChild(desc);
}

function UpdateAbilityDesc(id, type="AbilityDesc", concat=false) {
  var descObj = document.querySelector("p#" + id);
  descObj.innerText = "";
  var index = document.querySelector("select#" + id).selectedIndex;
  
  arrToUse = new Array();
  for(let i = 0; i < formArrays.length; i++) {
    if(formArrays[i][0] == type && formArrays[i][1] == id) { 
      arrToUse = formArrays[i];
      break;
    }
  }

  if(!concat) { 
    descObj.innerText = arrToUse[index+2]; 
  } else {
    for(let i = 0; i < index+1; i++) {
      descObj.innerText += arrToUse[i+2] + "\n\n";
    }
  }
}
