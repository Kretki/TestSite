let time1 = document.getElementById("time1")
let date1 = document.getElementById("date1")
let date1Svg = document.getElementById("date1-svg")
let date1Line = document.getElementById("date1-line")
let date1Time = document.getElementById("date1-time")

let time2 = document.getElementById("time2")
let date2 = document.getElementById("date2")
let date2Svg = document.getElementById("date2-svg")
let date2Line = document.getElementById("date2-line")
let date2Time = document.getElementById("date2-time")


let date3 = document.getElementById("date3")


let date4 = document.getElementById("date4")


let textSquare = document.getElementsByClassName("main-outer-line")
let mainText = document.getElementById("main-text")

var dateChosen = 0

var globaloffsetX = 0

function size_up_time(box){
    anime({
        targets: box,
        width: box.getBoundingClientRect().width * 2.2,
        easing: 'easeInOutSine'
    })
}

function size_down_time(box){
    anime({
        targets: box,
        width: box.getBoundingClientRect().width / 2.2,
        easing: 'easeInOutSine'
    })
}

function move_down_text(box){
    anime({
        targets: box,
        translateY: 20,
        easing: 'easeInOutSine'
    })
}

function move_up_text(box){
    anime({
        targets: box,
        translateY: 0,
        easing: 'easeInOutSine'
    })
}

function size_up_first(){
    dateChosen = 1
    mainText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    size_up_time(time1)
    move_down_text(textSquare)
    anime({
        targets: date1Time,
        width: 9,
        easing: 'easeInOutSine'
    })
    var delayTimeout = null
    let offsetLeft = 0
    let timeToOffsetX = 0
    var coordX = 0
    var coordY = 0
    var offsetX = 0
    var counterCor = 0
    clearTimeout(delayTimeout)
    delayTimeout = setInterval(function() {
        var offset = date1.getBoundingClientRect()
        var svgOffset = date1Line.getBoundingClientRect()
        timeToOffsetX += 1
        if (timeToOffsetX%9 == 0){ offsetX += 1}
        if (offsetLeft != offset.left) {counterCor = 0}
        if (!(offsetLeft == offset.left && counterCor == 5)){
            counterCor += 1
            offsetLeft = offset.left
            coordX = offset.left-svgOffset.left+offsetX
            coordY = offset.top+offset.height-svgOffset.top-2
            date1Svg.style.height = coordY+"px"
            date1Svg.style.width = coordX+offsetX+"px"
            date1Line.setAttribute("points", "0,-2 " + coordX + "," + coordY)
        }
        else{
            globaloffsetX = offsetX
            clearInterval(delayTimeout)
        }
    }, 3);
    anime({
        targets: date1,
        scale: 2,
        borderBottomWidth: 3.5,
        translateY: 25,
        translateX: 81,
        lineHeight: 39, 
        easing: 'easeInOutSine'
    })
    anime({
        targets: date1Line,
        strokeWidth: '7',
        easing: 'easeInOutSine'
    })
}

function size_down_first(){
    size_down_time(time1)
    move_up_text(textSquare)
    anime({
        targets: date1Time,
        width: 3,
        easing: 'easeInOutSine'
    })
    var delayTimeout = null
    let offsetLeft = 0
    let timeToOffsetX = 0
    var offsetX = globaloffsetX
    var coordX = 0
    var coordY = 0
    var counterCor = 0
    clearTimeout(delayTimeout)
    delayTimeout = setInterval(function() {
        var offset = date1.getBoundingClientRect()
        var svgOffset = date1Line.getBoundingClientRect()
        if (timeToOffsetX%10 == 0 || timeToOffsetX%45 == 0){ offsetX -= 1}
        if (offsetLeft != offset.left) {counterCor = 0}
        if (!(offsetLeft == offset.left && counterCor == 5)){
            timeToOffsetX += 1
            counterCor += 1
            offsetLeft = offset.left
            coordX = offset.left-svgOffset.left+offsetX
            coordY = offset.top+offset.height-svgOffset.top-3
            date1Svg.style.height = coordY+"px"
            date1Svg.style.width = coordX+"px"
            date1Line.setAttribute("points", "0,-2 " + coordX + "," + coordY)
        }
        else{
            coordX = offset.left-svgOffset.left+1
            coordY = coordY+1
            date1Line.setAttribute("points", "0,-2 " + coordX + "," + coordY)
            date1Svg.style.width = coordX+"px"
            date1Svg.style.height = coordY+"px"
            clearInterval(delayTimeout)
        }
    }, 3);
    anime({
        targets: date1,
        scale: 1,
        borderBottomWidth: 3,
        translateY: 0,
        translateX: 0,
        lineHeight: 30, 
        easing: 'easeInOutSine'
    })
    anime({
        targets: date1Line,
        strokeWidth: '3',
        easing: 'easeInOutSine'
    })
}

function size_up_second(){
    dateChosen = 2
    mainText.innerHTML = "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    size_up_time(time2)
    move_down_text(textSquare)
    anime({
        targets: date2Time,
        width: 9,
        easing: 'easeInOutSine'
    })
    anime({
        targets: date2Svg,
        height: 240,
        translateY: 50,
        easing: 'easeInOutSine'
    })
    var delayTimeout = null
    let offsetLeft = 0
    let timeToOffsetX = 0
    var coordX = 0
    var coordY = 0
    var offsetX = 0
    var counterCor = 0
    clearTimeout(delayTimeout)
    delayTimeout = setInterval(function() {
        var offset = date2.getBoundingClientRect()
        var svgOffset = date2Line.getBoundingClientRect()
        timeToOffsetX += 1
        if (timeToOffsetX%9 == 0){ offsetX += 1}
        if (offsetLeft != offset.left) {counterCor = 0}
        if (!(offsetLeft == offset.left && counterCor == 5)){
            counterCor += 1
            offsetLeft = offset.left
            coordX = offset.left-svgOffset.left+offsetX
            coordY = offset.top+offset.height-svgOffset.top-2
            console.log(date2Svg.getBoundingClientRect())
            // date2Svg.style.height = coordY+"px"
            // date2Svg.style.width = coordX+offsetX+"px"
            date2Line.setAttribute("points", "-2,92 " + coordX + "," + coordY)
        }
        else{
            globaloffsetX = offsetX
            clearInterval(delayTimeout)
        }
    }, 3);
    anime({
        targets: date2,
        scale: 2,
        borderBottomWidth: 3.5,
        translateY: 130,
        translateX: 5,
        lineHeight: 39, 
        easing: 'easeInOutSine'
    })
    anime({
        targets: date2Line,
        strokeWidth: '7',
        easing: 'easeInOutSine'
    })
}

time1.onclick = function(){
    size_up_first()
}
time2.onclick = function(){
    if(dateChosen == 1){size_down_first()}
    size_up_second()
    mainText.innerHTML = "Text2"
}
date3.onclick = function(){
    if(dateChosen == 1){size_down_first()}
    mainText.innerHTML = "Text3"
}
date4.onclick = function(){
    if(dateChosen == 1){size_down_first()}
    mainText.innerHTML = "Text4"
}