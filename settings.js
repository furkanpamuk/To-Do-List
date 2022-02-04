
let inputDOM = document.querySelector('#task')
let ulliDOM = document.querySelectorAll('ul#list > li')
console.log(ulliDOM)

let BtnDOM = document.querySelector('#liveToastBtn')

BtnDOM.addEventListener('onclick',newElement)



let ulDOM = document.querySelector('#list')

function newElement(event){
    let liDOM = document.createElement('li')
    liDOM.innerHTML = inputDOM.value
    ulDOM.append(liDOM)
    inputDOM.value = ""
}





