// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
    //retrieve date 
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //get the AM / PM value 
    let am_pm = h > 12 ? 'PM' : 'AM';
    // Convert the hour to 12 format 
    h = h % 12 || 12;
    // add zero 
    m = addZero(m);
    s = addZero(s);
    // Assign to the UI [p]
    timerDemo.innerHTML = `${h} : ${addZero(m)} : ${addZero(s)} ${am_pm }`;
    setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i } // add zero in front of numbers < 10
    return i;
}

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();