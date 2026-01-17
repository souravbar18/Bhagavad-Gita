let player = new Audio("harekrishna.mp3");
let playing = false;

document.getElementById("playBtn").onclick = function () {
    if (!playing) {
        player.play();
        playing = true;
        this.innerText = "⏸ Pause Mantra";
    } else {
        player.pause();
        playing = false;
        this.innerText = "🔊 Play Mantra";
    }
};
