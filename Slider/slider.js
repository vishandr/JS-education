let offset = 0 // смещение от левого края
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset -= 100;
    if (offset < -300) offset = 0;
    sliderLine.style.left = offset + '%';
})

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset += 100;
    if (offset > 0) offset = -300;
    sliderLine.style.left = offset + '%';
})
