let menubar = document.querySelector('#menu-bar')
let mynav = document.querySelector('.navbar')
let adcart = document.querySelector('.add-to-cart')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active ')
}

cart.onclick = () =>{
    adcart.classList.toggle('active')
}