// Footer date
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById('lastModified');
lastMod.textContent = document.lastModified;

// Wind Chill
const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

function calculateWindChill(temp, speed) {
  return (
    13.12 + 0.6215 * temp -11.37 * Math.pow(speed, 0.16) +0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

const chillSpan = document.getElementById('chill');
if (temp <= 10 && speed > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  chillSpan.textContent = 'N/A';
}