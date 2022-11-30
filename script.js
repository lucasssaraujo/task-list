const createListButton = document.getElementById('btn-create-list')
const mainButtons = document.getElementsByClassName('main-buttons')
const test = document.querySelectorAll('[test]')
const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('btn-add')
const testando = document.getElementById('testando')
const cancelListButton = document.getElementById('btn-cancel')
const saveListButton = document.getElementById('btn-save-list')
const hide = document.querySelectorAll('[hide]')
const unorderedList = document.getElementById('unordered-list')
const firstList = document.querySelector('.first-list')
const main = document.querySelector('main')




function newElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


test.forEach(e => e.setAttribute('style', 'display: none'))


createListButton.addEventListener('click', () => {
    test.forEach(e => e.setAttribute('style', 'display: flex'))
    createListButton.setAttribute('style', 'display: none')
}
)


addButton.addEventListener("click", function Add() {
    if (document.querySelectorAll('#unordered-list li').length < 5 &&
        taskInput.value.length >= 1) {
        li = document.createElement('li')
        li.innerHTML = taskInput.value
        unorderedList.appendChild(li)
        li.dataset.saved = 'false'

    } else {

    }
})


saveListButton.addEventListener('click', () => {

    hide.forEach(e => e.setAttribute('style', 'display: none;'))
    firstList.dataset.saved = ''

    li = document.querySelectorAll('li')

li.forEach(e => e.dataset.saved = 'true')



    if (firstList.hasAttribute('data-saved')) {
        document.querySelector('.after-save').setAttribute('style', 'display: flex' )

    } else {
        console.log('erro')
    }
})




cancelListButton.addEventListener('click', () => {
    li = document.querySelectorAll('li')

    if(document.querySelector('data-saved', 'true') == true) {
        hide.forEach(e => e.setAttribute('style', 'display: none'))
    } else{
        console.log('erro')
        test.forEach(e => e.setAttribute('style', 'display: none'))
        createListButton.setAttribute('style', 'display: inline')
    }
})


editButton = document.getElementById('edit')

editButton.addEventListener('click', () => {
test.forEach(e => e.setAttribute('style', 'display: flex'))
})










