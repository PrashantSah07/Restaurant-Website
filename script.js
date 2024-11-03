let menuButton = document.querySelector(".menu-svg");
let mobileNavigation = document.querySelector(".mobile-navigation");
let body = document.querySelector("body");


menuButton.addEventListener("click", function () {
    let is_visibile = mobileNavigation.classList.contains("show")

    if (is_visibile) {
        mobileNavigation.classList.remove('show')
        body.style.overflow = "auto";
    } else {
        mobileNavigation.classList.add('show')
        body.style.overflow = "hidden";
    }
});
