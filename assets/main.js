const SLIDE_COUNT = 6;

let current_slide = 0;

let dots = []

document.addEventListener("DOMContentLoaded", function () {
    const slides_display = document.getElementById("slides-display");


    for (let i = 0; i < SLIDE_COUNT; i++ ) {
        const dot = document.createElement("div");

        if (current_slide == i) {
            dot.className = "slides-dot selected-dot";
        }
        else {
            dot.className = "slides-dot";
        }

        dot.addEventListener("click", function () {
            shiftToSlide(i)
        })

        dots.push(dot);

        slides_display.appendChild(dot);
    }

    document.querySelector('object').addEventListener('click', () => {
        window.focus();
    });
})

function shiftToSlide(slide_num) {
    dots.at(current_slide).className = "slides-dot unselected-dot";

    current_slide = slide_num;

    dots.at(current_slide).className = "slides-dot selected-dot";

    this.document.getElementById("slide-display").data = `./slides/${current_slide + 1}.svg`;
}

window.addEventListener("keydown", function (ev) {
    if (ev.key == "ArrowRight")  {
        current_slide < SLIDE_COUNT - 1 ? shiftToSlide(current_slide + 1): shiftToSlide(0);
    }
    if (ev.key == "ArrowLeft") {
        current_slide > 0 ? shiftToSlide(current_slide - 1) : null;

    }
})