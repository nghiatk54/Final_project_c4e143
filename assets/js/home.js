document.addEventListener("DOMContentLoaded", function () {
    const navBarIcon = document.querySelector(".navBar .navBar_icon");
    const navBarClose = document.querySelector(".navBar .navBar_close");
    const navBarGroup = document.querySelector(".navBar .navBar_group");

    // Nav bar responsive
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

    // Action navbar scroll
    const headerBar = document.querySelector("#headerBar");
    var oldScrollTop = document.documentElement.scrollTop;
    window.addEventListener("scroll", function (e) {
        var currentScrollTop = document.documentElement.scrollTop;
        if (currentScrollTop > headerBar.offsetHeight) {
            if (currentScrollTop > oldScrollTop) {
                headerBar.classList.remove("headerBar");
            } else {
                headerBar.classList.add("headerBar");
            }
            oldScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        } else {
            headerBar.classList.remove("headerBar");
        }
    });

    // Action sign up
    const signUpEl = document.querySelector(".signUp");
    const signUpFormEl = document.querySelector(".signUp .signUp_form");
    const closeEl = document.querySelector(".signUp .signUp_form .iconClose");
    const buttonSignUpEl = document.querySelector(
        "header .content .content_body .btn"
    );
    const nameEl = document.querySelector(".signUp .name .name_content");
    const emailEl = document.querySelector(".signUp .email .email_content");
    const passwordEl = document.querySelector(
        ".signUp .password .password_content"
    );
    const confirmPasswordEl = document.querySelector(
        ".signUp .password .password_content-confirm"
    );
    // Hidden and view form sign up
    closeEl.addEventListener("click", function () {
        signUpEl.style.display = "none";
    });
    buttonSignUpEl.addEventListener("click", function () {
        signUpEl.style.display = "flex";
    });
    signUpEl.addEventListener("click", function (e) {
        if (e.target.closest(".signUp_form")) {
            return;
        }
        signUpEl.style.display = "none";
    });

    // Submit form sign up
    signUpFormEl.addEventListener("submit", function (e) {
        e.preventDefault();
        if (passwordEl.value.length < 6) {
            alert("Password must contain at least 6 characters!");
        } else if (passwordEl.value !== confirmPasswordEl.value) {
            alert("Confirm password does not match");
            passwordEl.value = "";
            confirmPasswordEl.value = "";
        } else {
            if (!localStorage.getItem("user")) {
                let user = [
                    {
                        username: nameEl.value,
                        email: emailEl.value,
                        password: passwordEl.value,
                    },
                ];
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                let user_old = JSON.parse(localStorage.getItem("user"));
                let user_curr = [
                    ...user_old,
                    {
                        username: nameEl.value,
                        email: emailEl.value,
                        password: passwordEl.value,
                    },
                ];
                localStorage.setItem("user", JSON.stringify(user_curr));
            }
            nameEl.value = "";
            emailEl.value = "";
            passwordEl.value = "";
            confirmPasswordEl.value = "";
            alert("Account registration successful");
        }
    });

    // Action login
    const loginEl = document.querySelector(".login");
    const loginFormEl = document.querySelector(".login .login_form");
    const closeLoginEl = document.querySelector(
        ".login .login_form .iconClose"
    );
    const buttonLoginEl = document.querySelector(
        "header .navBar .navBar_group .login-btn"
    );
    const nameLoginEl = document.querySelector(".login .name .name_content");
    const passwordLoginEl = document.querySelector(
        ".login .password .password_content"
    );

    // Hidden and view form sign up
    closeLoginEl.addEventListener("click", function () {
        loginEl.style.display = "none";
    });
    buttonLoginEl.addEventListener("click", function () {
        loginEl.style.display = "flex";
    });
    loginEl.addEventListener("click", function (e) {
        if (e.target.closest(".login_form")) {
            return;
        }
        loginEl.style.display = "none";
    });

    // Submit form sign up
    loginFormEl.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!localStorage.getItem("user")) {
            alert("Please register for an account!");
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            let userLength = user.length;
            let nameCurr = nameLoginEl.value;
            let passwordCurr = passwordLoginEl.value;
            for (let i = 0; i < userLength; i++) {
                if (
                    user[i].username === nameCurr &&
                    user[i].password === passwordCurr
                ) {
                    alert("Logged in successfully!");
                    nameLoginEl.value = "";
                    passwordLoginEl.value = "";
                    loginEl.style.display = "none";
                    return;
                }
            }
            alert("Login information is incorrect!");
            nameLoginEl.value = "";
            passwordLoginEl.value = "";
        }
    });
});
