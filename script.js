
const myfromdata = document.querySelector("#contact form");

myfromdata.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        {
            input: document.getElementById("name"),
            error: document.getElementById("nameErr"),
            message: "Name is required"
        },
        {
            input: document.getElementById("mobile"),
            error: document.getElementById("mobileErr"),
            message: "Mobile is required"
        },
        {
            input: document.getElementById("email"),
            error: document.getElementById("emailErr"),
            message: "Email is required"
        },
        {
            input: document.getElementById("message"),
            error: document.getElementById("messageErr"),
            message: "Message is required"
        }
    ];

    const successMsg = document.getElementById("successMsg");
    let isvalid = true;

    successMsg.style.display = "none";

    fields.forEach(function(field) {
        field.error.textContent = "";
        field.input.classList.remove("input-error");

        if (field.input.value.trim() === "") {
            field.error.textContent = field.message;
            field.input.classList.add("input-error");
            isvalid = false;
        }
    });

    const email = document.getElementById("email");

    if (email.value.trim() !== "" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById("emailErr").textContent =
            "Please enter a valid email";
        email.classList.add("input-error");
        isvalid = false;
    }

    if (isvalid) {
        successMsg.textContent =
            "✓ Successfully! Your message has been submitted.";
        successMsg.style.display = "block";

        myfromdata.reset();

        fields.forEach(function(field) {
            field.input.classList.remove("input-error");
            field.error.textContent = "";
        });
    }
});























