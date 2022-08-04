let statsCounters = document.querySelectorAll(".statistics .content span");
let speed = 200;


function xx() {
    statsCounters.forEach((counter, index) => {
    
        function updateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
                counter.innerText = Math.ceil(initialNumber + incPerCount);
                setTimeout(updateCounter, 40);
            }
        }
        updateCounter();
        
    });
}



window.addEventListener("scroll", function () {
    
    
    //window scroll top
    let statsSection = document.querySelector(".statistics");
    const windowScrollTop = this.scrollY;
    if (windowScrollTop > statsSection.outerHeight + statsSection.offsetHeight) {
        xx();
        ;
    }
});
console.log("y");
        console.log(statsSection);
        console.log(statsSection.offsetHeight);