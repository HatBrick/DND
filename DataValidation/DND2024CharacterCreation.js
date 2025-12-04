var classSelects = document.GetElementByClassName("CharacterClass");
var classOptions = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

function myDisplayer(some) {
  alert(classOptions);
}

async function AssignClassOptions() {return classOptions;}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
