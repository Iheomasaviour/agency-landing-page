

const menuButton = document.querySelector(".contact-btn")
const navBar = document.querySelector(".nav")
// const closeButton = document.querySelector(".fa-circle-xmark")

menuButton.addEventListener("click", () => {
    navBar.style.display = "flex"
    console.log("menu is clicked")
})