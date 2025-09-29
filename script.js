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
    bookieImg.src = 'img/bo2.png';
})

bookieImg.addEventListener('mouseout', () => {
    bookieImg.src = 'img/bo1.png';
})

//--------------------------------------------------------------MODAL//
// Get the modal
var modal = document.getElementById("my_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img");
var imagesDesign = document.querySelectorAll(".img-design");

// This part for the design images is fine as it is.
imagesDesign.forEach(img => {
    img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
});

// --- Close modal when clicking the background ---
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//--------------------------------------------------------------ARTS SCROLL N LOOP//
const artsWrapper = document.querySelector('.arts-wrapper');
const artsContainer = document.querySelector('.arts-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 1. SETUP: CLONE ITEMS FOR INFINITE LOOP
const artItems = Array.from(artsContainer.children);
artItems.forEach(item => {
    artsContainer.appendChild(item.cloneNode(true));
});
artItems.slice().reverse().forEach(item => {
    artsContainer.prepend(item.cloneNode(true));
});

artsContainer.style.scrollBehavior = 'auto';
artsContainer.scrollLeft = artsContainer.offsetWidth;
artsContainer.style.scrollBehavior = 'smooth';

// 2. LOGIC: HANDLE JUMPS FOR BUTTONS
const handleInfiniteScroll = () => {
    const itemWidth = artsContainer.offsetWidth;
    if (artsContainer.scrollLeft >= artsContainer.scrollWidth - itemWidth) {
        artsContainer.style.scrollBehavior = 'auto';
        artsContainer.scrollLeft = itemWidth;
        artsContainer.style.scrollBehavior = 'smooth';
    }
    if (artsContainer.scrollLeft <= 0) {
        artsContainer.style.scrollBehavior = 'auto';
        artsContainer.scrollLeft = artsContainer.scrollWidth - (2 * itemWidth);
        artsContainer.style.scrollBehavior = 'smooth';
    }
};

// 3. AUTO-SCROLL AND PAUSE-ON-HOVER LOGIC
let autoScrollInterval;

const startAutoScroll = () => {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        artsContainer.scrollLeft += 1;
        handleInfiniteScroll();
    }, 30);
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
};

// 4. EVENT LISTENERS
nextBtn.addEventListener('click', () => {
    const scrollAmount = artsContainer.clientWidth;
    artsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    const scrollAmount = artsContainer.clientWidth;
    artsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

artsContainer.addEventListener('scrollend', handleInfiniteScroll);
artsWrapper.addEventListener('mouseover', stopAutoScroll);
artsWrapper.addEventListener('mouseout', startAutoScroll);

// 5. INITIAL START
startAutoScroll();

// --- MOVED HERE: Attach modal click to ALL art images (originals + clones) ---
var imagesArt = document.querySelectorAll(".img-art");
imagesArt.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});