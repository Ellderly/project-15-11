function centerCard(container) {
    if (container.children.length <=4){
        container.classList.add('centerCard')
    }
    else{
        container.classList.remove('centerCard')
    }
}


export default centerCard;