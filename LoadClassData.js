LoadForms("./CharacterCreationResources/CoreClassData.txt");
let selectList = new Array();
let dataList = new Map();
const content = document.getElementById("content");

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
    CreateArrays(formsList[i].split("#"));
  }
}

function CreateArrays(arr) {
  if(arr[0] == "Select") {
    selectList = arr.slice(1);
    CreateSelect(arr);
  } else if(arr[0] == "Value") {
    let newMap = new Map();
    for(let i=2;i<arr.length;i++) {
      let val = arr[i].split("=");
      newMap.set(val[0], val[1]);
    }
    dataList.set(arr[1], arr.slice(2));
    CreateDataField(arr[1]);
  } else if(arr[0] == "MultiValue") {
    let newMap = new Map();
    for(let i=2;i<arr.length;i++) {
      let val = arr[i].split("=");
      newMap.set(val[0], val[1].split(","));
    }
    dataList.set(arr[1], arr.slice(2));
    CreateDataField(arr[1]);
  }
}

function CreateSelect(arr) {
  let contObj = document.createElement("div");
  contObj.className = "contentObject";
  let select = document.createElement("select");
  select.id = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arr[i]);
    option.text = arr[i];
    select.appendChild(option);
  }
  contObj.appendChild(select);
  content.appendChild(contObj);

  select.addEventListener("change", (event) => { UpdateDataField(select.id, select.value) });
}

function CreateDataField(key) {
  let contObj = document.createElement("div")
  contObj.className = "contentObject";
  let field = document.createElement("p");
  field.id = key;
  contObj.appendChild(field);
  content.appendChild(contObj);
}

function UpdateDataField(type, key) {
  document.getElementById(type).value = dataList.get(type.get(key));
}
