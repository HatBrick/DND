const pClass = document.querySelector("select#Class");
const pLevel = document.querySelector("select#Level");
const pSpecies = document.querySelector("select#Species");

function StoreLocalSave() {
  localStorage.setItem("Class", pClass.value);
  localStorage.setItem("Level", pLevel.value);
  localStorage.setItem("Species", pSpecies.value);
}

function RetrieveLocalSave() {
  document.getElementById("Class").innerHTML = localStorage.getItem("Class");
  document.getElementById("Level").innerHTML = localStorage.getItem("Level");
  document.getElementById("Species").innerHTML = localStorage.getItem("Species");
}
