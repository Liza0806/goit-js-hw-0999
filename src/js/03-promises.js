const delayJs = document.querySelector('input[name = "delay"]');
const stepJs = document.querySelector('input[name = "step"]');
const amountJs = document.querySelector('input[name = "amount"]');
const submitBtn = document.querySelector("button");




submitBtn.addEventListener('click', makeSomeP);
function makeSomeP (e){  
  e.preventDefault();
  let am = Number(amountJs.value);
    let de = Number(delayJs.value);
    let st = Number(stepJs.value);

  for(let i = 1; i<= am; i++){ 
    let everPromiseDelay = de + st * i;
    createPromise(i, everPromiseDelay).then(({ position, delay }) => {
      console.log(` Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`Rejected promise ${position} in ${delay}ms`);
    });
  }
}
function createPromise(position, delay) {
 
   return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
     setTimeout(() => {
        if (shouldResolve) {
        resolve({ position, delay });
      } else {
       reject({ position, delay });
       }
     }, delay);
   })}