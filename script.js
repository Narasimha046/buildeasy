document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('scrolling-container');
    let images = container.querySelectorAll('.image');

    function cloneImages() {
        images.forEach(image => {
            let clone = image.cloneNode(true);
            container.appendChild(clone);
        });
    }

    cloneImages();

    let scrollDistance = 0;
    let scrollSpeed = 1;

    function loopImages() {
        scrollDistance += scrollSpeed;

        if (scrollDistance >= images[0].offsetWidth) {
            container.removeChild(images[0]);
            scrollDistance = 0;
            cloneImages();
        }

        container.style.transform = `translateX(${-scrollDistance}px)`;

        requestAnimationFrame(loopImages);
    }

    loopImages();
});
document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = [
        'images/bg1.png', 
        'images/bg2.jpeg', 
        'images/bg3.jpeg'
    ]; // Add paths to your background images

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        const backgroundImageElement = document.getElementById('background-image');
        backgroundImageElement.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        setTimeout(changeBackgroundImage, 5000); // Change image every 5 seconds
    }

    changeBackgroundImage();
});
