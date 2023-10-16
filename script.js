let cursor = document.querySelector('.cursor-div');

document.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});