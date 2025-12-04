var classSelects = document.GetElementByClassName("CharacterClass");

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

async function AssignClassOptions() {return "hello";}//["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];}

AssignClassOptions().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


