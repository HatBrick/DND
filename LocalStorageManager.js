var pClass = document.querySelector("select#Class").selectedIndex;
var pLevel = document.querySelector("select#Level").value;
var pSpecies = document.querySelector("select#Species").value;

localStorage.setItem("Class", pClass);
localStorage.setItem("Level", pLevel);
localStorage.setItem("Species", pSpecies);

function Retrieve() {
  document.getElementById("Class").innerHTML = localStorage.getItem("Class");
  document.getElementById("Level").innerHTML = localStorage.getItem("Level");
  document.getElementById("Species").innerHTML = localStorage.getItem("Species");
}
