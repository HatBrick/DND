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
  UpdatePointBuy(parseInt(thisStat.innerHTML), this.className);
}

function UpdatePointBuy(e, thisClass) {
  let pointsRemain = pointTotal-statValTotal;
  if(thisClass == "Inc") {
    if(e >= 14) { pointsRemain = pointsRemain - 1; }
  } else {
    if(e >= 13) { pointsRemain = pointsRemain + 1; }
  }
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
      if(document.getElementById(incButtons[i].id).innerHTML == 8) {
        decButtons[i].disabled = true;
      } else if(document.getElementById(incButtons[i].id).innerHTML == 15) {
        incButtons[i].disabled = true;
      } else {
        incButtons[i].disabled = false;
        decButtons[i].disabled = false;
      }
    }
  }
}
