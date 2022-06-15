function attachEventsListeners() {
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let buttonDays = document.getElementById('daysBtn');
let buttonHours = document.getElementById('hoursBtn');
let buttonMinutes = document.getElementById('minutesBtn');
let buttonSeconds = document.getElementById('secondsBtn');
buttonDays.addEventListener('click', convert);
buttonHours.addEventListener('click',convert);
buttonMinutes.addEventListener('click',convert);
buttonSeconds.addEventListener('click',convert);
let ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400 
}
function onConvert(value , unit){
    let days = value / ratios[unit];
    return {
        days,
        hours : days * ratios.hours,
        minutes : days * ratios.minutes,
        seconds : days * ratios.seconds
    }
}
function convert(e){
let input = e.target.parentElement.querySelector('input[type="text"]');
let time = onConvert(Number(input.value) , input.id);
days.value = time.days;
hours.value = time.hours;
minutes.value = time.minutes;
seconds.value = time.seconds;
}
}