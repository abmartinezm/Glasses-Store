const slider= document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

console.log(sliderSectionLast);


const btnLeft=document.querySelector('#btn-left');
const btnRight=document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft="-100%";  
    },500);
}


///Left

function moveLeft(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft="-0%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft="-100%";  
    },500);
}

btnRight.addEventListener('click',()=>{
    moveRight();
});

btnLeft.addEventListener('click',()=>{
    moveLeft();
});

setInterval(function(){
    moveRight();
},5000);



/**No slider */


