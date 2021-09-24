const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const nextYear = '1 Jan 2022'
const countdown = () => {
    const newYearDate = new Date(nextYear);
    const currentDate = new Date();
    const remainingTime= (newYearDate - currentDate);
    const secondes= remainingTime / 1000;
    const days=Math.floor(secondes /24/3600);
    const hours=Math.floor((secondes / 3600) % 24);
    const mins=Math.floor((secondes / 60) % 60);
    const secondesleft=Math.floor((secondes % 60));
    daysEl.innerHTML= days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML =secondesleft;
}
setInterval(countdown,1000);