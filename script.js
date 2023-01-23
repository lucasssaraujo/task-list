createListButton = document.getElementById('btn-create-list')

mainButtons = document.getElementsByClassName('main-buttons')

test = document.querySelectorAll('[test]')

taskInput = document.getElementById('task-input')
addButton = document.getElementById('btn-add')
testando = document.getElementById('testando')

cancelListButton = document.getElementById('btn-cancel')
saveListButton = document.getElementById('btn-save-list')

hide = document.querySelectorAll('[hide]')



main = document.querySelector('main')

listButtons = document.querySelectorAll('.list-buttons')

firstList = document.querySelector('.first-list')


form = document.querySelector('form')

container = document.querySelector('.container')




container.setAttribute('style', 'display: none')


editItems = document.querySelector('.edit-items')
editItems.setAttribute('style', 'display: none')
btnEditList = document.getElementById('btn-edit-list')




createListButton.addEventListener('click', () => {
    firstList = document.createElement('div')
    firstList.className = 'first-list'

    main.appendChild(firstList)

    unorderedList = document.createElement('ul')
    unorderedList.className = 'unordered-list'

    firstList.appendChild(editItems)
    firstList.appendChild(unorderedList)
    firstList.appendChild(container)

    container.setAttribute('style', 'display: flex')
    unorderedList.setAttribute('style', 'display: flex')

    createListButton.setAttribute('style', 'display: none')
}
)


taskInput.focus()


form.addEventListener('submit', (elem) => {
    elem.preventDefault()
    Add()
})


function Add() {
    if (document.querySelectorAll('.unordered-list li').length < 5) {
        if (taskInput.value != '') {
            li = document.createElement('li')
            li.innerHTML = taskInput.value
            unorderedList.appendChild(li)

            taskInput.value = ''
            taskInput.focus()
        }
    }
}


addButton.addEventListener("click", Add())


cancelListButton.addEventListener('click', Remove)

function Remove() {
    li = unorderedList.getElementsByTagName('li')
    last = li[li.length - 1]
    unorderedList.removeChild(last)
}




saveListButton.addEventListener('click', () => {
    if (document.querySelector('li')) {
        hide.forEach(e => e.setAttribute('style', 'display: none;'))
        editItems.setAttribute('style', 'display: flex')
    }
})




btnEditList.addEventListener('click', () => {
    hide.forEach(e => e.setAttribute('style', 'display: flex'))
    editItems.removeAttribute('style', 'display')
    editItems.setAttribute('style', 'display: none')
    firstList.removeAttribute('style', 'box-shadow')
})













