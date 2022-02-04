
let inputDOM = document.querySelector('#task')
let allLiDOM = document.querySelectorAll('li')
console.log(allLiDOM)

let BtnDOM = document.querySelector('#liveToastBtn')

BtnDOM.addEventListener('onclick', newElement)

inputDOM.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        newElement()
    }
})

let ulDOM = document.querySelector('#list')



function newElement(event) {
    let liDOM = document.createElement('li')
    let newSpan = document.createElement('span')
    newSpan.innerText = "X"
    liDOM.innerHTML = inputDOM.value
    ulDOM.append(liDOM)
    liDOM.append(newSpan)
    inputDOM.value = ""
    liDOM.addEventListener('click', addClass)
    newSpan.addEventListener('click', deleteTask)
}

allLiDOM.forEach(item => item.addEventListener('click', addClass))

function addClass(event) {
    this.className == "checked" ? this.classList.remove("checked") : this.classList.add("checked")

}
console.log(allLiDOM)

let spanDOM = document.querySelectorAll('ul#list>li>span')
spanDOM.forEach(item => item.addEventListener('click', deleteTask))
function deleteTask(event) {

    this.parentElement.remove();
}