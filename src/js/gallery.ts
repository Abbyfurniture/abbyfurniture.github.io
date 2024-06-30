let isPopupOpen = false;
let indexActive = 0;


const images = document.querySelectorAll("img");

images.forEach((image, index) => {
    image.addEventListener("click", function () {
        if (!isPopupOpen) {
            AddPopup(image.src);
            isPopupOpen = true;
            indexActive = index;
        }
    });
});
document.addEventListener("keydown", function (event: KeyboardEvent) {
    if ((event.key === "Escape" || event.keyCode === 27) && isPopupOpen) {
        const section = document.querySelector(".popup");
        if (section) {
            section.remove();
            document.querySelector("html")?.classList.remove("_noscrollPopup");
            isPopupOpen = false;
            indexActive = 0;
        }
    }
    if (event.key === "ArrowLeft") {
        if (isPopupOpen) {
            indexActive--;
            ChangeContent(indexActive);
        }
    } else if (event.key === "ArrowRight") {
        if (isPopupOpen) {
            indexActive++;
            ChangeContent(indexActive);
        }
    }
});
export function ChangeContent(index) {
    const popupImage = document.querySelector(".popup-image") as HTMLImageElement;
    if (index > images.length-1) {
        index = 0;
    } else if (index < 0) {
        index = images.length-1;
    }
    indexActive = index;
    popupImage.src = images[indexActive].src;
}

export function AddPopup(imageUrl) {
    const section = document.createElement("aside");
    section.classList.add("popup");

    const article = document.createElement("article");
    const image = document.createElement("img");
    image.classList.add("popup-image");
    image.src = imageUrl;
    image.alt = "gallery image";
    article.appendChild(image);

    const closeButton = document.createElement("button");
    closeButton.classList.add("popup-close");
    closeButton.innerText = "X";

    section.appendChild(article);
    section.appendChild(closeButton);

    document.body.appendChild(section);
    document.querySelector("html")?.classList.add("_noscrollPopup");
    isPopupOpen = true;

    let startX = 0;
    let startY = 0;

    const touchStartListener = (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    };

    const touchEndListener = (event) => {
        const diffX = event.changedTouches[0].clientX - startX;
        const diffY = event.changedTouches[0].clientY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                indexActive++;
                ChangeContent(indexActive);
            } else {
                indexActive--;
                ChangeContent(indexActive);
            }
        }
    };

    const closePopup = () => {
        document.body.removeChild(section);
        document.querySelector("html")?.classList.remove("_noscrollPopup");
        isPopupOpen = false;
        document.removeEventListener("touchstart", touchStartListener);
        document.removeEventListener("touchend", touchEndListener);
    };

    setTimeout(() => {
        document.addEventListener("touchstart", touchStartListener);
        document.addEventListener("touchend", touchEndListener);
    }, 100);

    closeButton.addEventListener("click", () => {
        closePopup();
    });
}




