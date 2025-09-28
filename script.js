//--------------------------------------------------------------//
const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        navContent.classList.remove("active");
    }
})

//--------------------------------------------------------------//
const bookieImg = document.querySelector('.bo1-img');

bookieImg.addEventListener('mouseover', () => {
    bookieImg.src = 'img/bo2.png';
})

bookieImg.addEventListener('mouseout', () => {
    bookieImg.src = 'img/bo1.png';
})