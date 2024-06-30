const fadersleft = document.querySelectorAll(".fade-left");
const fadersright = document.querySelectorAll(".fade-right");
const faderin = document.querySelectorAll(".fadein");
const faderout = document.querySelectorAll(".fadeout");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearScroll = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("_appear");
            //appearScroll.unobserve(entry.target);
        } else {
            //entry.target.classList.remove("_appear");
        }
    });
},
    appearOptions
);

if (fadersleft) {
    fadersleft.forEach(fader => {
        appearScroll.observe(fader);
    })
}

if (fadersright) {
    fadersright.forEach(fader => {
        appearScroll.observe(fader);
    })
}

if (faderin) {
    faderin.forEach(fader => {
        appearScroll.observe(fader);
    })
}
if (faderout) {
    faderout.forEach(fader => {
        appearScroll.observe(fader);
    })
}


