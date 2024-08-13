var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");
var currentIndex = 0;
var images = document.querySelectorAll('.img-gallery img');

function openfullImg(index) {
    currentIndex = index;
    fullimg.src = images[currentIndex].src;
    fullimgbox.style.display = "flex";
}

function closefullImg() {
    fullimgbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    fullimg.src = images[currentIndex].src;
}
