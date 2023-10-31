// JavaScript for the image slideshow
const slideshowImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
const slideshowImage = document.getElementById("slideshow-image");
let currentIndex = 0;

function updateSlideshow() {
    slideshowImage.src = slideshowImages[currentIndex];
    currentIndex = (currentIndex + 1) % slideshowImages.length;
}

setInterval(updateSlideshow, 3000);

// JavaScript for form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // You can add more advanced validation here, such as email format validation.

    return true;
}
