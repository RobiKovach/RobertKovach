const popupHeaderLink = document.querySelector('.banner-button')
const headerPopup = document.querySelector('.popup-header')
const popupClose = document.querySelector('.popup-heder-close')


popupHeaderLink.addEventListener('click', (event) => {
    event.preventDefault()
    headerPopup.style.display = "flex"
})
popupClose.addEventListener('click', (event) => {
    event.preventDefault()
    headerPopup.style.display = ""
})