const colors = ["green", "red"," rgba(133, 122, 200 )","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");



function changeColor (){
    const randNum = Math.random() * 3
    const container = document.querySelector('.nav-center')
    container.style.backgroundColor = colors[Math.round(randNum)]
    color.innerHTML = colors[Math.round(randNum)]
}

btn.addEventListener("click", changeColor)