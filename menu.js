let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlu = document.getElementById('overlu-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
overlu-menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
