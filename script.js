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

    //modal gallery for screens bigger than 768px
    const modal = document.getElementById('gallery');
    const modalContent =document.getElementById('modal');
    const galleryClose =  document.getElementById('close-gallery');
    mainImage.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
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

    //quantity
    const quantity = document.getElementById('quantity');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    
    minus.addEventListener('click', () => {
        let qty = parseInt(quantity.innerText, 10);
        if (qty > 0) {
            qty --;
            quantity.innerText = qty;
        }
    })
    plus.addEventListener('click', () => {
        let qty = parseInt(quantity.innerText, 10);
        qty ++;
        quantity.innerText = qty
    })
    //add to cart
    let cart = [];

    function addToCart(image, name, price, quantity) {
         console.log(image);
        console.log(name);
        console.log(price);
        console.log(quantity);
        const item = cart.find(product => product.name === name);
        if (item) {
            item.quantity = Number(item.quantity) + Number(quantity);
        } else {
            cart.push({image,name,price,quantity});
            console.log(cart)
        }
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = ''; 
        cart.forEach(product => {
            console.log(product.quantity)
            const li = document.createElement('li');
            li.innerHTML = `<img hight="50" width="50" src='${product.image}' alt=''>
            <p>product${product.name} - ${product.price} x ${product.quantity}</p>
            <img id="delet" src="images/icon-delete.svg" alt="delete">`;
            li.classList.add('flex-row');
            const checkoutBtn = document.getElementById('checkout');
            checkoutBtn.style.display = 'block';
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            cartItems.appendChild(li);
            cartCounter.innerText = product.quantity;
            document.getElementById('delet').addEventListener('click', () => {
                li.remove;
                cart = [];
                cartCounter.innerHTML = "";
                cartItems.innerHTML= 'Your cart is empty';
                checkoutBtn.style.display = 'none';
            })
            checkoutBtn.addEventListener('click', () => {
                li.remove;
                cart = [];
                cartCounter.innerHTML = "";
                cartItems.innerHTML= 'Your cart is empty';
                checkoutBtn.style.display = 'none';
            })
        })
        
    }
   

   
    
    const addCart = document.getElementById('add-cart');
    const name = document.getElementById('name');
    const price = document.getElementById('price');

    addCart.addEventListener('click', () => {
        addToCart(mainImage.src, name.innerText,price.innerText,quantity.innerText );
       
    })
})

//open close the cart box
    let display = false;
    const openCart =document.getElementById('cart');
    const cartBox = document.getElementById('cart-box')

    openCart.addEventListener('click', () => {
        if (!display) {
        cartBox.style.display = 'block'; 
        display = true;
    } else {
        cartBox.style.display = 'none';
        display = false;
    }
        
    })

    const cartCounter = document.getElementById('cart-count')

