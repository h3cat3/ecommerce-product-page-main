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
    
    function changeImage(thumb) {
         mainImage.src = thumb.src;
    }
    //transforming the main image
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
           changeImage(thumb);
            
        })
    })

    //arrow buttons
    const previewBtn = document.getElementById('preview');
    const nextBtn = document.getElementById('next');
    let index = 0;
    previewBtn.addEventListener('click', () => {
        if (index > 0) {
            index -= 1;
            changeImage(thumbnails[index]);
        }
    })
    nextBtn.addEventListener('click', () => {
        if (index < thumbnails.length) {
            index += 1;
            changeImage(thumbnails[index]);
        }
    })

    //modal gallery for screens bigger than 1024px
    const modal = document.getElementById('gallery');
    const modalContent =document.getElementById('modal');
    const galleryClose =  document.getElementById('close-gallery');
    mainImage.addEventListener('click', () => {
        if (window.innerWidth >= 1024) {
            modal.classList.add('modal');
            modalContent.classList.add('modal-content')
            galleryClose.style.display= 'block';
            galleryClose.style.paddingBottom = '1rem';
            galleryClose.style.marginLeft = 'auto'
            previewBtn.style.display = 'block';
            previewBtn.style.marginRight = '-1.5rem';
            nextBtn.style.display = 'block';
            nextBtn.style.marginLeft = '-1.5rem';
            galleryClose.addEventListener('click', () => {
                modal.classList.remove('modal');
                modalContent.classList.remove('modal-content');
                galleryClose.style.display = 'none'
                previewBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            })
        }
    })

})