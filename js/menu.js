const menuBtn1 = document.querySelector('.menu-link-home')
const menuDescription1 = document.querySelector('.p-menu-home')

menuBtn1.addEventListener('mouseenter', () => {
    menuDescription1.style.opacity = '1'
    menuDescription1.style.display = 'flex'
    menuDescription1.style.visibility = 'visible'
    
})

menuBtn1.addEventListener('mouseleave', () => {
    menuDescription1.style.opacity = '0'
    menuDescription1.style.visibility = 'hidden'
})
const menuBtn2 = document.querySelector('.menu-link-services')
const menuDescription2 = document.querySelector('.p-menu-services')

menuBtn2.addEventListener('mouseenter', () => {
    menuDescription2.style.opacity = '1'
    menuDescription2.style.display = 'flex'
    menuDescription2.style.visibility = 'visible'
})

menuBtn2.addEventListener('mouseleave', () => {
    menuDescription2.style.opacity = '0'
    menuDescription2.style.visibility = 'hidden'
})
const menuBtn4 = document.querySelector('.menu-link-portfolio')
const menuDescription4 = document.querySelector('.p-menu-portfolio')

menuBtn4.addEventListener('mouseenter', () => {
    menuDescription4.style.opacity = '1'
    menuDescription4.style.display = 'flex'
    menuDescription4.style.visibility = 'visible'
})

menuBtn4.addEventListener('mouseleave', () => {
    menuDescription4.style.opacity = '0'
    menuDescription4.style.visibility = 'hidden'
})
const menuBtn5 = document.querySelector('.menu-link-contact')
const menuDescription5 = document.querySelector('.p-menu-contact')

menuBtn5.addEventListener('mouseenter', () => {
    menuDescription5.style.opacity = '1'
    menuDescription5.style.display = 'flex'
    menuDescription5.style.visibility = 'visible'
})

menuBtn5.addEventListener('mouseleave', () => {
    menuDescription5.style.opacity = '0'
    menuDescription5.style.visibility = 'hidden'
})

