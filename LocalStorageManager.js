function StoreLocalSave() {
  localStorage.setItem("Class", document.querySelector("select#Class").value);
  localStorage.setItem("Level", document.querySelector("select#Level").value);
  localStorage.setItem("Species", document.querySelector("select#Species").value);
}

function RetrieveLocalSave() {
  document.getElementById("Class").innerHTML = localStorage.getItem("Class");
  document.getElementById("Level").innerHTML = localStorage.getItem("Level");
  document.getElementById("Species").innerHTML = localStorage.getItem("Species");
}
