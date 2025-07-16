// Image Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

const moveToSlide = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
});

// Auto-advance carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
}, 5000); 