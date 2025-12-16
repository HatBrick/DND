var pClass = document.querySelector("select#Class");
var pLevel = document.querySelector("select#Level");
var pSpecies = document.querySelector("select#Species");

localStorage.setItem("Class", pClass.value);
localStorage.setItem("Level", pLevel.value);
localStorage.setItem("Species", pSpecies.value);

function Retrieve() {
  document.getElementByID("Class").innerHTML = localStorage.getItem("Class");
  document.getElementByID("Level").innerHTML = localStorage.getItem("Level");
  document.getElementByID("Species").innerHTML = localStorage.getItem("Species");
}
