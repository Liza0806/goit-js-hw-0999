import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const inputJs = document.querySelector("#datetime-picker");
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const timer = document.querySelector(".timer");
const fields = timer.querySelectorAll(".field")

timer.setAttribute("style", "display:flex;gap:10px;");
fields.forEach(field => {
  field.setAttribute("style", "display:flex; gap:5px; flex-direction:column; align-items:center;");
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
     
  },
};
flatpickr("#datetime-picker", options);

let dateNow = new Date();
console.log(dateNow)




const startBtn = document.querySelector("button");

 startBtn.addEventListener("click", () => selectDate(chosenDateObj));



function pad(value) {
    return String(value).padStart(2, "0")
}

let chosenDateObj = null;  
console.log(chosenDateObj)
//console.log(y)
function selectDate() {
  chosenDateObj = new Date(inputJs.value);  
    let y = Date.now() - chosenDateObj;
    console.log(y)
  if (y > 0) {
     alert('Please choose a date in the future');
     startBtn.setAttribute('disabled', true);
     return;
   }
   
    
        //console.log(selectedDates)
        //console.log(currentDate)
       
        setInterval(() => {
            let ms = chosenDateObj - Date.now();
        
            //console.log(x);
            let x = convertMs(ms);
            days.textContent = x.days;
            hours.textContent = x.hours;
            minutes.textContent = x.minutes;
            seconds.textContent = x.seconds;
         
        }, 1000)
        startBtn.removeAttribute('disabled');
        
       
   }
    




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
