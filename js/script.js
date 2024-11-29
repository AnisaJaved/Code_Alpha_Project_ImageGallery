
function filterImages(category) {
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => {
        const caption = image.querySelector('p').textContent.toLowerCase();
        if (caption.includes(input)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
