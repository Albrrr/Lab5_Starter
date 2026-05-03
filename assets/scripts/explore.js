// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
let voiceSelect;
let textInput;
let talkButton;
let faceImage;

function init() {
  voiceSelect = document.getElementById('voice-select');
  textInput = document.getElementById('text-to-speak');
  talkButton = document.querySelector('button');
  faceImage = document.querySelector('img');

  populateVoiceList();
  if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const talk = new SpeechSynthesisUtterance(textInput.value);
    if (voiceSelect.selectedOptions[0]){
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const voices = synth.getVoices();

      for(let i = 0; i < voices.length; i++){
        if (voices[i].name === selectedOption) {
          talk.voice = voices[i];
        }
      }
    }
    

    swapFace(talk);
    synth.speak(talk);
  });
}

function populateVoiceList() {
  const voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++){
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function swapFace(talk) {
  talk.addEventListener('start', () => {
    faceImage.src = 'assets/images/smiling-open.png';
  });

  talk.addEventListener('end', () => {
    faceImage.src = 'assets/images/smiling.png';
  });
}