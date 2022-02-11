let closeBtn = document.querySelectorAll('.close')
let inputDOM = document.querySelector('#task')
let allLiDOM = document.querySelectorAll('li')
let BtnDOM = document.querySelector('#liveToastBtn')
let ulDOM = document.querySelector('#list')
let spanDOM = document.querySelectorAll('ul#list>li>span')

closeBtn[0].addEventListener('click', closeLiveToast)
closeBtn[1].addEventListener('click', closeLiveToast)
BtnDOM.addEventListener('onclick', newElement)
inputDOM.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        newElement()
    }
})
allLiDOM.forEach(item => item.addEventListener('click', addClass))
spanDOM.forEach(item => item.addEventListener('click', deleteTask))

function closeLiveToast(event) {
    $('#liveToast_error').toast('hide')
    $('#liveToast_success').toast('hide')
}

function newElement(event) {

    if (inputDOM.value.trim() == '') {
        $('#liveToast_error').toast('show')
        inputDOM.value = ""
    } else {
        let liDOM = document.createElement('li')
        let newSpan = document.createElement('span')
        newSpan.innerText = "X"
        liDOM.innerHTML = inputDOM.value
        ulDOM.append(liDOM)
        liDOM.append(newSpan)
        inputDOM.value = ""
        $('#liveToast_success').toast('show')
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
