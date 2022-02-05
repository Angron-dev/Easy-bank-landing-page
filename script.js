const navBtns = document.querySelector("#nav--btns")
const hamburger = document.querySelector("#hamburger")
const closeBtn = document.querySelector(".close-btn")
const navUl = document.querySelector("#nav--ul")
const navBg = document.querySelector(".nav-bg")

navBtns.addEventListener("click", function () {
    navUl.classList.toggle("active-ul")
    navBg.classList.toggle("active")
    hamburger.classList.toggle("deactive")
    closeBtn.classList.toggle("active")
})
