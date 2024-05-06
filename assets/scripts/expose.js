// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
    // TODO
    const hornSound = document.querySelector("audio");
    const hornDropdown = document.getElementById("horn-select");
    const jsConfetti = new JSConfetti();
    hornDropdown.addEventListener("change", function (event) {
        const hornImage = document.querySelector("img");
        hornImage.src = "assets/images/" + event.target.value + ".svg";
        hornSound.src = "assets/audio/" + event.target.value + ".mp3";
    });

    const volumeSlider = document.getElementById("volume");
    volumeSlider.addEventListener("input", function (event) {
        const sliderValue = parseInt(event.target.value);
        const volumeImg = document.querySelector("#volume-controls img");
        hornSound.volume = sliderValue / 100;
        if (!(sliderValue > 0)) {
            volumeImg.src = "assets/icons/volume-level-0.svg";
        } else if (!(sliderValue > 33)) {
            volumeImg.src = "assets/icons/volume-level-1.svg";
        } else if (!(sliderValue > 67)) {
            volumeImg.src = "assets/icons/volume-level-2.svg";
        } else {
            volumeImg.src = "assets/icons/volume-level-3.svg";
        }
    });

    let playButton = document.querySelector("button");
    playButton.addEventListener("click", function () {
        if (hornDropdown.value !== "select") {
            hornSound.play();
            if (hornDropdown.value == "party-horn") {
                jsConfetti.addConfetti();
            }
        }
    });
}
