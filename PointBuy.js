var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var incButtons = document.getElementsByClassName("inc");
var decButtons = document.getElementsByClassName("dec");
var statValTotal = 0;

for(let i = 0; i < incButtons.length; i++) {
  incButtons[i].addEventListener("input", UpdateStatValue);
}

function UpdateStatValue() {
  thisStat = document.getElementByID(this.id);
  if(this.class == "Inc") {
    thisStat.value = parseInt(thisStat.value) + 1;
  } else {
    thisStat.value = parseInt(thisStat.value) - 1;
  }
  
  statValTotal = 0;
  for(let i = 0; i < stats.length; i++) {
    statValTotal += parseInt(stats[i].value);
  }
  UpdatePointBuy(thisStat.value);
}

function UpdatePointBuy(e) {
  let pointsRemain = pointTotal-statValTotal;
  if(e == 14) {pointsRemain - 1;}
  if(e == 15) {pointsRemain - 2;}
  points.value = pointsRemain;
}
