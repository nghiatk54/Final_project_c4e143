let width = screen.width;
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
