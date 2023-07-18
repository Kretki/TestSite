let date1 = document.getElementById("date1")
let date1Svg = document.getElementById("date1-svg")
let date1Line = document.getElementById("date1-line")
let date1Time = document.getElementById("date1-time")

let date2 = document.getElementById("date2")
let date3 = document.getElementById("date3")
let date4 = document.getElementById("date4")
let textSquare = document.getElementsByClassName("main-outer-line")
let mainText = document.getElementById("main-text")

date1.onclick = function(){
    mainText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    anime({
        targets: textSquare,
        translateY: 20
    })
    anime({
        targets: date1Time,
        width: 5,
        easing: 'easeInOutSine'
    })
    var delayTimeout = null
    let offsetLeft = null
    date1Svg.style.width = "300px"
    date1Svg.style.height = "200px"
    clearTimeout(delayTimeout)
    delayTimeout = setInterval(function() {
        var offset = date1.getBoundingClientRect()
        var svgOffset = date1Line.getBoundingClientRect()
        if (offsetLeft != offset.left){
            offsetLeft = offset.left
            var coordX = offset.left-svgOffset.left+2
            var coordY= offset.top+offset.height-svgOffset.top-5
            console.log("0,-2 " + coordX + "," + coordY)
            date1Line.setAttribute("points", "0,-2 " + coordX + "," + coordY)
        }
        else{return}
    }, 10);
    anime({
        targets: date1,
        scale: 2,
        translateY: 20,
        translateX: 125,
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
