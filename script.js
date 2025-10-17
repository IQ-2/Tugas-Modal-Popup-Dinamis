const Buka = document.getElementById('Buka');
const Background = document.querySelector('.Background');
const Modal = document.querySelector('.isi-modal');
const Tutup = document.getElementById('Tutup');

Buka.addEventListener('click', () =>{
    Modal.style.display = 'block';
    Background.style.display = 'block';
});

Tutup.addEventListener('click', () =>{
    Modal.style.display = 'none';
    Background.style.display = 'none';
});

Background.addEventListener('click', () => {
    Modal.style.display = 'none';
    Background.style.display = 'none';
});
