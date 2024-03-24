
function changeColor(button) {
    button.style.backgroundColor = "#dc3545"; // Ubah warna tombol saat diklik
}

// Ambil elemen marquee
var marquee = document.getElementById('marquee-text');
var container = document.getElementById('marquee-container');

// Buat efek marquee
function marqueeEffect() {
    // Ubah posisi marquee
    var newPosition = marquee.offsetLeft - 1;
    marquee.style.left = newPosition + 'px';

    if (newPosition < -marquee.offsetWidth) {
        marquee.style.left = container.offsetWidth + 'px';
    }

    requestAnimationFrame(marqueeEffect);
}

marqueeEffect();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var audio = document.querySelector('audio');
var audioControl = document.getElementById('audio-control');

audioControl.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = 'Pause';
    } else {
        audio.pause();
        audioControl.textContent = 'Play';
    }
});




