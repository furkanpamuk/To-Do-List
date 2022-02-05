let SuccessLiveToast = document.querySelector("#liveToast_success")
let ErrorLiveToast = document.querySelector("#liveToast_error")
let closeBtn = document.querySelectorAll('.close')
let inputDOM = document.querySelector('#task')
let allLiDOM = document.querySelectorAll('li')
let BtnDOM = document.querySelector('#liveToastBtn')
let ulDOM = document.querySelector('#list')
let spanDOM = document.querySelectorAll('ul#list>li>span')

closeBtn[0].addEventListener('click', closeLiveToast)
closeBtn[1].addEventListener('click', closeLiveToast)
BtnDOM.addEventListener('onclick', newElement)
inputDOM.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        newElement()
    }
})
allLiDOM.forEach(item => item.addEventListener('click', addClass))
spanDOM.forEach(item => item.addEventListener('click', deleteTask))


function closeLiveToast(event) {
    ErrorLiveToast.classList.replace('show', 'hide')
    SuccessLiveToast.classList.replace('show', 'hide')
}

function newElement(event) {

    if (inputDOM.value.trim() == '') {
        ErrorLiveToast.classList.replace('hide', 'show')
        SuccessLiveToast.classList.replace('show', 'hide')
        inputDOM.value = ""
    } else {
        let liDOM = document.createElement('li')
        let newSpan = document.createElement('span')
        newSpan.innerText = "X"
        liDOM.innerHTML = inputDOM.value
        ulDOM.append(liDOM)
        liDOM.append(newSpan)
        inputDOM.value = ""
        SuccessLiveToast.classList.replace('hide', 'show')
        ErrorLiveToast.classList.replace('show', 'hide')
        liDOM.addEventListener('click', addClass)
        newSpan.addEventListener('click', deleteTask)
    }

}

function addClass(event) {
    this.className == "checked" ? this.classList.remove("checked") : this.classList.add("checked")
}

function deleteTask(event) {
    this.parentElement.remove();
}