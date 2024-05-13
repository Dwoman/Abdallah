let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel ,thumbnail');

nextDom.onclick = function(){
    showslider('next')
}
prevDom.onclick =function(){
    showslider('prev') 
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
    },timeAutoNext);
function showslider(type){
    let itemslider = document .querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listitemDom.appendChild(itemslider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionlastItem = itemslider.length -1;
        listitemDom.prepend(itemslider[positionlastItem]);
        thumbnailDom.prepend(itemthumbnail[positionlastItem]);
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
    nextDom.click();
    }, timeAutoNext)
}