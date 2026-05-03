// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const mainImage = document.querySelector('img');
  const audioElement = document.querySelector('audio');
  const volumeSelect = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    mainImage.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSelect.addEventListener('input', (event) => {
    const volume = event.target.value;
    audioElement.volume = volume / 100;

    if (volume == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value == 'party-horn'){
      confetti.addConfetti();
    }
  });
}