let date1 = document.getElementById("date1")
let date1Rot = document.getElementById("date1-rot-point")
let date1Arrow = document.getElementById("date1-arrow")
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
    anime({
        targets: date1,
        scale: 2,
        keyframes: [
            {translateY: 20, translateX:40, duration: 300},
            {translateX: 450, duration: 700}
        ],
        easing: 'easeInOutSine'
    })
    anime({
        targets: date1Rot,
        scale: 2,
        keyframes: [
            {rotateZ: -6, duration: 100},
            {rotateZ: -45.59}
        ],
        //rotateZ: -43.59,
        easing: 'easeInOutSine'
    })
    anime({
        targets: date1Arrow,
        keyframes: [
            {height: 100, duration: 100},
            {height: 244}
        ],
        //height: 250,
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
