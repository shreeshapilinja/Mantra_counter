if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

const mantras = [
    "Om Bhur Bhuva Swaha, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat",
    "Om Namo Narayanaya",
    "Om Nama Shivaya",
    "Om Maitreya Namah",
    "Om Kreem Kalikayai Namah",
    "Om Gam Ganapataye Namah",
    "Om Shree Ganeshaya Namah",
    "Om Bhagavate Vasudevaya Namah",
    "Om Hreem Dum Durgayai Namah",
    "Sri Ram Jaya Ram Jaya Jaya Ram",
    "Jai Shree Ram",
    "Jai Shree Hanuman",
    "Swamiye Saranam Ayyappa",
    "Om Subramanyaya Namaha",
    "Om Shri Vardhanaya Namah",
    "Om Naga Devathayai Namaha",
    "Om Shree Saraswatyai Namaha",
    "Om Shree Lakshmi Devyai Namaha",
    "Om Brahma Devaya Namaha",
    "Om Shree Vishnuaya Namaha",
    "Radhe Radhe or Radhe Krishna",
    "Om Shri Satyanarayanaya Namaha",
    "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare"
];

let currentMantraIndex = 0;
let targetCount;
let count = 0;

function promptForTargetCount() {
    targetCount = parseInt(prompt("Enter the target count for each mantra:", "108"), 10) || 108;
}

function updateMantra() {
    document.getElementById("mantra").innerHTML = mantras[currentMantraIndex];
}

function increment(event) {
    event.stopPropagation(); // Prevent the event from propagating to the body click listener
    count += 1;
    document.getElementById("count").innerHTML = count;
    if (count >= targetCount) {
        playSoundAndVibrate();
        currentMantraIndex = (currentMantraIndex + 1) % mantras.length;
        updateMantra();
        count = 0;
        document.getElementById("count").innerHTML = count;
    }
}

function resetCounter() {
    count = 0;
    document.getElementById("count").innerHTML = count;
    currentMantraIndex = 0;
    promptForTargetCount();
    updateMantra();
}

function playSoundAndVibrate() {
    const audio = new Audio('./done.mp3'); // You can change the URL to any sound you like
    audio.play();
    if (navigator.vibrate) {
        navigator.vibrate(200); // Vibration for 200ms
    }
}

// Initialize
document.body.addEventListener("click", increment);
promptForTargetCount();
updateMantra();
