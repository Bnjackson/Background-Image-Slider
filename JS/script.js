let currentSlide = 1;
const backgroundImage = document.querySelector(".background-image")
const slideNumber = document.getElementById("slide-number");
const caption = document.getElementById("caption");
const dots = document.getElementsByClassName("dot");

const nextSlide = document.querySelector(".next");
nextSlide.addEventListener("click", function() {
    if(currentSlide === 1) {
        currentSlide++;
        backgroundImage.style.backgroundImage = "url('/Media/image2.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Two";
    }
    else if(currentSlide === 2) {
        currentSlide++;
        backgroundImage.style.backgroundImage = "url('/Media/image3.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Three";
    } 
    else if(currentSlide === 3) {
        currentSlide++;
        backgroundImage.style.backgroundImage = "url('/Media/image4.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Four";
    }
    else if(currentSlide === 4) {
        currentSlide++;
        backgroundImage.style.backgroundImage = "url('/Media/image5.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Five";
    }
    else if(currentSlide === 5) {
        currentSlide++;
        backgroundImage.style.backgroundImage = "url('/Media/image6.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Six";
    }
});

const previousSlide = document.querySelector(".previous");
previousSlide.addEventListener("click", function() {
    if(currentSlide === 2) {
        currentSlide--;
        backgroundImage.style.backgroundImage = "url('/Media/image1.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Text";
    }
    else if(currentSlide === 3) {
        currentSlide--;
        backgroundImage.style.backgroundImage = "url('/Media/image2.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Two";
    }
    else if(currentSlide === 4) {
        currentSlide--;
        backgroundImage.style.backgroundImage = "url('/Media/image3.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Three";
    }
    else if(currentSlide === 5) {
        currentSlide--;
        backgroundImage.style.backgroundImage = "url('/Media/image4.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Four";
    }
    else if(currentSlide === 6) {
        currentSlide--;
        backgroundImage.style.backgroundImage = "url('/Media/image5.jpg')";
        slideNumber.textContent = currentSlide + " / 6";
        caption.textContent = "Caption Five";
    }
});
