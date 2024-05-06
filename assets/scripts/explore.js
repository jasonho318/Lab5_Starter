// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const voiceSelect = document.getElementById("voice-select");
  const utterance = new SpeechSynthesisUtterance();
  const speakingImage = document.querySelector("img");

  speechSynthesis.addEventListener("voiceschanged", function () {
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = voices[i].name;
      option.textContent = voices[i].voiceURI;
      voiceSelect.appendChild(option);
    }
  });

  voiceSelect.addEventListener("change", function (event) {
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(
      (voice) => voice.name === event.target.value
    );
    utterance.voice = selectedVoice;
  });

  const talkButton = document.querySelector("button");
  talkButton.addEventListener("click", function () {
    const textToSpeak = document.getElementById("text-to-speak");
    utterance.text = textToSpeak.value;
    speechSynthesis.speak(utterance);
  });

  utterance.onstart = function () {
    speakingImage.src = "assets/images/smiling-open.png";
  };

  utterance.onend = function () {
    speakingImage.src = "assets/images/smiling.png";
  };
}
