
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('draover', dragOver)
    area.addEventListener('dragleave', dragLeaver)
    area.addEventListener('drop', Drop)
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

}

function dragLeaver(e){

}

function Drop(e){
    
}