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
    if(stats[i].innerHTML == 14) {
      statValTotal ++;
    } else if(stats[i].innerHTML == 15) {
      statValTotal += 2;
    }
  }
  UpdatePointBuy(parseInt(thisStat.innerHTML), this.className);
}

function UpdatePointBuy(e, thisClass) {
  let pointsRemain = pointTotal-statValTotal;
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
        incButtons[i].disabled = false;
      } else if(document.getElementById(incButtons[i].id).innerHTML == 15) {
        incButtons[i].disabled = true;
        decButtons[i].disabled = false;
      } else {
        incButtons[i].disabled = false;
        decButtons[i].disabled = false;
      }
    }
  }
}
