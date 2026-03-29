window.addEventListener('load', () => {
  document.body.classList.remove('container');

  const playButton = document.getElementById('playButton');
  const audioPlayer = document.getElementById('audioPlayer');
  const garden = document.getElementById('felizCumple');
  const petals = document.querySelector('.petals');

  playButton.addEventListener('click', () => {
    playButton.style.opacity = '0';
    audioPlayer.volume = 0.4;
    audioPlayer.play();
    setTimeout(() => {
      garden.style.display = 'block';
      petals.style.display = 'block';
      void garden.offsetHeight; // fuerza reflow para que la transición arranque
      garden.classList.add('garden-visible');
    }, 500);
  });
});
