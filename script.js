document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const images = document.querySelectorAll(".carousel-container img");
    let currentIndex = 0;

    nextButton.addEventListener("click", function() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    });

    prevButton.addEventListener("click", function() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.display = "block";
    });
});
