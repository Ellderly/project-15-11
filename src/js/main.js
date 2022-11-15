import '../style.css'
import '../index.html'
import centerCard from "./centerFile";
import makeid from "./createText";
import {modal, modalWrapper} from "./modal";
import preloader from "./preloader";
import loadMore from "./lazyLoad";
import localTodo from "./localStorage";
import {logPlugin} from "@babel/preset-env/lib/debug";


const addCard = document.querySelector('.addCard')
const removeCard = document.querySelector('.removeCard')
const allCard = document.querySelector('.fullCard')
const removeAll = document.querySelector('.removeAll')

const container = document.querySelector('.container')


addCard.addEventListener('click', () => {
    createCard(3000)
})
removeCard.addEventListener('click', deleteCard)
removeAll.addEventListener('click', removeCards)
allCard.addEventListener('click', createAllCards)



function createCard(time) {

    const newCard = document.createElement("div")
    const deleteCard = document.createElement('button')

    newCard.className = 'card';
    newCard.innerHTML = `<h3>${makeid(5)}</h3><p>${makeid(15)}</p>`;

    deleteCard.className = 'deleteCard'

    newCard.append(deleteCard)

    container.appendChild(preloader)

    setTimeout(() => {
        preloader.remove()
        container.appendChild(newCard)
        localTodo(container)
    }, time)

    centerCard(container)
}

function deleteCard() {
    container.lastChild.remove()
    localTodo(container)
    console.log(container)
    centerCard(container)
    window.removeEventListener('scroll', lazyLoad)
}

function createAllCards() {
    allCard.classList.add('active')
    centerCard(container)
    allCard.disabled = true;


    const key = setInterval(() => {

        createCard()
        console.log(container)
        localTodo(container)

        if (container.clientHeight > document.documentElement.getBoundingClientRect().bottom){
            container.lastChild.remove()
            container.lastChild.remove()
            clearInterval(key)
        }
        if (container.clientWidth < container.scrollWidth){
            clearInterval(key)
        }

    },  5)

    window.addEventListener('scroll', lazyLoad)
}

function removeCards() {

    while(container.children.length > 1){
        container.removeChild(container.lastChild)
    }
    centerCard(container)
    localTodo(container)
    window.removeEventListener('scroll',lazyLoad)

}

function lazyLoad() {
    loadMore(container, createCard)
}

window.addEventListener('click', e => {
    if(e.target.classList.contains('deleteCard')){
        e.target.parentNode.remove()
        localStorage.setItem('todos', container.innerHTML)
    }
    if((e.target.parentNode.classList.contains('card') || e.target.classList.contains('card')) && !e.target.classList.contains('deleteCard')){
        modalWrapper.classList.remove('remove')
        modal.innerHTML = e.target.closest('.card').textContent
    }
})


if (localStorage.getItem('todos')) {
    container.innerHTML = localStorage.getItem('todos')
    centerCard(container)
}

window.addEventListener('scroll', e => {
    console.log(container.scrollWidth);
})
