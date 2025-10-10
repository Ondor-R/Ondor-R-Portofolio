//-------------------------------------------------------------- MENU BURGIR//
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

//--------------------------------------------------------------BOOKIE IMG AT WELCOME SECTION//
const bookieImg = document.querySelector('.bo1-img');

bookieImg.addEventListener('mouseover', () => {
    bookieImg.src = 'img/bob2.webp';
})

bookieImg.addEventListener('mouseout', () => {
    bookieImg.src = 'img/bob1.webp';
})

//--------------------------------------------------------------MODAL//
// Get the modal
var modal = document.getElementById("my_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img");
var imagesDesign = document.querySelectorAll(".img-design");
var imagesArt = document.querySelectorAll(".img-art");

// This part for the design images is fine as it is.
imagesDesign.forEach(img => {
    img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
});

imagesArt.forEach(img => {
    img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
});

const closeBtn = document.querySelector('.close-button');
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// --- Close modal when clicking the background ---
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//--------------------------------------------------------------ARTS SCROLL N LOOP//
const artsContainer = document.querySelector('.arts-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    const scrollAmount = artsContainer.clientWidth;
    artsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    const scrollAmount = artsContainer.clientWidth;
    artsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

//-------------------------------------------------------------- NAVBAR SCROLL EFFECT //
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

//-------------------------------------------------------------- Bookie IMG CLICK ANIMATION //
const bookieLink = document.getElementById('bookie-link');
const bookieNavImg = document.querySelector('.bookie-img');
const welcomeSect = document.getElementById('welcome-nav');

if (bookieLink && bookieNavImg && welcomeSect) {
    bookieLink.addEventListener('click', (event) => {
        event.preventDefault();

        if (window.scrollY === 0) {
            return; 
        }

        bookieNavImg.src = 'img/bo2.webp';

        welcomeSect.scrollIntoView({ behavior: 'smooth' });

        const listenForScrollEnd = () => {
            if (window.scrollY < 5) {
                bookieNavImg.src = 'img/bo1.webp';
                window.removeEventListener('scroll', listenForScrollEnd);
            }
        };

        window.addEventListener('scroll', listenForScrollEnd);
    });
}