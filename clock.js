const timer = document.querySelector(".timer")
const stopWatch = document.querySelector(".stop-watch")
const timerTime = document.getElementById("timer-p")
const timerDiv = document.getElementById("timer-div")

window.onload = () => {
    stopWatch.style.display = "none"
    timer.style.display = "block"
    document.getElementById("stopbtn").style.display = "none"
    timerTime.style.display = 'none'
    document.getElementById("p-timer").style.color = "white"
    document.getElementById("stopTimer").style.display = "none"
}

const showStopWatch = () => {
    stopWatch.style.display = "block"
    timer.style.display = "none"
    document.getElementById("p-timer").style.color = "black"
    document.getElementById("p-stop").style.color = "white"
}

const showTimer = () => {
    timer.style.display = "block"
    stopWatch.style.display = "none"
    document.getElementById("p-timer").style.color = "white"
    document.getElementById("p-stop").style.color = "black"
}

//var 
const stopTime = document.getElementById("stop-p")
const milisecDisplay = document.getElementById("milisec")
let [hr, min, sec, milisec] = [0, 0, 0, 0]
let int = null
function startTimer() {
    if (int !== null) {
        clearInterval(int)
    }
    int = setInterval(displayTime, 100)
    document.getElementById("startTimer").style.display = "none"
    document.getElementById("stopTimer").style.display = "block"

}

function displayTime() {
    milisec += 1;
    if (milisec == 10) {
        milisec = 0;
        sec++
        if (sec == 60) {
            sec = 0
            min++
            if (min == 60) {
                min = 0
                hr++
            }

        }
    }
    if (sec > 9) {
        if (min > 9) {
            if (hr > 9) {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `${hr}:${min}:${sec}`
            }
            else {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `0${hr}:${min}:${sec}`
            }
        }
        else {
            if (hr > 9) {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `${hr}:0${min}:${sec}`
            }
            else {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `0${hr}:0${min}:${sec}`
            }
        }
    }
    else {
        if (min > 9) {
            if (hr > 9) {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `${hr}:${min}:0${sec}`
            }
            else {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `0${hr}:${min}:0${sec}`
            }
        }
        else {
            if (hr > 9) {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `${hr}:0${min}:0${sec}`
            }
            else {
                milisecDisplay.innerHTML = `0${milisec}`
                stopTime.innerHTML = `0${hr}:0${min}:0${sec}`
            }
        }

    }
}

// Function to Stop timer
const stopTimer = () => {
    clearInterval(int)
    document.getElementById("startTimer").style.display = "block"
    document.getElementById("stopTimer").style.display = "none"


}

//function to reset watch

const resetTimer = () => {
    [hr, min, sec, milisec] = [0, 0, 0, 0]
    stopTime.innerHTML = "00:00:00"
    milisecDisplay.innerHTML = "00"
    clearInterval(int)
    document.getElementById("startTimer").style.display = "block"
    document.getElementById("stopTimer").style.display = "none"


}

//Timer part
//var
const hour = document.getElementById("hr")
const minutes = document.getElementById("min")
const second = document.getElementById("sec")
let inputHour
let inputMin
let inputSec
let intervalId = null
let count = 0
function hourStore() {
    inputHour = hour.value
}
function secStore() {
    if (second.value < 60) {
        inputSec = second.value
    }
    else if (second.value > 60) {
        inputMin++
        second.value = second.value - 60
        secStore()
    }

}
function minStore() {
    if (minutes.value < 60) {
        inputMin = minutes.value
    }
    else if (minutes.value > 60) {
        inputHour++
        minutes.value = minutes.value - 60
        minStore()
    }
}
function startTime() {
    if(inputHour==undefined && inputMin==undefined && inputSec==undefined){
        alert("Insert time to start!!!")
    }
    else if( inputMin!=0 || inputHour!=0 || inputSec!= 0){
     intervalId = setInterval(displayTimer, 1000)
    }
}
function stop(){
    clearInterval(intervalId)
    document.getElementById("startbtn").style.display = "block"
    document.getElementById("stopbtn").style.display = "none"
}
function displayTimer(){
    document.getElementById("stopbtn").style.display = "block"
    document.getElementById("startbtn").style.display = "none"
    timerTime.style.display = "block"
    timerDiv.style.display = "none"
    if(inputSec==0||inputSec==undefined){
        if(inputMin==0 || inputMin == undefined){
            if(inputHour == 0){
                clearInterval(intervalId)
                timerTime.innerHTML = `${inputHour}:${inputMin}:${inputSec}`
                document.getElementById("stopbtn").style.display = "none"
                document.getElementById("startbtn").style.display = "none"
            }
            if(inputHour != 0){
            inputHour--
            inputMin=59
            inputSec=60
            timerTime.innerHTML = `${inputHour}:${inputMin}:${inputSec}`
            inputSec--
            }
        }
        else{
            if(inputHour==undefined){
                inputHour=0
            }
            inputMin--
            inputSec = 60
            timerTime.innerHTML = `${inputHour}:${inputMin}:${inputSec}`
            inputSec--
        }
    } 
    else {
        if(inputMin==undefined){
            inputMin = 0
        }
        if(inputHour == undefined){
            inputHour = 0
        }
        timerTime.innerHTML = `${inputHour}:${inputMin}:${inputSec}`
        inputSec--
    }
}

// Function to reset timer

function reset(){
    clearInterval(intervalId)
    timerTime.style.display = "none"
    timerDiv.style.display = "block"
    timerDiv.style.display = "flex"
    document.getElementById("stopbtn").style.display = "none"
    document.getElementById("startbtn").style.display = "block"
    hour.value=null
    minutes.value=null
    second.value=null
    secStore()
    minStore()
    hourStore()
}








// //second display for timer
// function secOnlyDisplay() {
//     timerTime.style.display = "block"
//     timerDiv.style.display = "none"
//     timerTime.innerHTML = `0${0}:0${0}:${inputSec}`

//     inputSec--

//     if (inputSec == -1) {
//         clearInterval(intervalId)
//     }
// }

// // Minutes and second display function
// function minSecDisplay() {
//     timerTime.style.display = "block"
//     timerDiv.style.display = "none"
//     if (inputMin == 1) {
//         if (inputSec == undefined) {
//             if(count==0){
//                 inputSec = 60
//                 count++
//                 timerTime.innerHTML = `0${0}:0${0}:${inputSec}`
//                 inputSec--
//                 if (inputSec == -1) {
//                     clearInterval(intervalId)
//                 }
//             }
//             else{
//                 timerTime.innerHTML = `0${0}:0${0}:${inputSec}`
//                 inputSec--
//                 if (inputSec == -1) {
//                     clearInterval(intervalId)
//                 }

//             }
          
//         }
//         else{
//             timerTime.innerHTML = `0${0}:0${inputHour}:${inputSec}`
//                 inputSec--
//         }
//     }

// }
