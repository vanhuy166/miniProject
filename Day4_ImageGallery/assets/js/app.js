var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var closebtn = document.querySelector('.close');
var galleryImage = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

images.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        currentIndex = index;
        showGallery();
    })
});

closebtn.addEventListener('click', () => {
    gallery.classList.remove('show');
});

prev.addEventListener('click', function() {
    if (currentIndex >= 0) {
        currentIndex--;

        console.log(currentIndex)
        showGallery()
    }
});

next.addEventListener('click', function() {
    if (currentIndex <= images.length - 1) {
        currentIndex++;
        showGallery()
    }
});

function showGallery() {
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}