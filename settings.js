
let inputDOM = document.querySelector('#task')
let allLiDOM = document.querySelectorAll('li')
console.log(allLiDOM)

allLiDOM.forEach ( item => item.addEventListener('click',addClass))

function addClass(event){
    this.className == "checked" ?this.classList.remove("checked") :this.classList.add("checked")
    
}

let BtnDOM = document.querySelector('#liveToastBtn')

BtnDOM.addEventListener('onclick',newElement)



let ulDOM = document.querySelector('#list')

function newElement(event){
    let liDOM = document.createElement('li')
    liDOM.innerHTML = inputDOM.value
    ulDOM.append(liDOM)
    inputDOM.value = ""
}




