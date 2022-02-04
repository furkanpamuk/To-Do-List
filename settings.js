
let inputDOM = document.querySelector('#task')
let allLiDOM = document.querySelectorAll('li')
console.log(allLiDOM)

let BtnDOM = document.querySelector('#liveToastBtn')

BtnDOM.addEventListener('onclick',newElement)

inputDOM.addEventListener('keydown', (event) => {
    if (event.key === "Enter" ) {
        newElement() 
    }
} )

let ulDOM = document.querySelector('#list')

function newElement(event){
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${inputDOM.value} <span>X</span>`
    ulDOM.append(liDOM)
    inputDOM.value = ""
    liDOM.addEventListener('click',addClass)
}

allLiDOM.forEach ( item => item.addEventListener('click',addClass))

function addClass(event){
    this.className == "checked" ?this.classList.remove("checked") :this.classList.add("checked")
    
}

console.log(allLiDOM)

