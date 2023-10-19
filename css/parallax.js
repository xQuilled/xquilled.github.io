let bodyElem;
let cardElem;

document.addEventListener("mousemove", parallax);
document.addEventListener("DOMContentLoaded", function () {
    bodyElem = document.querySelector("body");
    cardElem = document.querySelector(".container");
});

// Parallax effect
function parallax(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    bodyElem.style.backgroundPosition = `${50 - (mouseX - w) * -0.01}% ${50 - (mouseY - h) * 0.01}%`;
    cardElem.style.top = `${50 - (mouseY - h) * 0.005}%`;
    cardElem.style.left = `${50 - (mouseX - w) * 0.005}%`;
}
