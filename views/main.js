window.addEventListener('load', () => {
  document.body.classList.remove('container');

  const playButton = document.getElementById('playButton');
  const audioPlayer = document.getElementById('audioPlayer');
  const garden = document.getElementById('felizCumple');

  playButton.addEventListener('click', () => {
    playButton.style.opacity = '0';
    audioPlayer.play();
    setTimeout(() => {
      garden.style.display = 'block';
    }, 500);
  });
});
