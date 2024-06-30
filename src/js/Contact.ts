const submit = document.querySelector("#submit") as HTMLButtonElement;
const fullname = document.querySelector("input[name='name']") as HTMLInputElement;
const mobile = document.querySelector("input[name='mobile']") as HTMLInputElement;
const email = document.querySelector("input[name='email']") as HTMLInputElement;
const desc = document.querySelector("textarea[name='message']") as HTMLInputElement;
const error = document.querySelector(".error") as HTMLSpanElement;

submit.addEventListener("click", async () => {
    fullname.classList.remove("_invalid");
    mobile.classList.remove("_invalid");
    email.classList.remove("_invalid");

    error.innerHTML = "";

    if (fullname.value === "" || mobile.value === "") {
        if (fullname.value === "")
            fullname.classList.add("_invalid");

        if (mobile.value === "")
            mobile.classList.add("_invalid");

        error.innerHTML = "Please fill in all required fields (*).";

        return;
    }

    if (email.value != "") {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            email.classList.add("_invalid");

            error.innerHTML = "Please enter a valid email address.";
            return;
        }
    }

    submit.classList.add("_loading");

    const data = await fetch("/email", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: fullname.value,
            Email: email.value,
            Mobile: mobile.value,
            Message: desc.value
        })
    });

    var result = await data.text();

    submit.classList.remove("_loading");

    if (result === "Done") {
        submit.classList.add("_done");
        error.innerHTML = "Your email has been sent."
        error.style.color = "var(--primaryColor)";
    }
    else
        error.innerHTML = "Error : " + result;

});



