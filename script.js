document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumb');

    //transforming the main image
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const largeImageSrc = this.dataset.large;
            mainImage.src = thumb.src;
            console.log(largeImageSrc);
        })
    })
})