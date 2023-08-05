let btn = document.getElementById('toggle-btn')
let nav = document.getElementById('nav-links')

btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
    // btn.classList.replace("fa-solid fa-bars","fa-solid fa-xmark")
})
