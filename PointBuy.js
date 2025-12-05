var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var statVals = document.getElementsByClassName("stat").values;

for(let i = 0; i < stats.length; i++) {
  stats[i].addEventListener("input", UpdateStatValue());
}

function UpdateStatValue(e) {
  let currentTotal = statVals.reduce((partialSum, a) => partialSum + a, 0);
  let pointsRemain = pointTotal-currentTotal;
  if(e == 14) {pointsRemain - 1;}
  if(e == 15) {pointsRemain - 2;}
  points.value = pointsRemain;
}
