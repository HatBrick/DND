var classSelects = document.GetElementByClassName("CharacterClass");

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

async function AssignClassOptions() {return ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
