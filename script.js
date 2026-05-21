// resize vh for mobile
mobileResize();

function mobileResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', () => {
    mobileResize();
});


// place dots

let container = document.querySelector('.clock-face');
let radius = 205; // distance from center in px
getRadius();
let total = 12;

placeDots();

function placeDots() {
    for (let i = 1; i <= total; i++) {
        let angle = (i * (Math.PI * 2 / total)) - Math.PI / 2;
        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;
        const div = document.createElement('div');
        div.className = 'clock-dot';
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        container.appendChild(div);
    }
}

function getRadius() {
    if (window.innerWidth < 960) {
        radius = 0.6 * 205;
    } else {
        radius = 205;
    }
}

window.addEventListener('resize', () => {
    getRadius();
    document.querySelector('.clock-face').innerHTML = ""; // remove all previously placed numbers
    placeDots(); // place numbers in new center
});

// timer for overlay

let overlay = document.querySelector('.overlay');
let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let timerSound = document.getElementById('timerSound');

document.addEventListener("click", () => {
    console.log("clicked start");
    
    timerSound.play();

    hourHand.classList.add("hour-hand-animation");
    minuteHand.classList.add("minute-hand-animation");

    setTimeout(() => {
        overlay.style.display = "block";
    }, 85000);
});
