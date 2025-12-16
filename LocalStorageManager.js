var pClass = document.querySelector("select#Class");
var pLevel = document.querySelector("select#Level");
var pSpecies = document.querySelector("select#Species");

localStorage.setItem("Class", pClass.value);
localStorage.setItem("Level", pLevel.value);
localStorage.setItem("Species", pSpecies.value);

function Retrieve() {
  document.getElementById("Class").innerHTML = localStorage.getItem("Class");
  document.getElementById("Level").innerHTML = localStorage.getItem("Level");
  document.getElementById("Species").innerHTML = localStorage.getItem("Species");
}
