//Set Class List
var charClassSelect = document.getElementByClass("CharacterClass");
var classOptions = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];}

for (var i=0; i < classOptions.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", classOptions[i]);
  option.text = classOptions[i];
  charClassSelect.appendChild(option);
}
