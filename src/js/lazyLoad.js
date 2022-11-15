function loadMore(container ,createCard) {
    const loadMoreBlockPosHeight = container.getBoundingClientRect().top + scrollY;
    const loadMoreBlockHeight = container.offsetHeight
    const windowHeight = document.documentElement.clientHeight

    const loadMoreBlockPosWidth = container.getBoundingClientRect().left + scrollX;
    const loadMoreBlockWidth = container.offsetWidth
    const windowWidth = document.documentElement.clientWidth



    if (document.body.clientWidth > 768){
        if (scrollY >= (loadMoreBlockPosHeight + loadMoreBlockHeight) - windowHeight - 100) {
            createCard('')
            createCard('')
            createCard('')
        }
    }
    if(document.body.clientWidth < 768){
        if (scrollX > (loadMoreBlockPosWidth + loadMoreBlockWidth) - windowWidth - 100){
            createCard('');

        }
    }
}

export default loadMore;