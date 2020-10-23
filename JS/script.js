let slideCounter = 1;

function currentSlide(slide) {
    const slides = document.getElementsByClassName("slides");
    const dot = document.getElementsByClassName("dot");
    slideCounter = slide;
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(let j = 0; j < dot.length; j++) {
        dot[j].classList.remove("active");
    }
    switch (slideCounter) {
        case 1:
            slides[0].style.display = "block";
            dot[0].classList.add("active");
            break;
        case 2:
            slides[1].style.display = "block";
            dot[1].classList.add("active");
            break;
        case 3:
            slides[2].style.display = "block";
            dot[2].classList.add("active");
            break;
        case 4:
            slides[3].style.display = "block";
            dot[3].classList.add("active");
            break;
        case 5:
            slides[4].style.display = "block";
            dot[4].classList.add("active");
            break;
        case 6:
            slides[5].style.display = "block";
            dot[5].classList.add("active");
            break;
        default:
    }
}
currentSlide(1);
 
function plusSlides(btn) {
    btn += slideCounter;
    if(btn === 0) {
        currentSlide(6);
    }
    else if(btn === 7) {
        currentSlide(1);
    }
    else {
        currentSlide(btn);
    }
}