var pointTotal = 75;
var points = document.getElementById("PointBuy");
var stats = document.getElementsByClassName("stat");
var incButtons = document.getElementsByClassName("Inc");
var decButtons = document.getElementsByClassName("Dec");
var statValTotal = 0;

for(let i = 0; i < incButtons.length; i++) {
  incButtons[i].addEventListener("click", UpdateStatValue);
  decButtons[i].addEventListener("click", UpdateStatValue);
  decButtons[i].disabled = true;
}

function UpdateStatValue() {
  thisStat = document.getElementById(this.id);
  if(this.className == "Inc") {
    thisStat.innerHTML = parseInt(thisStat.innerHTML) + 1;
  } else {
    thisStat.innerHTML = parseInt(thisStat.innerHTML) - 1;
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
  EnableDisable(pointsRemain);
}

function EnableDisable(pointsRemain) {
  for(let i = 0; i < incButtons.length; i++) {
    if(pointsRemain == 0) {
      incButtons[i].disabled = true;
    } else if (pointsRemain == 27) {
      decButtons[i].disabled = true;
    } else {
      incButtons[i].disabled = false;
      decButtons[i].disabled = false;
    }
  }
}
