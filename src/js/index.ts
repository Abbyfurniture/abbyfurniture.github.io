const smallImages = document.querySelectorAll(".hero-right-image");
const image = document.querySelector(".hero-image") as HTMLDivElement;
const dots = document.querySelectorAll(".dots");
const galleryslide = document.querySelectorAll(".gallery-slides-lists-images");

smallImages.forEach(smallImage => {
    smallImage.addEventListener("click", function () {
        let smallImgSrc = smallImage.querySelector("img") as HTMLImageElement;
        let ImgSrc = image.querySelector("img") as HTMLImageElement;

        let tempImg = ImgSrc.src;
        let tempSmallImg = smallImgSrc.src;

        smallImage.removeChild(smallImage.firstElementChild);
        let imgElement = document.createElement('img');
        imgElement.src = tempImg;
        smallImage.appendChild(imgElement);

        image.removeChild(image.firstElementChild);
        imgElement = document.createElement('img');
        imgElement.src = tempSmallImg;
        image.appendChild(imgElement);

       
    });
   

})


dots.forEach((dot,index) => {
    dot.addEventListener("click", () => {
        dots.forEach((dotTemp) => {
            dotTemp.classList.remove("_active");
        });

        dot.classList.add("_active");

        galleryslide.forEach((slide) => {
            slide.classList.remove("_active");
        });

        galleryslide[index].classList.add("_active");

    })
});
