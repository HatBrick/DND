var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var statVals = new Array(stats.length);

for(let i = 0; i < stats.length; i++) {
  statVals[i] = stats[i].value;
  stats[i].addEventListener("input", UpdateStatValue);
}

function UpdateStatValue(e) {
  console.log(statVals);
  let currentTotal = 0;
  for(let i = 0; i < statVals.length; i++) {
    currentTotal += statVals[i];
  }
  let pointsRemain = pointTotal-currentTotal;
  if(e == 14) {pointsRemain - 1;}
  if(e == 15) {pointsRemain - 2;}
  points.value = pointsRemain;
}
