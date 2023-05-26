function colorClock() {
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if (seconds < 10) {
    seconds = '0' + seconds;
  }
if (minutes < 10) {
    minutes = '0' + minutes;
}  
if (hours < 10) {
    hours = '0' + hours;
}

var clockFace = hours + ':' + minutes + ':' + seconds;
var hexColor = '#' + hours + minutes + seconds;

document.getElementById('clock').innerHTML = clockFace;
setTimeout(function() {
    colorClock();
  }, 1000);

  document.body.style.background = hexColor;  
}

colorClock();
const myHeading = document.querySelector(clock);
myHeading.textContent = colorClock;
