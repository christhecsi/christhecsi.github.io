window.onload = function () {
    const storedImage = localStorage.getItem('bck.img');
    if (storedImage) {
        document.body.style.backgroundImage = `url(${storedImage})`;
    } else {
        document.body.style.backgroundImage = `url(./src/images/hero/12.jpg)`;
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".container");
    const monthSelect = document.getElementById("month-select");
    const yearSelect = document.getElementById("year-select");

    function filterPosts() {
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;

        posts.forEach(post => {
            const postMonth = post.getAttribute("data-month");
            const postYear = post.getAttribute("data-year");

            if ((selectedMonth === "all" || postMonth === selectedMonth) &&
                (selectedYear === "all" || postYear === selectedYear)) {
                post.style.display = "flex"; // Show the post
            } else {
                post.style.display = "none"; // Hide the post
            }
        });
    }

    // Listen to changes on the dropdowns
    monthSelect.addEventListener("change", filterPosts);
    yearSelect.addEventListener("change", filterPosts);
});


// Get the modal
const modal = document.getElementById("imgModal");

// Get the image and the modal content (image and caption)
const images = document.querySelectorAll(".daily-promise-logo");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

// Add event listener to all images
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt ;
    });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal image
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
