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
  for(let i = 0; i < formsList.length; i++) {
    CreateCharacterForms(formsList[i].split(", "));
  }
}

function CreateCharacterForms(arr) {
  if(arr[0] == "Select") { arr = CreateSelect(arr); }
  if(arr[0] == "Desc") { arr = CreateDesc(arr); }
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
  select.addEventListener("change", (event) => { UpdateDesc(event.target.selectedIndex, select.id) });
  
  return arr.push(select);
}

function CreateDesc(arr) {
  let desc = document.createElement("p");
  desc.className = "CharacterForm";
  desc.id = arr[1];
  document.body.appendChild(desc);

  return arr.push(desc);
}

function UpdateDesc(place, id) {
  console.log("Change");
  for(let i = 0; i < formArrays.length; i++) {
    if(formArrays[i][1] == id && formArrays[i][0] == "Desc") {
      formArrays[i].at(-1).innerText = formArrays[i][place];
    }
  }
}
