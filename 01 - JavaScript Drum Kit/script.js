window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop from the function from running all together
    audio.currentTime = 0; // rewind the currentTime to 0
    audio.play();
    key.classList.toggle('playing');
});

