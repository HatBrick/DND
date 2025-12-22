LoadForms("./CharacterCreationResources/DND2024Creation.txt");
const formArrays = new Map();
let content = document.getElementByClassName("content");

function LoadForms(formRef) {
//Grab Appropriate Rule List
fetch(formRef) 
  .then(response => { return response.text(); })
  .then(textData => { 
    SplitForms(textData.split("$\n\n"));
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching the text file:', error);
  });
}

function SplitForms(formsList) {
  for(let i = 0; i < formsList.length-1; i++) {
    CreateCharacterForms(formsList[i].split("#"));
  }
}

function CreateArrays(arr) {
  if(arr[0] == 1) {
    formArrays.set(arr[1], arr.substring(1));
  } else if(arr[0] == 2) {
    formArrays.set(arr[1], arr.substring(1));
  }
}

function CreateCharacterForms(arr) {
  if(arr[0] == 1) {
    CreateSelect(arr);
  } else if(arr[0] == 2) {
    
  }
}

function CreateSelect(arr) {
  let contObj = document.createElement("div").className("contentObject");
  let select = document.createElement("select");
  select.className = arr[1];
  select.id = "";
  for (let i = 2; i < arr.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arr[i]);
    option.text = arr[i];
    select.appendChild(option);
  }
  contObj.appendChild(select);
  content.appendChild(contObj);
}
