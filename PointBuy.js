var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var incButtons = document.getElementsByClassName("Inc");
var decButtons = document.getElementsByClassName("Dec");
var statValTotal = 0;

for(let i = 0; i < incButtons.length; i++) {
  console.log(incButtons[i].id);
  console.log(decButtons[i].id);
  incButtons[i].addEventListener("click", UpdateStatValue);
  decButtons[i].addEventListener("click", UpdateStatValue);
}

function UpdateStatValue() {
  thisStat = document.getElementById(this.id);
  if(this.class == "Inc") {
    thisStat.value = parseInt(thisStat.innerHTML) + 1;
  } else {
    thisStat.value = parseInt(thisStat.innerHTML) - 1;
  }
  
  statValTotal = 0;
  for(let i = 0; i < stats.length; i++) {
    statValTotal += parseInt(stats[i].innerHTML);
  }
  UpdatePointBuy(parseInt(thisStat.innerHTML));
}

function UpdatePointBuy(e) {
  let pointsRemain = pointTotal-statValTotal;
  if(e == 14) {pointsRemain - 1;}
  if(e == 15) {pointsRemain - 2;}
  points.value = pointsRemain;
}
