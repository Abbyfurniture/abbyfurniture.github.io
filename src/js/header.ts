import { CorePopup } from "./cloud-components";

const side = document.querySelector("#contentside") as HTMLDivElement;
const menuBurger = document.querySelector(".menu") as HTMLDivElement;

const content = side.innerHTML;

if (content)
    side.remove();

menuBurger.addEventListener("click", function () {
    document.querySelector("html").classList.add("_noscroll")
    CorePopup.open(content);

    $("#closeSide").on('click', function () {
        document.querySelector("html").classList.remove("_noscroll")
        const menuClose = document.querySelector(".sidebar") as HTMLDivElement;

        menuClose.remove();
        window.history.back();
    });

});


document.addEventListener('DOMContentLoaded', () => {
    checkScrollHeight();
});

window.addEventListener('scroll', () => {
    checkScrollHeight();
});

function checkScrollHeight() {
    const scrollHeight = window.scrollY;
    const html = document.querySelector('html');

    if (scrollHeight > 55) {
        html.classList.add('_scroll');
    } else {
        html.classList.remove('_scroll');
    }
}



