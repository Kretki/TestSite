let time1 = document.getElementById("time1")
let date1 = document.getElementById("date1")
let date1Svg = document.getElementById("date1-svg")
let date1Line = document.getElementById("date1-line")
let date1Time = document.getElementById("date1-time")

let date2 = document.getElementById("date2")
let date3 = document.getElementById("date3")
let date4 = document.getElementById("date4")
let textSquare = document.getElementsByClassName("main-outer-line")
let mainText = document.getElementById("main-text")
time1.onclick = function(){
    mainText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    anime({
        targets: textSquare,
        translateY: 20,
        easing: 'easeInOutSine'
    })
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
        if (timeToOffsetX%7 == 0){ offsetX += 1}
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
            clearInterval(delayTimeout)
        }
    }, 3);
    anime({
        targets: date1,
        scale: 2,
        translateY: 20,
        translateX: 125,
        lineHeight: 39, 
        easing: 'easeInOutSine'
    })
    anime({
        targets: date1Line,
        strokeWidth: '5',
        easing: 'easeInOutSine'
    })
}
date2.onclick = function(){
    mainText.innerHTML = "Text2"
}
date3.onclick = function(){
    mainText.innerHTML = "Text3"
}
date4.onclick = function(){
    mainText.innerHTML = "Text4"
}