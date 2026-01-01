document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumb');

    //open menu for small screens
    const openMenu = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close');
    openMenu.addEventListener('click', () => {
        menu.classList.add('menu-mobile');
        menu.classList.remove('menu');
        closeBtn.style.display = 'block';
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('menu-mobile');
            menu.classList.add('menu');
            closeBtn.style.display = 'none';
        })
    })
    //transforming the main image
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const largeImageSrc = this.dataset.large;
            mainImage.src = thumb.src;
            console.log(largeImageSrc);
        })
    })
})