const slider = document.getElementById("slider")
const count = document.getElementById("count")
const thumbs = document.getElementById("thumbs")
let x = 1
let timer = setTimeout(change, 1, 0)
for(let i = 1; i <= 6; i++) {
    thumbs.innerHTML += `<img onclick="press(this)" src="img/${i}.jpg" />`
}

function press(img) {
    x = Array.from(thumbs.getElementsByTagName("img")).indexOf(img)
    change(1)
}

function change(dx = 1) {
    clearTimeout(timer)
    x += dx
    if(x < 1) x = 6
    if(x > 6) x = 1
    show()
    timer = setTimeout(change, 3000)
}

function show(){
    slider.style.background = `url('img/${x}.jpg') center/cover`
    count.innerHTML = `${x} / 6`
}