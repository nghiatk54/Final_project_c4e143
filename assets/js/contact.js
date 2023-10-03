document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.querySelector(".contact_form");
    const emailEl = document.querySelector(".email_content");
    const message = document.querySelector(".message_content");

    // Submit form save data in local storage
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!localStorage.getItem("contact")) {
            const contact = [{ email: emailEl.value, message: message.value }];
            localStorage.setItem("contact", JSON.stringify(contact));
        } else {
            const contact_old = JSON.parse(localStorage.getItem("contact"));
            const contact_new = [
                ...contact_old,
                { email: emailEl.value, message: message.value },
            ];
            localStorage.setItem("contact", JSON.stringify(contact_new));
        }
        emailEl.value = "";
        message.value = "";
    });
});
