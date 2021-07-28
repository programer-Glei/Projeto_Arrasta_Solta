
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeaver);
    area.addEventListener('drop', Drop);
})

//functions item
function dragStart(e){
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}

//functions area
function dragOver(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover')
}

function dragLeaver(e){
    e.currentTarget.classList.remove('hover')
}

function Drop(e){
    e.currentTarget.classList.remove('hover')

    let dragItem = document.querySelector('.item.dragging')

    if(e.currentTarget.querySelector('.item') == null){
        e.currentTarget.appendChild(dragItem)
    }
}