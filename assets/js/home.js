const navBarIcon = document.querySelector(".navBar .navBar_icon");
const navBarClose = document.querySelector(".navBar .navBar_close");
const navBarGroup = document.querySelector(".navBar .navBar_group");

navBarIcon.addEventListener("click", function () {
    navBarClose.style.display = "inline-block";
    navBarGroup.style.display = "flex";
    navBarIcon.style.display = "none";
});

navBarClose.addEventListener("click", function () {
    navBarClose.style.display = "none";
    navBarGroup.style.display = "none";
    navBarIcon.style.display = "inline-block";
});

window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width > 768) {
        navBarClose.style.display = "none";
        navBarIcon.style.display = "none";
        navBarGroup.style.display = "flex";
    } else {
        navBarIcon.style.display = "inline-block";
        navBarGroup.style.display = "none";
        navBarClose.style.display = "none";
    }
});
