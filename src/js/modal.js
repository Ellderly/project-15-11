import makeid from "./createText";

export const modal = document.querySelector('.modal')
export const modalWrapper = document.querySelector('.modal-wrapper')


modal.innerHTML = makeid(50)
modalWrapper.addEventListener('click', e => {
    if (e.target === modalWrapper) {
        modalWrapper.classList.add('remove')
    }
})


