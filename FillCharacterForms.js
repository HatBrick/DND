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
  console.log(formsList.length);
  for(let i = 0; i < formsList.length-1; i++) {
    CreateCharacterForms(formsList[i].split("$"));
  }
}

function CreateCharacterForms(arr) {
  console.log(arr.length);
  console.log(arr);
  if(arr[0] == "Select") {
    if(arr[1] != "LevelClass") {
      CreateDesc(arr[1]);
    }
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
  
  if(arr[0] == "Level")
    select.addEventListener("change", (event) => { UpdateAbilityDesc(select.id, document.querySelector("select#LevelClass").value, true) });
  else
    select.addEventListener("change", (event) => { UpdateAbilityDesc(select.id) });
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

function UpdateAbilityDesc(id, type="AbilityDesc", concat=false) {
  var descObj = document.querySelector("p#" + id);
  descObj.innerText = "";
  var index = document.querySelector("select#" + id).selectedIndex;

  console.log(descObj);
  console.log(index);
    
  
  arrToUse = (() => {
    for(let i = 0; i < formArrays.length; i++) {
      if(formArrays[i][0] == type && formArrays[i][1] == id) { return formArrays[i]; }
    }
  });

  console.log(arrToUse);

  if(!concat) { 
    descObj.innerText = arrToUse[index+2]; 
  } else {
    for(let i = 0; i < index+1; i++) {
      descObj.innerText += arrToUse[i+2] + "\n\n";
    }
  }
}
