var audio = document.createElement('audio');
audio.setAttribute('src', 'Lamborghini_Sound.mp3');
audio.loop = true;

// Check if the audio file is loaded and ready to play
audio.addEventListener('canplaythrough', function () {
    console.log('Audio file is ready to play');
    audio.play();
}, false);

// Error handling
audio.addEventListener('error', function (e) {
    console.error('Error loading the audio:', e);
});

// Append the audio element to the document
document.body.appendChild(audio);
