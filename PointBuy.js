var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var statValTotal = 0;

for(let i = 0; i < stats.length; i++) {
  stats[i].addEventListener("input", UpdateStatValue);
}

function UpdateStatValue(e) {
  statValTotal = 0;
  for(let i = 0; i < stats.length; i++) {
    statValTotal += parseInt(stats[i].value);
  }
  UpdatePointBuy(e);
}

function UpdatePointBuy(e) {
  let pointsRemain = pointTotal-statValTotal;
  if(e == 14) {pointsRemain - 1;}
  if(e == 15) {pointsRemain - 2;}
  points.value = pointsRemain;
}
