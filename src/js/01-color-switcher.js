
const bodyJs = document.querySelector("body");const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timerId = null;
buttonStart.addEventListener("click", () => {    if (bodyJs.classList.contains("isActive")) {
        return;}
    bodyJs.classList.toggle("isActive");
    timerId = setInterval(() => {        bodyJs.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }, 1000);
   });
buttonStop.addEventListener("click", () => {  
        clearInterval(timerId);     bodyJs.classList.remove("isActive");
   });