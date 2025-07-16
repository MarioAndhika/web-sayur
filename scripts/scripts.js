document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produk telah ditambahkan ke keranjang!');
        });
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Set interval untuk mengganti slide setiap 3 detik
setInterval(showNextSlide, 3000);
