let popup = document.querySelector('.popup')
let popupLink = document.querySelector('.popup-link')
let header = document.querySelector('.header')
popupLink.addEventListener('click', ()=> {
    popup.classList.add('open');
    header.classList.add('.lock-padding')
})
let close = document.querySelector('.popup__close')
close.addEventListener('click', ()=> {
    popup.classList.remove('open');
    header.classList.remove('.lock-padding')
})
