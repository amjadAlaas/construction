let statsCounters = document.querySelectorAll(".statistics .content span");
let speed = 200;

let statsSection = document.querySelector(".statistics");

window.onscroll = function () {

    //Skills Offset Top
    let statsOffsetTop = statsSection.offsetTop;

    // Skills outerHeight
    let statsOuterHeight = statsSection.offsetHeight;

    //Window Height
    let windowHeight = this.innerHeight;

    //Window ScrollTop
    let windowScrollTop = this.scrollY;

    if (windowScrollTop >= (statsOffsetTop + statsOuterHeight - windowHeight)) {

        let speed = 200;
        statsCounters.forEach((counter) => {

            function updateCounter() {
                const targetNumber = +counter.dataset.target;
                const initialNumber = +counter.innerText;
                const incPerCount = targetNumber / speed;
                if (initialNumber < targetNumber) {

                    counter.innerText = Math.ceil(initialNumber + incPerCount);
                    setTimeout(updateCounter, 50);

                }
                
            }
            updateCounter();

        });

    }

}

// Carousel
let boxes = document.querySelectorAll('.carousel .box');
let bullets = document.querySelectorAll('.carousel .bullets span');
let i = 0;

var slideShow = function () {

    if (i < boxes.length) {
        boxes.forEach((box) => {
            box.classList.remove("active");
        });
        bullets.forEach((box) => {
            box.classList.remove("active");
        });
        boxes[i].classList.add("active");
        bullets[i].classList.add("active");
        i++;
    } else {
        i = 0;
    }
    
    setTimeout(slideShow, 1000);
};
slideShow();
